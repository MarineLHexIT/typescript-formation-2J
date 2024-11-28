### **Section : Types Primitifs**

---

#### **Slide 1 : Typescript vs Javascript**
**Titre :** Pourquoi des types en TypeScript ?

---

**Contenu :**
- **JavaScript** : Langage dynamiquement typé.
    - **Exemple :**
      ```javascript
      let x = 42; // x est un nombre
      x = "hello"; // x devient une chaîne de caractères
      ```
- **TypeScript** : Langage statiquement typé.
    - Détecte les erreurs à la compilation, pas seulement à l'exécution.
    - Rassure le développeur avec un code plus prévisible.

---

**Oral :**
> *"Le principal avantage des types en TypeScript est de détecter les erreurs au plus tôt. Imaginez une grosse application où une fonction attend un nombre, mais reçoit une chaîne de caractères par erreur. Avec JavaScript, cette erreur serait détectée à l'exécution, mais avec TypeScript, le compilateur nous alerte immédiatement."*

---

#### **Slide 2 : Les types primitifs**

---

**Titre :** Les types de base en TypeScript

---

**Contenu :**
- **`number` :** Pour les nombres (entiers et décimaux).
- **`string` :** Pour les chaînes de caractères.
- **`boolean` :** Pour les valeurs vrai/faux.
- **`null` et `undefined` :** Représentent l’absence de valeur.

**Exemples de code :**
```typescript
let age: number = 30; // Un nombre
let name: string = "Alice"; // Une chaîne
let isAdmin: boolean = true; // Un booléen
let unknown: null = null; // Null
let notAssigned: undefined = undefined; // Undefined
// /!\ Le type `number` n’accepte pas les nombres dans une chaîne de caractères
let invalidAge: number = "30"; // Erreur : Type 'string' n'est pas assignable à 'number'
```

---

**Oral :**
> *"Ces types simples permettent déjà de couvrir beaucoup de cas d'usage. Notez que TypeScript impose d’assigner des valeurs conformes au type déclaré. Essayez d’assigner une chaîne de caractères à une variable typée `number` et observez l’erreur."*

---

#### **Slide 3 : Typage strict vs dynamique**

---

**Titre :** Comparaison de comportements

---

**Contenu :**
- **JavaScript :** Sécurisation manuelle possible mais coûteuse.  
  Exemple :
  ```javascript
  function somme(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
      throw new Error("Les arguments doivent être des nombres");
    }
    return a + b;
  }
  ```
- **TypeScript :** La vérification est implicite.  
  Exemple :
  ```typescript
  function somme(a: number, b: number): number {
    return a + b;
  }
  somme(1, "2"); // Erreur à la compilation
  ```

---

**Oral :**
> *"En JavaScript, vous pouvez écrire des vérifications manuelles pour sécuriser les types, mais cela alourdit le code et augmente les risques d’oublis. Avec TypeScript, ces vérifications sont intégrées au système de type, ce qui vous évite de répéter ces tests et vous concentre sur votre logique métier."*

---

#### **Slide 4 : Quizz Interactif**

---

**Titre :** Vérifiez votre compréhension !

---

**Questions :** *(réalisé sur Kahoot ou intégré à la présentation)*
1. Quel type utilisez-vous pour une valeur vraie ou fausse ?
    - a) `boolean`
    - b) `string`
    - c) `number`
    - d) `undefined`  
      **(Réponse : a)**

2. Quelle erreur TypeScript détecterait ici ?
   ```typescript
   let temperature: number = 25;
   temperature = "chaud";
   ```  
    - a) Aucune erreur
    - b) `string` n'est pas assignable à `number`
    - c) Mauvais nom de variable  
      **(Réponse : b)**

---

**Temps alloué :** 5 minutes

---

#### **Exercice pratique**

---

**Titre :** Vos premiers types !

---

**Objectif :** Déclarer des variables correctement typées.

