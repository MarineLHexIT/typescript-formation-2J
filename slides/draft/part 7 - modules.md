### **Slide 1 : Définition d’un module et avantages**
**Titre :** Qu’est-ce qu’un module ?  
**Contenu :**
- Un **module** est un fichier contenant du code réutilisable.
- Permet de :
    - Découper le code en blocs logiques.
    - Réutiliser des fonctions ou objets.
    - Faciliter la maintenance et la collaboration.

**Avantages des modules :**
- **Lisibilité :** Favorise un code organisé.
- **Réutilisabilité :** Partagez des fonctions entre plusieurs fichiers.
- **Évolutivité :** Ajoutez de nouvelles fonctionnalités sans casser le code existant.

**Oral :**  
"Un module est comme une boîte à outils. En Typescript, chaque fichier est un module. Ils simplifient la collaboration et rendent vos projets évolutifs."

---

### **Slide 2 : Types de modules – CommonJS vs ES Modules**
**Titre :** Comprendre les types de modules  
**Contenu :**
- **CommonJS (CJS)**
  - Historiquement utilisé par Node.js.
  - Syntaxe :
    ```javascript
    const math = require('./math'); // Import
    module.exports = math;         // Export
    ```  
  - **Avantages :** Compatibilité avec Node.js.
  - **Limites :** Moins performant avec les outils modernes.
- **ES Modules (ESM)**
  - Standard moderne (ECMAScript 2015+).
  - Syntaxe :
    ```javascript
    import { add } from './math';   // Import
    export const PI = 3.14;        // Export
    ```  
  - **Avantages :** Meilleure optimisation, support natif dans les navigateurs.

**Oral :**  
"Les ES Modules sont le standard recommandé aujourd’hui. Cependant, certains anciens projets utilisent encore CommonJS, donc il est utile de connaître les deux."

---

### **Slide 3 : Présentation Import / Export**
**Titre :** Les imports et exports  
**Contenu :**
- Les **exports** permettent de rendre du code accessible dans d’autres fichiers.
- Les **imports** permettent d’utiliser ce code.

**Oral :**  
"En TypeScript, les modules fonctionnent grâce aux exports et imports. Voyons leurs différentes variantes."

---

### **Slide 4 : Import / Export nommé**
**Titre :** Les imports et exports nommés  
**Contenu :**
- **Export nommé :**
  - Exporter plusieurs entités d’un module.
    ```typescript
    export const PI = 3.14;  
    export function add(a: number, b: number): number {  
      return a + b;  
    }  
    ```  
- **Import nommé :**
  - Importer les entités nécessaires.
    ```typescript
    import { PI, add } from './math';  
    console.log(add(2, 3), PI);  
    ```  

**Oral :**  
"Les exports nommés permettent de partager plusieurs fonctionnalités par fichier. À l'importation, vous sélectionnez ce dont vous avez besoin."

---

### **Slide 5 : Import / Export tout**
**Titre :** Importer tout le contenu d’un module  
**Contenu :**
- **Syntaxe :**
  ```typescript
  import * as Utils from './utils';
  console.log(Utils.add(2, 3)); // 5
  console.log(Utils.PI); // 3.14
  ```  
- **Quand l’utiliser ?**
  - Si un fichier contient plusieurs utilitaires liés.
  - Exemple : une bibliothèque de fonctions mathématiques.

**Oral :**  
"L’import global est utile pour regrouper tout ce qu’un module offre, mais peut réduire la clarté si vous importez trop d’éléments."

---

### **Slide 6 : Import / Export par défaut**
**Titre :** Les exports et imports par défaut  
**Contenu :**
- **Export par défaut :**
  - Exporter une entité unique (souvent une classe ou une fonction principale).
    ```typescript
    export default class Greeter {  
      greet(name: string) {  
        return `Hello, ${name}`;  
      }  
    }  
    ```  
- **Import par défaut :**
  - Importer sans accolades.
    ```typescript
    import Greeter from './Greeter';  
    const greeter = new Greeter();  
    console.log(greeter.greet("Alice"));  
    ```  

**Oral :**  
"Utilisez l’export par défaut quand un fichier représente une seule fonctionnalité principale."

---

