### **Slides pour la section : Tests avec TypeScript**

---

### **Slide 1 : Pourquoi tester avec TypeScript ?**
**Titre :** Pourquoi tester même avec TypeScript ?

**Contenu :**
- **TypeScript garantit :**
    - Cohérence des types au moment de la compilation.
    - Détection d'erreurs courantes avant l'exécution.
- **Mais TypeScript ne protège pas contre :**
    - Les erreurs de logique métier.
    - Les bugs dans l'interaction avec des API ou des bases de données.
    - Les erreurs inattendues dans des scénarios réels (edge cases).
- **Conclusion :**  
  Typage statique ≠ Remplacement des tests !

**Oral :**
> *"TypeScript est une aide précieuse pour réduire les erreurs, mais les tests restent indispensables pour garantir que votre code fonctionne correctement dans tous les cas possibles."*

---

### **Slide 2 : Quels outils utiliser ?**
**Titre :** Frameworks de test pour TypeScript

**Contenu :**
- **Jest :**
    - Configuration simple et riche en fonctionnalités.
    - Supporte TypeScript via `ts-jest`.
- **Mocha + Chai :**
    - Très flexible, idéal pour les besoins personnalisés.
    - Nécessite un peu plus de configuration avec TypeScript.
- **Vitest :**
    - Léger et rapide.
    - Syntaxe proche de Jest, support TypeScript natif.
- **Supertest :**
    - Teste les requêtes HTTP (API, serveurs)

**Oral :**
> *"Le choix d’un framework dépend de vos besoins et préférences. Pour cette formation, nous allons utiliser Jest, qui est simple et populaire."*

---

### **Slide 3 : Présentation de Jest**
**Titre :** Framework Jest

**Contenu :**
- **Points forts :**
    - Configuration simple et support natif de TypeScript avec `ts-jest`.
    - Fonctionnalités riches : mocks, snapshots, couverture de code.
    - Communauté active et plugins.


- **Exemple de test avec Jest :**
  ```typescript
  function divide(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }

  test('divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('division by zero throws error', () => {
    expect(() => divide(6, 0)).toThrow('Division by zero');
  });
  ```  

**Oral :**
> *"Jest est parfait pour la plupart des projets TypeScript. Il gère tout, des tests simples aux scénarios complexes avec mocks et spies."*

---

### **Slide 4 : Présentation de Mocha + Chai**
**Titre :** Framework Mocha avec Chai

**Contenu :**
- **Points forts :**
    - Flexibilité pour les projets avec des besoins spécifiques.
    - `Chai` offre des assertions lisibles et puissantes.
  

- **Exemple de test avec Mocha :**
  ```typescript
  import { expect } from 'chai';

  function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(4)).to.be.true;
    });

    it('should return false for odd numbers', () => {
      expect(isEven(5)).to.be.false;
    });
  });
  ```  

**Oral :**
> *"Mocha offre une grande liberté, mais nécessite un peu plus de configuration. Il est souvent utilisé pour des projets où les tests doivent être très personnalisés."*

---

### **Slide 5 : Présentation de Vitest**
**Titre :** Framework Vitest

**Contenu :**
- **Points forts :**
    - Léger et rapide, idéal pour les projets modernes.
    - Compatible avec la syntaxe de Jest, donc facile à apprendre.

- **Exemple de test avec Vitest :**
  ```typescript
  import { expect, test } from 'vitest';

  function reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  test('reverses a string', () => {
    expect(reverse('abc')).toBe('cba');
  });
  ```  

**Oral :**
> *"Vitest est une alternative moderne à Jest, spécialement adaptée aux projets rapides ou aux environnements modernes comme Vite."*

---

### **Slide 6 : Configurer Jest avec TypeScript**
**Titre :** Installer et configurer Jest

**Contenu :**
1. **Installer Jest et ses dépendances :**
   ```bash
   npm install --save-dev jest ts-jest @types/jest
   ```  
