import { CategoriePlat, Plat, CommandeAvecReduction } from '../src/exo6';
import { describe, expect, it } from '@jest/globals';

describe('Exercice 6 - Mixins', () => {

    it("Applique une réduction à la commande", () => {
        const plat: Plat = { nom: "Pizza", prix: 20, categorie: CategoriePlat.PlatPrincipal };

        const commande = new CommandeAvecReduction<Plat>();
        commande.ajouterItem(plat);

        expect(commande.calculerTotal()).toBeCloseTo(24);
        expect(commande.calculerTotalAvecReduction()).toBeCloseTo(19.2);
        expect(commande.getReduction()).toBeCloseTo(20);
    });

    it("Empêche les réductions invalides", () => {
        const commande = new CommandeAvecReduction();
    });

});
