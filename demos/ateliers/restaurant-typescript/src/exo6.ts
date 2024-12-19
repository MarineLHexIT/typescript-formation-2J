export enum CategoriePlat {
    Entrée = 'starter',
    PlatPrincipal = 'main',
    Fromage = 'cheese',
    Dessert = 'dessert',
    Boisson = 'boisson'
};

export interface Plat {
    nom: string;
    categorie: CategoriePlat;
    prix: number;
}

export class Commande<T extends { prix: number }> {
    private items: T[] = [];

    ajouterItem(item: T) {
        this.items.push(item);
    }

    calculerTotal(taxes: number = 0.2, pourboire?: number) {

        if ( taxes < 0 ) {
            throw new Error('Taxes must be greater than 0');
        }

        if ( pourboire && pourboire < 0 ) {
            throw new Error('Pourboire must be greater than 0');
        }

        return (1 + taxes) * this.items
            .map(item => item.prix)
            .reduce((a, b) => a + b, 0) + (pourboire ? pourboire : 0);
    }

    getItems() {
        return this.items;
    }
}

type Constructor<T = {}> = new (...args: any[]) => { calculerTotal: () => number};

export function Reductionnable<TBase extends Constructor>(Base: TBase, reduction: number = 15) {
    return class extends Base {
        private reduction: number = reduction;

        calculerTotalAvecReduction(): number {
            return this.calculerTotal() * ((100 - this.reduction) / 100.0);
        }

        getReduction() {
            return this.reduction;
        }
    };
}

class Taille {
    calculerTotal() {
        return 100;
    }
}

export const CommandeAvecReduction = Reductionnable(Commande, 20);

const c = new CommandeAvecReduction();
export const TailleAvecReduction = Reductionnable(Taille);