**Consigne :**  
Dans un fichier `types-exercise.ts` :
1. Déclarez une variable pour un nom d'utilisateur (`string`).
2. Déclarez une variable pour l'âge d'un utilisateur (`number`).
3. Déclarez une variable pour indiquer si un utilisateur est actif (`boolean`).
4. Essayez d’assigner des valeurs incorrectes et observez les erreurs TypeScript.

**Exemple de départ :**
```typescript
let username: string;
let age: number;
let isActive: boolean;

// Assignations incorrectes à essayer !
username = 123; // Erreur
age = "trente"; // Erreur
isActive = "oui"; // Erreur
```

**Temps alloué :** 10 minutes

---

**Corrigé :** *(à afficher ensuite)*
```typescript
let username: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Exemple de code valide.
```

---

### **Temps estimé pour cette partie :**
- Slides : 20 minutes
- Quizz interactif : 5 minutes
- Exercice : 10 minutes
- Discussion/correction : 10 minutes

---

### **Section : Inférence de Types**

---

#### **Slide 1 : Qu'est-ce que l'inférence de types ?**

---

**Titre :** Qu’est-ce que l’inférence de types ?

**Contenu :**
- TypeScript peut deviner automatiquement le type d’une variable à partir de la valeur qui lui est assignée.
- Ce processus s’appelle **inférence de type**, ou en anglais **right declaration** :
    - Exemple :
      ```typescript
      let age = 30; // Type inféré : number
      ```
- Cela simplifie le code en évitant de déclarer explicitement des types simples.

---

**Oral :**
> *"L'inférence de types, appelée aussi **right declaration** en anglais, permet à TypeScript de déduire automatiquement le type d'une variable en se basant sur la valeur qu'on lui attribue. C'est une fonctionnalité puissante pour simplifier votre code, tout en conservant une sécurité stricte des types."*

---

#### **Slide 2 : Inférence vs Déclaration explicite**

---

**Titre :** Inférence implicite et Déclaration explicite

**Contenu :**
- **Inférence implicite** (ou **right declaration**) :
    - TypeScript déduit le type automatiquement.
    - Exemple :
      ```typescript
      let name = "Alice"; // Type inféré : string
      let isStudent = true; // Type inféré : boolean
      ```
- **Déclaration explicite** (ou **left declaration**) :
    - Le type est précisé directement dans le code.
    - Exemple :
      ```typescript
      let age: number = 30; // Type déclaré explicitement : number
      ```

---

**Oral :**
> *"En combinant les deux approches, vous pouvez profiter de la flexibilité de TypeScript. Utilisez l'inférence implicite pour les cas simples, et la déclaration explicite pour les types complexes ou lorsque vous souhaitez améliorer la documentation de votre code."*

---

#### **Slide 3 : Inférence dans les fonctions**

---

**Titre :** Retour de fonction et inférence

**Contenu :**
- TypeScript infère également le type de retour d'une fonction :
  ```typescript
  function addition(a: number, b: number) {
    return a + b; // Type inféré : "number"
  }
  ```
- Mais vous pouvez aussi définir explicitement le type de retour :
  ```typescript
  function addition(a: number, b: number): number {
    return a + b;
  }
  ```

---

**Oral :**
> *"L'inférence de type fonctionne aussi sur les retours de fonction. Si le type inféré correspond à vos attentes, pas besoin de le déclarer. Mais dans des contextes complexes, indiquer un type peut améliorer la lisibilité et la robustesse du code."*

---

#### **Slide 4 : Démonstration en direct**

---

**Titre :** Testons avec un IDE

**Contenu :** *(pas d’écrit, diapositive pour support visuel)*
- **Démonstration live :**
    1. Déclarez une variable avec un type inféré.
    2. Montrez le type affiché par l'IDE.
    3. Changez la valeur pour un type incompatible et montrez l'erreur instantanée.

**Oral :**
> *"Maintenant, passons à une démonstration pour voir comment notre IDE nous aide au quotidien avec TypeScript, que ce soit pour les types explicites ou implicites."*

---

#### **Slide 5 : Quizz interactif**

---

**Titre :** Tester vos connaissances sur l'inférence

---

