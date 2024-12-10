export function clientsRestants(capaciteMax: number, clientsPlaces: number): number {

    if (capaciteMax < 0) {
        throw new Error("capaciteMax and clientsPlaces must be greater than 0");
    }

    if (clientsPlaces < 0) {
        throw new Error("clientsPlaces must be greater than 0");
    }

    if (clientsPlaces > capaciteMax) {
        throw new Error("clientsPlaces must be smaller than capaciteMax");
    }

    return capaciteMax - clientsPlaces;
}

export function peutAccepterReservation(
    capaciteMax: number,
    clientsPlaces: number,
    reservation: number
) {

    if (reservation < 0) {
        throw new Error("reservation must be greater than 0");
    }

    return clientsRestants(capaciteMax, clientsPlaces) >= reservation;
}

export function calculerAddition(
    montant: number,
    taxes: number = 0.2,
    pourboire?: number
) {

    if (montant < 0) {
        throw new Error("montant must be greater than 0");
    }

    if (taxes < 0) {
        throw new Error("taxes cannot be negative");
    }

    if (pourboire && pourboire < 0) {
        throw new Error("pourboire cannot be negative");
    }

    const total = montant + (montant * taxes);
    return pourboire ? total + pourboire : total;
}