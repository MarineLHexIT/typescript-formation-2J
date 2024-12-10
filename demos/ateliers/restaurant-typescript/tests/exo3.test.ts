import { calculerAddition, calculerAdditionPourMenu, CategoriePlat, creerPlat } from '../src/exo3';
import { describe, expect, it } from '@jest/globals';

describe('Exercice 3 - les tableaux, enums, tuples', () => {

    it('Calculer l’addition', () => {

        // Tout va bien
        expect(calculerAddition([])).toBeCloseTo(0);
        expect(calculerAddition([50, 50])).toBeCloseTo(120);
        expect(calculerAddition([50, 50], 0.1)).toBeCloseTo(110);
        expect(calculerAddition([50, 50], 0.2, 20)).toBeCloseTo(140);

        // Ça doit foirer
        expect(() => {
            calculerAddition([50, -50]);
        }).toThrow(Error);

        expect(() => {
            calculerAddition([50, 50], -5, 20);
        }).toThrow(Error);

        expect(() => {
            calculerAddition([50, 50], 0.2, -100);
        }).toThrow(Error);
    });

    it('Créer des plats', () => {

        expect(
            creerPlat(
                'Soupe au saumon',
                CategoriePlat.PlatPrincipal,
                20.0)
        ).toStrictEqual(['Soupe au saumon', CategoriePlat.PlatPrincipal, 20.0]);
    });

    it("Calculer l’addition d’un menu", () => {

        expect(
            calculerAdditionPourMenu(
                [
                    creerPlat("Œufs en meurette", CategoriePlat.Entree, 10),
                    creerPlat("Bœuf bourguignon", CategoriePlat.PlatPrincipal, 20),
                    creerPlat("Plateau de fromage", CategoriePlat.Entree, 8),
                    creerPlat("Profiteroles", CategoriePlat.Entree, 6),
                ]
            )
        ).toBeCloseTo(52.8);
    })
});