**Questions :** *(réalisé sur Kahoot ou intégré à la présentation)*
1. Quel est le type de `x` dans ce code ?
   ```typescript
   let x = "Bonjour";
   ```  
    - a) `string`
    - b) `any`
    - c) Aucun
    - d) `number`  
      **(Réponse : a)**

2. Quelle est la meilleure pratique ?
   ```typescript
   let total: number = 100;  
   let total = 100;  
   ```  
    - a) Toujours déclarer le type explicitement
    - b) Utiliser l'inférence pour des cas simples
    - c) Toujours éviter l'inférence  
      **(Réponse : b)**

---

**Temps alloué :** 5 minutes

---

#### **Exercice pratique**

---

**Titre :** Jouez avec l'inférence de types

**Objectif :** Comprendre comment TypeScript déduit les types.

**Consigne :**  
Dans un fichier `inference-exercise.ts` :
1. Déclarez une variable initialisée avec une chaîne, laissez TypeScript inférer son type.
2. Essayez de réassigner un nombre à cette variable : que se passe-t-il ?
3. Créez une fonction avec des paramètres typés, laissez TypeScript inférer le type de retour.
4. Déclarez une fonction où vous définissez explicitement le type de retour.

---

**Corrigé :** *(à afficher ensuite)*
```typescript
// Inférence de type
let greeting = "Hello"; // Type inféré : string
// greeting = 42; // Erreur : Type 'number' n'est pas assignable à type 'string'

// Inférence dans les fonctions
function multiply(a: number, b: number) {
  return a * b; // Type inféré : number
}

// Déclaration explicite
function multiplyExplicit(a: number, b: number): number {
  return a * b;
}
```

---

**Temps estimé pour cette partie :**
- Slides : 15 minutes
- Quizz interactif : 5 minutes
- Exercice : 10 minutes
- Discussion/correction : 10 minutes

---


### Section : **Fonctions en TypeScript**

---

#### **Slide 1 : Déclaration et Typage des Fonctions**

---

**Titre :** Déclaration et Typage des Fonctions

**Contenu :**
- Exemple de fonction typée :
  ```typescript
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  ```

- Points clés :
    - Les **types des paramètres** sont déclarés après leur nom.
    - Le **type de retour** est précisé après les parenthèses avec `: <type>`.
    - Si aucun type n'est précisé pour le retour, TypeScript l'infère.

---

**Oral :**
> *"Les fonctions en TypeScript permettent d’assurer que les paramètres et le type de retour respectent vos attentes. Ici, `name` doit être une chaîne de caractères et la fonction retourne également une chaîne."*

---

#### **Slide 2 : Fonctions Anonymes et Fléchées**

---

**Titre :** Fonctions Anonymes et Fléchées

**Contenu :**
- Exemple de fonction fléchée :
  ```typescript
  const add = (a: number, b: number): number => a + b;
  ```

- Comparaison avec une fonction normale :
  ```typescript
  function addNormal(a: number, b: number): number {
    return a + b;
  }
  ```

- Avantage des fonctions fléchées : syntaxe concise, particulièrement utile pour les callbacks.

---

**Oral :**
> *"Les fonctions fléchées offrent une alternative compacte aux fonctions classiques. Elles sont très utilisées dans des méthodes comme `map`, `filter`, ou `reduce`."*

---

#### **Slide 3 : Paramètres Optionnels et Valeurs par Défaut**

---

**Titre :** Paramètres Optionnels et Valeurs par Défaut

**Contenu :**
- Paramètres optionnels :
  ```typescript
  function greet(name?: string): string {
    return `Hello, ${name ?? "World"}!`;
  }
  ```

- Valeurs par défaut :
  ```typescript
  function greetWithDefault(name: string = "World"): string {
    return `Hello, ${name}!`;
  }
  ```

- Différence clé : `?` indique un paramètre optionnel, tandis que les valeurs par défaut remplacent automatiquement `undefined`.

---

**Oral :**
> *"Vous pouvez rendre un paramètre optionnel avec le `?`, ou assigner une valeur par défaut. Cela permet d'éviter les erreurs tout en réduisant la complexité du code."*

