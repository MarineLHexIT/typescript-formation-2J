import { CategoriePlat, Plat, CommandeAvecReduction } from '../src/exo6';
import { describe, expect, it } from '@jest/globals';

describe('Exercice 6 - Mixins', () => {

    it("Applique une réduction à la commande", () => {
        const plat: Plat = { nom: "Pizza", prix: 20, categorie: CategoriePlat.PlatPrincipal };

        const commande = new CommandeAvecReduction<Plat>();
        commande.ajouterItem(plat);

        commande.appliquerReduction(10); // 10% de réduction

        expect(commande.calculerTotal()).toBeCloseTo(24);
        expect(commande.calculerTotalAvecReduction()).toBeCloseTo(21.6);
        expect(commande.getReduction()).toBeCloseTo(10);
    });

    it("Empêche les réductions invalides", () => {
        const commande = new CommandeAvecReduction();

        expect(() => commande.appliquerReduction(-5)).toThrow();
        expect(() => commande.appliquerReduction(105)).toThrow();
    });

});
