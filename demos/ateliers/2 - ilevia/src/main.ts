const API = 'https://data.lillemetropole.fr/data/ogcapi/collections/prochains_passages/items?f=json&limit=-1';

type APIJson = {
    identifiant_station: string,
    nom_station: string,
    code_ligne: string,
    sens_ligne: string,
    heure_estimee_depart: string
}

const fetchAPI = async (): Promise<Array<APIJson>> => {

    try {
        const response = await fetch(API);
        if ( !response.ok ) {
            throw new Error(`Response status: ${ response.status }`);
        }
        const json = await response.json();
        return json.records;
    } catch ( error: any ) {
        console.error(error.message);
    }

    return [];
};

const updateRefreshSpan = () => {
    const lastRefresh: HTMLSpanElement | null = document.querySelector('#last-refresh span');

    if ( !lastRefresh ) {
        return;
    }

    lastRefresh.innerHTML = (new Date()).toLocaleTimeString();
};


document.addEventListener('DOMContentLoaded', async () => {

    const selectStation: HTMLSelectElement | null = document.querySelector('#select-station');
    const tBody: HTMLTableElement | null = document.querySelector('#next-bus tbody');

    let data: Array<APIJson> | undefined = undefined;
    let selectedStation: string | undefined = undefined;

    if ( !(selectStation && tBody) ) {
        return;
    }

    const updateTBody = () => {

        // Reset du tableau
        tBody.innerHTML = '';

        const noDataTr = document.createElement('tr');
        const noDataTd = document.createElement('td');
        noDataTd.textContent = 'No data';
        noDataTd.colSpan = 3;
        noDataTr.appendChild(noDataTd);

        if ( data === undefined || data.length === 0 ) {
            tBody.appendChild(noDataTr);
            return;
        }

        // Filtrer les données en fonction du
        const filteredData = data.filter((line) => {
            return line.nom_station === selectedStation;
        });

        if ( filteredData.length === 0 ) {
            tBody.appendChild(noDataTr);
            return;
        }

        const now = new Date();

        filteredData
            .sort((lineA, lineB): number => {
                const timeA = new Date(lineA.heure_estimee_depart);
                const timeB = new Date(lineB.heure_estimee_depart);
                return timeA.getTime() - timeB.getTime();
            })
            .forEach((line) => {
                const tr = document.createElement('tr');
                const nextPassage = new Date(line.heure_estimee_depart.substring(0, line.heure_estimee_depart.length - 6));
                const nbMinutes = (nextPassage.getTime() - now.getTime()) / 60000;

                let nextPassageText = `Dans ${ Math.floor(nbMinutes) } minutes`;

                if ( nbMinutes < 1 ) {
                    nextPassageText = 'Passage imminent';
                }

                tr.innerHTML = `<td>${ line.code_ligne }</td>` +
                    `<td>${ line.sens_ligne }</td>` +
                    `<td>${ nextPassageText }</td>`;
                tBody.appendChild(tr);
            });

    };

    const onChangeSelectStation = (event: Event) => {
        selectedStation = (event.target as HTMLSelectElement).value;
        updateTBody();
    };
    selectStation.addEventListener('change', onChangeSelectStation);

    setInterval(async () => {
        data = await fetchAPI();
        updateTBody();
        updateRefreshSpan();
    }, 30 * 1000);

    fetchAPI().then((response: Array<APIJson>) => {

        data = response;

        response
            // Ne garder que ligne et station, et supprimer les doublons
            .filter((line, index, self) => {
                return index === self.findIndex(l => l.nom_station === line.nom_station);
            })
            // Trier par ligne, puis direction
            .sort((lineA, lineB): number => {
                return lineA.nom_station.localeCompare(lineB.nom_station);
            })
            // Ajouter les options
            .forEach((line) => {
                const option = document.createElement('option');

                option.value = line.nom_station;
                option.textContent = `${ line.nom_station }`;

                selectStation.add(option);
            });

        updateRefreshSpan();
    });

}, false);