---

#### **Slide 4 : Typage Complexe dans les Fonctions**

---

**Titre :** Typage Complexe dans les Fonctions

**Contenu :**
- Exemple avec des objets :
  ```typescript
  function describePerson(person: { name: string; age: number }): string {
    return `${person.name} is ${person.age} years old.`;
  }
  ```

- Exemple avec des tableaux :
  ```typescript
  function sum(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
  }
  ```

---

**Oral :**
> *"TypeScript permet d'utiliser des types complexes dans vos fonctions, comme des objets ou des tableaux. Cela vous aide à mieux structurer et sécuriser votre code."*

---

#### **Slide 5 : Overloading (Surcharge)**

---

**Titre :** Overloading (Surcharge)

**Contenu :**
- Exemple :
  ```typescript
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }
  ```

- Points importants :
    - La surcharge permet plusieurs signatures pour une même fonction.
    - La dernière implémentation gère les cas concrets.

---

**Oral :**
> *"La surcharge est utile pour rendre une fonction plus flexible tout en respectant des signatures bien définies. Cela aide à couvrir différents cas d'utilisation."*

---

#### **Slide 6 : Quiz - Fonctions**

---

**Titre :** Quiz - Fonctions

**Contenu :**
1. Quelle est la syntaxe correcte pour typer une fonction qui prend deux nombres et retourne un nombre ?
    - a) `function add(a, b): number { return a + b; }`
    - b) `function add(a: number, b: number): number { return a + b; }`
    - c) `function add(a: number, b: number) { return a + b; }`
    - **Réponse : b)**

2. Quel mot-clé utilise-t-on pour indiquer un paramètre optionnel ?
    - a) `=`
    - b) `?`
    - c) `:optional`
    - **Réponse : b)**

3. Quelle valeur est retournée par cette fonction ?
   ```typescript
   function greet(name: string = "World"): string {
     return `Hello, ${name}!`;
   }
   greet();  
   ```
    - a) `"Hello, !"`
    - b) `"Hello, World!"`
    - c) `undefined`
    - **Réponse : b)**

---

**Oral :**
> *"Testons vos connaissances sur les fonctions. Prenez un moment pour répondre à ces questions."*

---

#### **Slide 7 : Atelier Pratique - Création de Fonctions Typées**

---

**Titre :** Atelier Pratique - Fonctions Typées

**Contenu :**
- **Instructions** :
    1. Créez une fonction `multiply` qui prend deux paramètres `a` et `b` (tous deux de type `number`) et retourne leur produit.
    2. Ajoutez une surcharge pour permettre aussi la multiplication de deux chaînes de caractères (par concaténation).
    3. Bonus : gérez un cas avec un tableau d'entiers en paramètre, pour retourner leur produit.

---

**Corrigé :**
```typescript
function multiply(a: number, b: number): number;
function multiply(a: string, b: string): string;
function multiply(a: any, b: any): any {
  if (Array.isArray(a)) return a.reduce((acc, val) => acc * val, 1);
  return a * b;
}
```

---

**Temps estimé pour cette partie :**
- Théorie : 20 minutes.
- Quiz : 10 minutes.
- Atelier : 20 minutes.

---

### Section : **Array en TypeScript**

---

#### **Slide 1 : Introduction aux Array**

---

**Titre :** Introduction aux Array

**Contenu :**
- Les tableaux permettent de regrouper plusieurs valeurs sous une même variable.
- Déclaration en TypeScript :
  ```typescript
  let numbers: number[] = [1, 2, 3];
  ```

- Deux syntaxes possibles :
    - Type suivi de `[]` : `number[]`
    - Avec `Array<type>` : `Array<number>`

---

**Oral :**
> *"En TypeScript, les tableaux sont des collections de valeurs du même type. Il existe deux façons de déclarer un tableau : avec `type[]` ou `Array<type>`. Ces deux syntaxes sont équivalentes."*

---

#### **Slide 2 : Array avec Types Complexes**

