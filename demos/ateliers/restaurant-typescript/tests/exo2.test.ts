import { clientsRestants, calculerAddition, peutAccepterReservation } from '../src/exo2';
import { describe, expect, it } from '@jest/globals';

describe('Exercice 2 - les fonctions', () => {

    it('Calculer le nombre de places restantes dans le restaurant', () => {
        expect(clientsRestants(50, 20)).toBe(30);
        expect(clientsRestants(20, 20)).toBe(0);

        expect(() => {
            clientsRestants(40, -20)
        }).toThrow(Error);
        expect(() => {
            clientsRestants(-10, 20)
        }).toThrow();
        expect(() => {
            clientsRestants(10, 20)
        }).toThrow();
    });

    it('Vérifier si une réservation peut être acceptée.', () => {
        expect(peutAccepterReservation(50, 10, 10)).toBe(true);
        expect(peutAccepterReservation(50, 45, 10)).toBe(false
        );

        expect(() => {
            peutAccepterReservation(50, 45, -10)
        }).toThrow();
    });

    it('Calculer l’addition avec pourboire et taxes', () => {
        expect(calculerAddition(50, 0.05, 15)).toBe(67.50);
        expect(calculerAddition(50, 0, 0)).toBe(50);

        expect(calculerAddition(0, 0, 0)).toBe(0);

        expect(() => {
            calculerAddition(-10, 0, 0)
        }).toThrow();
        expect(() => {
            calculerAddition(100, -0.2, 0)
        }).toThrow();
        expect(() => {
            calculerAddition(100, 0.2, -20)
        }).toThrow();
    });

    it('Calculer l’addition sans pourboire ou taxes', () => {
        expect(calculerAddition(100)).toBe(120);
    });
});