2. **Configurer Jest :**  
   Ajouter un fichier `jest.config.js` avec des commentaires :
   ```javascript
   module.exports = {
     // Utilise ts-jest pour la transpilation TypeScript
     preset: 'ts-jest',
     // Environnement Node pour les tests backend (peut être changé en jsdom pour le frontend)
     testEnvironment: 'node',
     // Fichiers de test ciblés avec une extension .test.ts
     testMatch: ['**/*.test.ts'],
   };
   ```  
3. **Configurer `tsconfig.json` :**
   ```json
   {
     "include": ["src/**/*.ts", "tests/**/*.ts"], // Inclure le code source et les tests
     "exclude": ["node_modules", "dist"]         // Exclure les dossiers inutiles
   }
   ```  

**Oral :**
> *"Chaque paramètre de configuration a une utilité. Par exemple, `testEnvironment` permet d'adapter Jest à un environnement backend ou frontend."*

---

### **Slide 7 : Écrire un test avec Jest**
**Titre :** Écrire un test unitaire simple

**Contenu :**
1. Exemple de fonction à tester :
   ```typescript
   export function sum(a: number, b: number): number {
     return a + b;
   }
   ```  
2. Exemple de fichier de test (`sum.test.ts`) :
   ```typescript
   import { sum } from './sum';

   test('sum adds two numbers', () => {
     expect(sum(1, 2)).toBe(3);
   });

   test('sum with negative numbers', () => {
     expect(sum(-1, -2)).toBe(-3);
   });
   
   test('sum fails with incorrect result', () => {
     expect(sum(1, 2)).not.toBe(5); // Test d'un cas incorrect
   });
   ```  

**Oral :**
> *"Les tests doivent vérifier les résultats attendus pour tous les cas possibles, même les cas limites comme les nombres négatifs. Il peut aussi être nécessaire de tester ce qui ne doit pas marcher."*

---

### **Slide 8 : Atelier - Écrire des tests unitaires**
**Titre :** Atelier - Écrire des tests pour une fonction TypeScript

**Contenu :**
- **Instructions :**
    - Créez une fonction `multiply(a: number, b: number): number` qui multiplie deux nombres.
    - Écrivez un fichier de test pour cette fonction.
    - Vérifiez les cas suivants :
        - Multiplication de deux nombres positifs.
        - Multiplication avec zéro.
        - Multiplication de nombres négatifs.
        - Cas incorrect : `expect(multiply(2, 3)).not.toBe(5)`.
- **Temps alloué :** 25 minutes

**Oral :**
> *"Pensez à couvrir tous les cas possibles, y compris les cas limites et les erreurs."*

---

### **Slide 9 : Corrigé de l’atelier**
**Titre :** Corrigé - Atelier sur les tests unitaires

**Contenu :**
1. **Fonction :**
   ```typescript
   export function multiply(a: number, b: number): number {
     return a * b;
   }
   ```  
2. **Tests :**
   ```typescript
   import { multiply } from './multiply';

   test('multiply two positive numbers', () => {
     expect(multiply(2, 3)).toBe(6);
   });

   test('multiply with zero', () => {
     expect(multiply(0, 5)).toBe(0);
   });

   test('multiply two negative numbers', () => {
     expect(multiply(-2, -3)).toBe(6);
   });

   test('incorrect result', () => {
     expect(multiply(2, 3)).not.toBe(5);
   });
   ```  

**Oral :**
> *"Vérifiez que vos tests couvrent bien toutes les possibilités et comparez vos résultats avec cette solution."*

---

### **Slide 10 : Récapitulatif - Tests avec TypeScript**
**Titre :** Récapitulatif

**Contenu :**
- Pourquoi tester avec TypeScript : typage ≠ tests.
- Outils populaires : Jest, Mocha, Vitest.
- Configurer Jest avec TypeScript (fichier `jest.config.js` et `tsconfig.json`).
- Écrire des tests unitaires pour couvrir tous les cas.

**Oral :**
> *"Les tests permettent de garantir que votre code fonctionne comme prévu, même avec les cas limites. Pensez à intégrer les tests dans votre flux de travail dès le début."*

---

### **Temps estimé pour cette section :**
- Slides (1 à 9) : **45 minutes**
- Atelier : **25 minutes**
- Corrigé : **10 minutes**
- **Total : 1h20**