---

**Titre :** Array avec Types Complexes

**Contenu :**
- Tableau d’objets :
  ```typescript
  let users: { id: number; name: string }[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  ```

- Tableau avec des unions :
  ```typescript
  let data: (number | string)[] = [1, "hello", 3];
  ```

- Type prédéfini `readonly` pour éviter les modifications :
  ```typescript
  const readonlyNumbers: readonly number[] = [1, 2, 3];
  ```

---

**Oral :**
> *"Les tableaux peuvent contenir des types complexes, comme des objets ou des unions. Vous pouvez aussi les rendre immuables grâce au mot-clé `readonly`."*

---

#### **Slide 3 : Méthodes Utiles sur les Array**

---

**Titre :** Méthodes Utiles sur les Array

**Contenu :**
- Quelques méthodes courantes :
    - **map** : transforme chaque élément.
      ```typescript
      let doubled = [1, 2, 3].map((x) => x * 2); // [2, 4, 6]
      ```
    - **filter** : filtre selon une condition.
      ```typescript
      let even = [1, 2, 3, 4].filter((x) => x % 2 === 0); // [2, 4]
      ```
    - **reduce** : réduit à une seule valeur.
      ```typescript
      let sum = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
      ```

---

**Oral :**
> *"Les tableaux en TypeScript disposent des mêmes méthodes que JavaScript. Par exemple, `map`, `filter`, et `reduce` sont très utiles pour manipuler les données."*

---

#### **Slide 4 : Quiz - Array**

---

**Titre :** Quiz - Array

**Contenu :**
1. Quelle syntaxe déclare un tableau de nombres ?
    - a) `let numbers: [number] = [1, 2, 3];`
    - b) `let numbers: number[] = [1, 2, 3];`
    - c) `let numbers: Array = [1, 2, 3];`
    - **Réponse : b)**

2. Quelle méthode peut être utilisée pour obtenir la somme d’un tableau de nombres ?
    - a) `map`
    - b) `reduce`
    - c) `filter`
    - **Réponse : b)**

3. Quel mot-clé empêche de modifier un tableau après sa création ?
    - a) `const`
    - b) `readonly`
    - c) `static`
    - **Réponse : b)**

---

**Oral :**
> *"Prenons quelques minutes pour répondre à ce quiz. C’est rapide et ça aide à consolider vos connaissances."*

---

#### **Slide 5 : Atelier Pratique - Manipulation de Tableaux**

---

**Titre :** Atelier Pratique - Manipulation de Tableaux

**Contenu :**
- **Instructions** :
    1. Créez un tableau de nombres : `[5, 10, 15, 20, 25]`.
    2. Filtrez les nombres supérieurs à 10.
    3. Multipliez chaque nombre restant par 2.
    4. Retournez la somme des nombres obtenus.

---

**Corrigé :**
```typescript
let numbers: number[] = [5, 10, 15, 20, 25];

let filtered = numbers.filter((x) => x > 10); // [15, 20, 25]
let doubled = filtered.map((x) => x * 2); // [30, 40, 50]
let sum = doubled.reduce((acc, val) => acc + val, 0); // 120
```

---

**Temps estimé pour cette partie :**
- Théorie : 15 minutes.
- Quiz : 5 minutes.
- Atelier : 15 minutes.

---

### Section : **Tuples en TypeScript**

---

#### **Slide 1 : Introduction aux Tuples**

---

**Titre :** Qu’est-ce qu’un Tuple ?

**Contenu :**
- Un tuple est un tableau dont la longueur et les types de chaque élément sont prédéfinis.
- Déclaration en TypeScript :
  ```typescript
  let user: [string, number] = ["Alice", 25];
  ```
- Utilisé pour représenter des structures de données simples.

---

**Oral :**
> *"Les tuples permettent de représenter des tableaux avec une structure fixe. Contrairement aux tableaux classiques, chaque élément d’un tuple a un type prédéfini et la longueur est connue à l’avance."*

---

#### **Slide 2 : Utilisation des Tuples**

---

