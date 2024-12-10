import { CategoriePlat, Plat, Commande } from '../src/exo4';
import { describe, expect, it } from '@jest/globals';

describe('Exercice 4 - Objets, Interfaces, Génériques', () => {

    it('Ajouter des plats à la commande et calculer le total', () => {
        const entree: Plat = { nom: 'Salade César', prix: 12.5, categorie: CategoriePlat.Entrée };
        const platPrincipal: Plat = { nom: 'Steak Frites', prix: 20.0, categorie: CategoriePlat.PlatPrincipal };

        const commande = new Commande<Plat>();
        commande.ajouterItem(entree);
        commande.ajouterItem(platPrincipal);

        expect(commande.calculerTotal()).toBe(32.5 * 1.2);
    });

    it('Obtenir la liste des plats de la commande', () => {
        const dessert: Plat = { nom: 'Tiramisu', prix: 8.5, categorie: CategoriePlat.Dessert };

        const commande = new Commande<Plat>();
        commande.ajouterItem(dessert);

        expect(commande.getItems()).toEqual([dessert]);
    });

    it('Gérer une commande vide', () => {
        const commande = new Commande<Plat>();
        expect(commande.calculerTotal()).toBe(0);
        expect(commande.getItems()).toEqual([]);
    });

});
