"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API = 'https://data.lillemetropole.fr/data/ogcapi/collections/prochains_passages/items?f=json&limit=-1';
const fetchAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = yield response.json();
        return json.records;
    }
    catch (error) {
        console.error(error.message);
    }
    return [];
});
const updateRefreshSpan = () => {
    const lastRefresh = document.querySelector('#last-refresh span');
    if (!lastRefresh) {
        return;
    }
    lastRefresh.innerHTML = (new Date()).toLocaleTimeString();
};
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const selectStation = document.querySelector('#select-station');
    const tBody = document.querySelector('#next-bus tbody');
    let data = undefined;
    let selectedStation = undefined;
    if (!(selectStation && tBody)) {
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
        if (data === undefined || data.length === 0) {
            tBody.appendChild(noDataTr);
            return;
        }
        // Filtrer les données en fonction du
        const filteredData = data.filter((line) => {
            return line.nom_station === selectedStation;
        });
        if (filteredData.length === 0) {
            tBody.appendChild(noDataTr);
            return;
        }
        const now = new Date();
        filteredData
            .sort((lineA, lineB) => {
            const timeA = new Date(lineA.heure_estimee_depart);
            const timeB = new Date(lineB.heure_estimee_depart);
            return timeA.getTime() - timeB.getTime();
        })
            .forEach((line) => {
            const tr = document.createElement('tr');
            const nextPassage = new Date(line.heure_estimee_depart.substring(0, line.heure_estimee_depart.length - 6));
            const nbMinutes = (nextPassage.getTime() - now.getTime()) / 60000;
            let nextPassageText = `Dans ${Math.floor(nbMinutes)} minutes`;
            if (nbMinutes < 1) {
                nextPassageText = 'Passage imminent';
            }
            tr.innerHTML = `<td>${line.code_ligne}</td>` +
                `<td>${line.sens_ligne}</td>` +
                `<td>${nextPassageText}</td>`;
            tBody.appendChild(tr);
        });
    };
    const onChangeSelectStation = (event) => {
        selectedStation = event.target.value;
        updateTBody();
    };
    selectStation.addEventListener('change', onChangeSelectStation);
    setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
        data = yield fetchAPI();
        updateTBody();
        updateRefreshSpan();
    }), 30 * 1000);
    fetchAPI().then((response) => {
        data = response;
        response
            // Ne garder que ligne et station, et supprimer les doublons
            .filter((line, index, self) => {
            return index === self.findIndex(l => l.nom_station === line.nom_station);
        })
            // Trier par ligne, puis direction
            .sort((lineA, lineB) => {
            return lineA.nom_station.localeCompare(lineB.nom_station);
        })
            // Ajouter les options
            .forEach((line) => {
            const option = document.createElement('option');
            option.value = line.nom_station;
            option.textContent = `${line.nom_station}`;
            selectStation.add(option);
        });
        updateRefreshSpan();
    });
}), false);
