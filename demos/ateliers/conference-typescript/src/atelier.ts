// Enum pour les types de conférence
enum EventKind {
    Conference = "Conférence",
    Meetup = "Rencontre",
    Webinar = "Webinaire"
}

function printEvent(
    title: string,
    description: string,
    speaker: string,
    date: Date,
    capacity: number = 100,
    rsvp: number,
    kind: EventKind,
    price?: number | string,
    url?: string
) {

    console.log(`${date} - [${kind.toUpperCase()}] ${title} par ${speaker}`);
    console.log(`${description}`);
    if (capacity > 0) {
        console.log(`${ rsvp } / ${ capacity }`);
    }
    else {
        console.log(`${ rsvp }`);
    }

    if (price) {
        console.log(`Tarif : ${ price }`)
    }

    if (kind === EventKind.Webinar && url) {
        console.log(`Accès : ${url}`);
    }
}

function

printEvent(
    "Formation Typescript pour débutants",
    "Formation Typescript sur 2 jours, accès à tous les niveaux",
    "Marine LANCIEN",
    new Date(),
    15,
    0,
    EventKind.Webinar,
    "1180€ HT",
    "http://example.com"
);