### **Slide 7 : Mélanger exports nommés et par défaut**
**Titre :** Mélange d’exports  
**Contenu :**
- Il est possible de mélanger **exports nommés** et **exports par défaut** dans le même fichier :
  ```typescript
  export const PI = 3.14;
  export const add = (a: number, b: number): number => a + b;
  export default function subtract(a: number, b: number): number {
    return a - b;
  }
  ```  
- Lors de l’importation :
  ```typescript
  import subtract, { PI, add } from './math';
  ```  

**Oral :**  
"Dans certains cas, vous pouvez combiner les deux types d’exports. Cependant, pour plus de lisibilité, évitez les mélanges dans des modules complexes."

---

### **Slide 8 : Organiser un projet TypeScript**
**Titre :** Structurer un projet TypeScript  
**Contenu :**
- **Organisation recommandée**
  ```
  ├── src/            // Fichiers source TypeScript
  │   ├── modules/    // Sous-modules organisés
  │   │   ├── math.ts
  │   │   ├── string.ts
  │   └── index.ts    // Point d’entrée
  ├── tests/          // Tests unitaires
  ├── dist/           // Fichiers compilés JavaScript
  ├── tsconfig.json   // Configuration TypeScript
  └── package.json    // Dépendances du projet
  ```
- **Avantages d’une bonne structure :**
  - Simplifie la navigation dans le code.
  - Facilite la collaboration en équipe.
  - Prépare à l’intégration avec des outils comme Jest ou ESLint.

**Oral :**  
"Organiser un projet de manière logique rend le développement plus fluide et facilite le partage du code. Voici une structure standard qui fonctionne pour des projets simples comme complexes."

---

### **Slide 9 : Atelier pratique – Réorganiser un projet**
**Titre :** Atelier : Modularisez ce projet  
**Objectif :** Refactoriser un projet monolithique en plusieurs modules.

**Instructions :**
1. **Étape 1 :** Créez les fichiers suivants dans un dossier `src`:
  - `math.ts`
  - `string.ts`
  - `helper.ts`
2. **Étape 2 :** Réorganisez le fichier `main.ts` en utilisant des imports/exports nommés ou par défaut.
3. **Étape 3 :** Exécutez le fichier `main.ts` pour vérifier votre refactorisation.

**Fichier à refactoriser (fournir un fichier global)** :

```typescript
// main.ts (fichier initial)
const PI = 3.14;

function add(a: number, b: number): number {
  return a + b;
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function log(message: string): void {
  console.log(`Log: ${message}`);
}

console.log(add(5, 3)); // 8
console.log(capitalize("hello")); // "Hello"
log("Atelier terminé");
```

---

### **Slide 10 : Quizz final**
**Titre :** Validez vos connaissances  
**Contenu :**
1. À quoi sert un module ?
2. Donnez un exemple d’export et import nommé.
3. Quelle est la différence entre CommonJS et ES Modules ?
4. Peut-on mélanger exports nommés et par défaut ?
5. Quel est l’intérêt d’organiser un projet en modules ?

---

### **Slide 11 : Résumé de la section**
**Titre :** Résumé : Modules et Organisation  
**Contenu :**
- **Types de modules :** CommonJS vs ES Modules (préférez ESM).
- **Exports et imports :**
  - Nommés pour plusieurs entités.
  - Par défaut pour une fonctionnalité unique.
  - Tout importer si nécessaire (éviter les abus).
- **Organisation d’un projet :**
  - Structure claire avec `src/`, `tests/`, `dist/`.

**Oral :**  
"Cette section vous montre comment organiser vos projets et utiliser les modules de manière optimale, ce qui est indispensable dans tout projet moderne."

---

### **Durée estimée**

| **Section**                            | **Temps estimé** |  
|----------------------------------------|------------------|  
| Définition d’un module et avantages     | 5 min            |  
| Types de modules                        | 5 min            |  
| Présentation Import / Export           | 3 min            |  
| Import / Export nommé                  | 3 min            |  
| Import / Export tout                   | 3 min            |  
| Import / Export par défaut             | 3 min            |  
| Mélange exports nommés et par défaut   | 3 min            |  
| Organiser un projet                    | 5 min            |  
| Atelier pratique                       | 20 min           |  
| Quizz                                  | 5 min            |  
| **Total**                              | **55 minutes**   |  

---