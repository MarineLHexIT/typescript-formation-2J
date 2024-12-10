describe("Exercice 1 : Types primitifs", () => {

    it("Le nom du restaurant doit être une chaîne de caractères", () => {
        const nomRestaurant: string = "Chez Typescript";
        expect(typeof nomRestaurant).toBe("string");
    });

    it("Le nombre de tables doit être un nombre", () => {
        const nombreDeTables: number = 20;
        expect(typeof nombreDeTables).toBe("number");
    });

    it("L'indicateur d'ouverture doit être un booléen", () => {
        const estOuvert: boolean = true;
        expect(typeof estOuvert).toBe("boolean");
    });

    it("Le nom du propriétaire doit être une chaîne de caractères", () => {
        const nomProprietaire: string = "Jean Dupont";
        expect(typeof nomProprietaire).toBe("string");
    });

    it("L'année de création doit être un nombre", () => {
        const anneeCreation: number = 1995;
        expect(typeof anneeCreation).toBe("number");
    });

    it("L'indicateur de livraison doit être un booléen", () => {
        const proposeLivraison: boolean = false;
        expect(typeof proposeLivraison).toBe("boolean");
    });

});