**Titre :** Utilisation des Tuples

**Contenu :**
- Accéder aux éléments :
  ```typescript
  console.log(user[0]); // Alice
  console.log(user[1]); // 25
  ```

- Ajouter des valeurs (restreint selon la définition) :
  ```typescript
  user.push(30); // OK, mais dépasse la définition initiale
  ```

- Types complexes :
  ```typescript
  let config: [string, number, boolean] = ["localhost", 8080, true];
  ```

---

**Oral :**
> *"Vous pouvez accéder aux éléments d’un tuple comme dans un tableau classique. Toutefois, attention : certaines méthodes comme `push` permettent d’ajouter des éléments qui dépassent la structure initiale."*

---

#### **Slide 3 : Tuples et TypeScript Avancé**

---

**Titre :** Tuples et TypeScript Avancé

**Contenu :**
- Les tuples peuvent inclure des spreads pour des longueurs dynamiques :
  ```typescript
  let log: [string, ...number[]] = ["INFO", 200, 300];
  ```

- Les tuples sont couramment utilisés pour des fonctions renvoyant plusieurs valeurs :
  ```typescript
  function getUser(): [string, number] {
    return ["Bob", 30];
  }
  ```

---

**Oral :**
> *"Les tuples permettent aussi d’utiliser des fonctionnalités avancées comme le spread syntax. Ils sont très utiles pour retourner plusieurs valeurs d’une fonction tout en restant typés."*

---

#### **Slide 4 : Quiz - Tuples**

---

**Titre :** Quiz - Tuples

**Contenu :**
1. Quelle déclaration est correcte pour un tuple ?
    - a) `let data: [string, number] = [42, "Alice"];`
    - b) `let data: [string, number] = ["Alice", 42];`
    - c) `let data: [string, number] = ["Alice", 42, true];`
    - **Réponse : b)**

2. Quelle méthode pourrait ajouter un élément qui n’est pas défini dans le type d’un tuple ?
    - a) `push`
    - b) `map`
    - c) `reduce`
    - **Réponse : a)**

3. Quelle syntaxe est utilisée pour définir un tuple à longueur dynamique ?
    - a) `[...type[]]`
    - b) `[type, ...type[]]`
    - c) `[type[]]`
    - **Réponse : b)**

---

**Oral :**
> *"Prenons quelques instants pour ce quiz. Cela permettra de vérifier si les concepts sont clairs."*

---

#### **Slide 5 : Atelier Pratique - Manipulation de Tuples**

---

**Titre :** Atelier Pratique - Manipulation de Tuples

**Contenu :**
- **Instructions** :
    1. Déclarez un tuple représentant un produit avec un `string` (nom) et un `number` (prix).
    2. Ajoutez un booléen indiquant si le produit est en stock avec `push`.
    3. Écrivez une fonction qui renvoie un tuple représentant un utilisateur (`string`, `number`, `boolean`).

---

**Corrigé :**
```typescript
// Étape 1
let product: [string, number] = ["Laptop", 999.99];

// Étape 2
product.push(true); // ["Laptop", 999.99, true]

// Étape 3
function getUser(): [string, number, boolean] {
  return ["Alice", 25, true];
}
```

---

Voici deux slides supplémentaires pour illustrer l'usage des tuples et leur comparaison avec d'autres types :

---

### **Slide 1 : Quand utiliser les Tuples ?**

**Scénarios où les tuples sont idéaux :**
1. **Données ordonnées et fixes** :
    - Structure simple et compacte où chaque position a une signification.
    - Exemple :
      ```typescript
      type Point2D = [number, number];
      const origin: Point2D = [0, 0]; // x = 0, y = 0
      ```

2. **Retourner plusieurs valeurs :**
    - Pas besoin de créer un objet ad hoc pour des retours rapides :
      ```typescript
      function splitName(fullName: string): [string, string] {
        const [firstName, lastName] = fullName.split(" ");
        return [firstName, lastName];
      }
 
      const [first, last] = splitName("John Doe"); // first = "John", last = "Doe"
      ```

