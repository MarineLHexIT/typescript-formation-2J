import { describe, expect, it } from '@jest/globals';
import {
    afficherDetailsReservation,
    creerReservation,
    estReservationGroupe,
    mettreAJourReservation
} from '../src/exo7';

describe('Exercice 7 - Concepts avancés', () => {

    describe('Système de réservation de tables', () => {
        it('Crée une petite réservation sans menu', () => {
            const reservation = creerReservation({
                client: 'Alice',
                nombrePersonnes: 4,
                date: new Date('2024-12-25')
            });

            expect(reservation.getClient()).toBe('Alice');
            expect(reservation.getNombrePersonnes()).toBe(4);
            expect(reservation.afficher()).toBe(
                'Client: Alice, Date: 2024-12-25T00:00:00.000Z, Nombre: 4'
            );
        });

        it('crée une grande réservation avec menu', () => {
            const reservation = creerReservation({
                client: 'Bob',
                date: new Date('2024-12-25'),
                nombrePersonnes: 8,
                menu: 'Menu gourmet',
            });

            expect(reservation.getClient()).toBe('Bob');
            expect(reservation.getNombrePersonnes()).toBe(8);
            expect(reservation.getMenu()).toBe('Menu gourmet');
            expect(reservation.afficher()).toBe(
                'Client: Bob, Date: 2024-12-25T00:00:00.000Z, Nombre: 8, Menu: Menu gourmet'
            );
        });

        it('ne peut pas créer une grande réservation sans menu', () => {

            expect(() => {
                creerReservation({
                    client: 'Bob',
                    date: new Date('2024-12-25'),
                    nombrePersonnes: 8
                });
            }).toThrow('Un menu est requis pour une grande réservation.');
        });
    });

    describe('Mise à jour des réservations', () => {

        it('met à jour le client et la date d’une réservation', () => {
            const reservation = creerReservation({
                client: 'Charlie',
                date: new Date('2024-12-25'),
                nombrePersonnes: 6,
            });

            const reservationModifiee =
                creerReservation(
                    mettreAJourReservation(
                        reservation.getReservation(),
                        {
                            client: 'Charlotte',
                            date: new Date('2024-12-31'),
                        }
                    ));

            expect(reservationModifiee.getClient()).toBe('Charlotte');
            expect(reservationModifiee.getDate().toISOString()).toBe('2024-12-31T00:00:00.000Z');
        });

        it('met à jour le nombre de personnes', () => {
            const reservation = creerReservation({
                client: 'Charlie',
                date: new Date('2024-12-25'),
                nombrePersonnes: 6,
            });

            expect(() => {
                creerReservation(
                    mettreAJourReservation(
                        reservation.getReservation(),
                        {
                            nombrePersonnes: 8
                        }
                    ));
            }).toThrow("Un menu est requis pour une grande réservation.")
        })
    });

    describe('Journalisation des appels via décorateurs', () => {
        it('journalise les appels à la méthode afficher', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            const reservation = creerReservation({
                client: 'David',
                date: new Date('2024-12-25'),
                nombrePersonnes: 8,
                menu: 'Menu prestige',
            });

            reservation.afficher();

            expect(consoleSpy).toHaveBeenNthCalledWith(
                1,
                'Appel de afficher avec les paramètres :',
                []
            );
            expect(consoleSpy).toHaveBeenNthCalledWith(
                2,
                'Résultat :',
                "Client: David, Date: 2024-12-25T00:00:00.000Z, Nombre: 8, Menu: Menu prestige"
            );

            consoleSpy.mockRestore(); // Nettoie le moquage
        });
    });

    describe('Validation des groupes', () => {
        it('reconnaît une grande réservation comme un groupe', () => {
            const reservationGroupe = {
                client: 'Eve',
                date: new Date('2024-12-25'),
                nombrePersonnes: 9,
                menu: 'Menu familial',
            };

            expect(estReservationGroupe(reservationGroupe)).toBe(true);
        });

        it('reconnaît une petite réservation comme non-groupe', () => {
            const reservationPetite = {
                client: 'Frank',
                date: new Date('2024-12-25'),
                nombrePersonnes: 3,
            };

            expect(estReservationGroupe(reservationPetite)).toBe(false);
        });
    });

    describe('Validation des types conditionnels pour les réservations', () => {
        it('affiche correctement les détails pour une petite réservation', () => {
            const reservationPetite = {
                client: 'Grace',
                date: new Date('2024-12-25'),
                nombrePersonnes: 4,
            };

            expect(afficherDetailsReservation(reservationPetite)).toBe(
                'Petite réservation pour Grace, pas de menu sélectionné.'
            );
        });

        it('affiche correctement les détails pour une grande réservation', () => {
            const reservationGrande = {
                client: 'Henry',
                date: new Date('2024-12-25'),
                nombrePersonnes: 10,
                menu: 'Menu VIP',
            };

            expect(afficherDetailsReservation(reservationGrande)).toBe(
                'Grande réservation pour Henry avec le menu Menu VIP'
            );
        });
    });
});
