export function calculerAddition(prix: number[], taxes: number = 0.2, pourboire?: number): number {

    if (prix.some((p) => p < 0)) {
        throw new Error("All prix must be greater than 0");
    }

    if (taxes < 0) {
        throw new Error("Taxes must be greater than 0");
    }

    if (pourboire && pourboire < 0) {
        throw new Error("Pourboire must be greater than 0");
    }

    return (
        prix.reduce((a, b) => a + b, 0) * (1 + taxes)
    ) + (pourboire ? pourboire : 0);
}

export enum CategoriePlat {
    Entree = "starter",
    PlatPrincipal = 'main',
    Fromage = 'cheese',
    Dessert = 'dessert'
};

export function creerPlat(nom: string, categorie: CategoriePlat, prix: number): [string,CategoriePlat,number] {
    return [nom, categorie, prix];
}

export function calculerAdditionPourMenu(
    menu: [string, string, number][],
    taxes:number = 0.2,
    pourboire?: number
) {

    return calculerAddition(
        menu.map(row => row[2]),
        taxes,
        pourboire
    )
}

export function afficherMenu(menu: [string, string, number][]): string {
    // todo
    return "";
}