3. **Interopérabilité avec des API** :
    - Requises pour des structures comme WebSockets ou OSC.

---

**Avantages :**
- Simples à déclarer et manipuler.
- Optimisés pour des petites structures fixes.

**Inconvénients :**
- Peu lisibles dans des contextes complexes.
- Dépendent de l’ordre (peu explicite).

---

### **Slide 2 : Objets vs Tuples**

| **Aspect**             | **Tuples**                              | **Objets**                             |
|-------------------------|------------------------------------------|-----------------------------------------|
| **Ordre des valeurs**   | Critique (les indices définissent le sens). | Non critique (les clés identifient les valeurs). |
| **Lisibilité**          | Moins lisible pour les types complexes. | Plus explicite grâce aux noms des clés. |
| **Extensibilité**       | Difficile à étendre (structure rigide). | Facile à adapter (ajout de clés).       |
| **Exemple**             | `[number, string]`                     | `{ id: number, name: string }`         |

---

**Exemple : Quand préférer un objet à un tuple ?**

```typescript
// Tuple
type UserTuple = [number, string, string];
const user: UserTuple = [1, "John", "Doe"];

// Objet
type UserObject = { id: number; firstName: string; lastName: string };
const userObj: UserObject = { id: 1, firstName: "John", lastName: "Doe" };
```

**Pourquoi préférer un objet ici ?**
- Plus lisible : `firstName` est explicite, alors que `[1, "John", "Doe"]` peut prêter à confusion.
- Plus flexible : Facile d’ajouter un champ `age` ou `email` dans l’objet.

---

**Transition vers la suite :**
*Les tuples sont une bonne solution pour des structures ordonnées et fixes, mais dans des cas plus complexes ou dynamiques, les objets sont souvent préférables.*

---

**Temps estimé pour cette partie :**
- Théorie : 10 minutes.
- Quiz : 5 minutes.
- Atelier : 15 minutes.

---

### **Slides avec textes à l’oral pour les Enums**

---

#### **Slide 1 : Qu’est-ce qu’un Enum ?**
**Titre** : Introduction aux Enums

- **Contenu de la slide** :
    - Un enum est un moyen de définir un groupe de valeurs constantes liées.
    - Pourquoi utiliser des Enums ?
        - Meilleure lisibilité et maintenance du code.
        - Permet d'éviter les erreurs liées à des valeurs magiques.
        - Facilite la gestion des valeurs limitées pour des propriétés ou des états.

**À l’oral** :
> "Un enum, ou *enumeration*, est un outil très pratique pour gérer des valeurs constantes et prévisibles dans vos projets. Imaginez par exemple que vous deviez représenter les statuts d'une tâche ou les directions sur une boussole. Au lieu de jongler avec des chaînes de caractères ou des nombres, qui peuvent vite devenir sources d'erreurs, vous utilisez un enum pour centraliser et sécuriser ces valeurs."

---

#### **Slide 2 : Types d’Enums**
**Titre** : Deux types d’Enums

- **Contenu de la slide** :
    1. **Enums numériques** :
        - Les valeurs sont des entiers implicites (autoincrémentés) ou explicites.
        - Exemple :
          ```typescript
          enum Direction {
            North = 0,
            East = 1,
            South = 2,
            West = 3,
          }
          ```
    2. **Enums chaînes de caractères** :
        - Chaque valeur est une chaîne explicitement définie.
        - Exemple :
          ```typescript
          enum Direction {
            North = "North",
            East = "East",
            South = "South",
            West = "West",
          }
          ```

**À l’oral** :
> "En TypeScript, il existe deux types principaux d'enums. D'abord, les *enums numériques*, où les valeurs sont des entiers. Soit vous laissez TypeScript générer des entiers automatiquement, soit vous les définissez manuellement. Ensuite, on a les *enums chaînes de caractères*, où vous attribuez explicitement une chaîne à chaque valeur. Les enums chaînes sont souvent préférés car ils sont plus lisibles lors du débogage."

---

