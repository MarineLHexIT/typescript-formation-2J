type ReservationBase = {
    client: string;
    date: Date;
    nombrePersonnes: number;
    menu: string; // Le menu est optionnel pour certaines réservations
};

// Alias Type
type NombrePersonnes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type ReservationConditionnelle<T extends NombrePersonnes> =
    T extends 1 | 2 | 3 | 4 | 5 | 6
        ? Omit<ReservationBase, 'menu'> // Les petites réservations n'ont pas de menu
        : ReservationBase; // Les grandes réservations nécessitent un menu

// Décorateurs
function LogReservation(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Appel de ${ propertyKey } avec les paramètres :`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Résultat :`, result);
        return result;
    };
}

// Classe avec générique
class Reservation<T extends NombrePersonnes> {
    constructor(private reservation: ReservationConditionnelle<T>) {
    }

    @LogReservation
    afficher(): string {
        const baseInfo = `Client: ${ this.reservation.client }, Date: ${ this.reservation.date.toISOString() }, Nombre: ${ this.reservation.nombrePersonnes }`;
        return 'menu' in this.reservation ? `${ baseInfo }, Menu: ${ this.reservation.menu }` : baseInfo;
    }

    valider(): void {
        if ( 'menu' in this.reservation && this.reservation.nombrePersonnes <= 6 ) {
            throw new Error('Un menu ne peut pas être ajouté à une petite réservation.');
        }
        if ( !('menu' in this.reservation) && this.reservation.nombrePersonnes > 6 ) {
            throw new Error('Un menu est requis pour une grande réservation.');
        }
    }

    getReservation() {
        return this.reservation;
    }

    getClient() {
        return this.reservation.client;
    }

    getDate() {
        return this.reservation.date;
    }

    getNombrePersonnes() {
        return this.reservation.nombrePersonnes;
    }

    getMenu() {
        return 'menu' in this.reservation ? this.reservation.menu : '';
    }
}


// Types mappés
type ReservationMapped<T extends NombrePersonnes> = {
    [K in keyof ReservationConditionnelle<T>]: ReservationConditionnelle<T>[K];
};

type MiseAJourReservation<T extends NombrePersonnes> = Partial<ReservationConditionnelle<T>>;

export function mettreAJourReservation<T extends NombrePersonnes>(
    ancienne: ReservationConditionnelle<T>,
    miseAJour: MiseAJourReservation<T>
): ReservationConditionnelle<T> {
    return { ...ancienne, ...miseAJour };
}


// Factory
export function creerReservation<T extends NombrePersonnes>(
    data: ReservationConditionnelle<T>
): Reservation<T> {
    const reservation = new Reservation(data);
    reservation.valider();
    return reservation;
}

// Exemple
function afficherReservationMappee<T extends NombrePersonnes>(
    reservation: ReservationMapped<T>
): string {
    return `Client: ${ reservation.client }, Nombre: ${ reservation.nombrePersonnes }`;
}

const reservationData = { client: 'Alice', date: new Date(), nombrePersonnes: 4 };
const reservation = creerReservation(reservationData);
console.log(afficherReservationMappee(reservationData));
// Client: Alice, Nombre: 4

type NombrePersonnesGrandGroupe = 7 | 8 | 9 | 10;

type ReservationGroupe = ReservationConditionnelle<NombrePersonnesGrandGroupe>;

const reservationGroupe: ReservationGroupe = {
    client: "Eve",
    date: new Date(),
    nombrePersonnes: 9,
    menu: "Menu familial",
};


console.log(reservationGroupe);
// { client: 'Eve', date: [ISO string], nombrePersonnes: 9, menu: 'Menu familial' }


export function afficherDetailsReservation<T extends NombrePersonnes>(
    reservation: ReservationConditionnelle<T>
): string {
    if (reservation.nombrePersonnes > 6) {
        return `Grande réservation pour ${reservation.client} avec le menu ${(reservation as ReservationBase).menu}`;
    }
    return `Petite réservation pour ${reservation.client}, pas de menu sélectionné.`;
}

console.log(
    afficherDetailsReservation({
        client: "Frank",
        date: new Date(),
        nombrePersonnes: 3,
    })
);
// Petite réservation pour Frank, pas de menu sélectionné.

console.log(
    afficherDetailsReservation({
        client: "Grace",
        date: new Date(),
        nombrePersonnes: 8,
        menu: "Menu gourmet",
    })
);
// Grande réservation pour Grace avec le menu Menu gourmet.


export function estReservationGroupe<T extends NombrePersonnes>(
    reservation: ReservationConditionnelle<T>
): reservation is ReservationConditionnelle<7 | 8 | 9 | 10> {
    return reservation.nombrePersonnes > 6;
}

const reservation1 = { client: "Hugo", date: new Date(), nombrePersonnes: 3 };
const reservation2 = { client: "Ivy", date: new Date(), nombrePersonnes: 9, menu: "Menu VIP" };

console.log(estReservationGroupe(reservation1)); // false
console.log(estReservationGroupe(reservation2)); // true