#### **Slide 3 : Utiliser des Enums**
**Titre** : Comment utiliser un Enum ?

- **Contenu de la slide** :
    - Déclaration d’un enum :
      ```typescript
      enum Status {
        Pending = "Pending",
        InProgress = "In Progress",
        Completed = "Completed"
      }
      ```
    - Accéder à ses valeurs :
      ```typescript
      const currentStatus: Status = Status.Pending;
      console.log(currentStatus); // "Pending"
      ```
    - Utilisation dans une fonction :
      ```typescript
      function getStatusMessage(status: Status): string {
        switch (status) {
          case Status.Pending:
            return "En attente...";
          case Status.InProgress:
            return "En cours...";
          case Status.Completed:
            return "Terminé !";
        }
      }
      ```

**À l’oral** :
> "Voici un exemple concret pour manipuler des enums dans votre code. Vous déclarez un enum, ici pour les statuts d'une tâche. Ensuite, vous pouvez y accéder directement pour assigner une valeur ou, comme dans notre fonction, utiliser un *switch* pour adapter le comportement de votre application selon le statut."

---

#### **Slide 4 : Bonnes pratiques avec les Enums**
**Titre** : Quand utiliser les Enums ?

- **Contenu de la slide** :
    - Utilisez un enum lorsque :
        - Vous manipulez des valeurs constantes liées.
        - Vous voulez éviter les erreurs de frappe avec des chaînes de caractères ou des nombres.
        - Vous avez besoin de parcourir un ensemble fermé de valeurs.
    - Exemple typique : gestion des rôles utilisateur, des statuts d’application, des directions, etc.

**À l’oral** :
> "Les enums sont idéaux dans des contextes où vous travaillez avec un ensemble fermé de valeurs constantes, comme des statuts ou des rôles. Ils permettent de réduire les erreurs de frappe et améliorent la lisibilité du code. Cependant, n’abusez pas des enums si d'autres alternatives, comme des types union, pourraient suffire."

---

#### **Slide 5 : Limites des Enums**
**Titre** : Les limites des Enums

- **Contenu de la slide** :
    - Flexibilité limitée dans des cas complexes.
    - Augmentation de la taille des bundles JS (notamment avec des enums numériques).
    - Moins ergonomiques que des alternatives comme les **types union**.

**À l’oral** :
> "Les enums sont utiles, mais ils ne sont pas parfaits. Ils peuvent augmenter la taille de vos fichiers JavaScript, surtout avec des enums numériques. Pour des scénarios plus complexes ou légers, les types union, que nous verrons dans la partie Concepts avancés, peuvent être une meilleure option."

---

#### **Slide 6 : Exercice 1**
**Titre** : Créer un Enum pour les statuts d’une tâche

- **Consigne de la slide** :
    - Définir un enum `Status` avec les valeurs suivantes :
        - `Pending`
        - `InProgress`
        - `Completed`
    - Écrire une fonction `getStatusMessage` qui retourne :
        - `"En attente"` pour `Pending`.
        - `"En cours"` pour `InProgress`.
        - `"Terminé"` pour `Completed`.

**À l’oral** :
> "Pour cet exercice, vous allez créer un enum pour gérer les statuts d'une tâche et écrire une fonction associée. Pensez à utiliser un *switch* ou une structure conditionnelle appropriée pour renvoyer le message correspondant à chaque statut."

---

#### **Slide 7 : Corrigé de l’exercice**
**Titre** : Solution de l’exercice

- **Solution de la slide** :
  ```typescript
  enum Status {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed"
  }

  function getStatusMessage(status: Status): string {
    switch (status) {
      case Status.Pending:
        return "En attente";
      case Status.InProgress:
        return "En cours";
      case Status.Completed:
        return "Terminé";
    }
  }
  ```

**À l’oral** :
> "Voici une solution possible pour cet exercice. Notez que l’utilisation d’un enum centralise les valeurs et garantit qu’aucune erreur de frappe n’intervienne. En cas d’ajout de nouveaux statuts, vous modifiez simplement l’enum et le code reste cohérent."

---