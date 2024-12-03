### Slide 1: **Introduction aux Objets**
**Titre :** Pourquoi et comment gérer les objets en TypeScript ?  
**Contenu :**
- **En JavaScript :** Les objets sont dynamiques mais risquent des erreurs de structure et de type.
    - Exemple :
      ```javascript
      const car = { brand: "Toyota", model: "Corolla" };
      car.year = "2020"; // Pas d'erreur, mais incohérence !
      ```
- **Avec TypeScript :** Sécurité et contrôle grâce à :
    - La **définition explicite** de la structure (classes, interfaces).
    - La **vérification statique** à la compilation.
    - Les **modèles réutilisables** via les génériques.  
      **À l'oral :**  
      "Voyons comment TypeScript améliore la gestion des objets, les rendant plus sûrs et organisés."

---

### Slide 2: **Classes : Introduction et comparaison JS/TS**
**Titre :** Les Classes en JavaScript et TypeScript  
**Contenu :**
- **En JavaScript :**
    - Classes ES6, mais pas de vérification statique.
    - Exemple :
      ```javascript
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }
      const alice = new Person("Alice", "trente"); // Erreur silencieuse
      ```  
- **En TypeScript :**
    - Vérification des types.
    - Modificateurs d'accès (`private`, `protected`, `public`).
    - Typage des propriétés et méthodes.
    - Exemple :
      ```typescript
      class Person {
        private name: string;
        protected age: number;
  
        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
  
        public greet(): string {
          return `Hello, my name is ${this.name}.`;
        }
      }
      ```
**À l'oral :**  
"Les classes TypeScript offrent une structure plus robuste et permettent d'éviter des erreurs dès le développement."

---

### Slide 3: **Interfaces : Introduction et comparaison JS/TS**
**Titre :** Pourquoi utiliser des Interfaces ?  
**Contenu :**
- **En JavaScript :**
    - Pas d'équivalent natif pour définir des structures précises.
    - Exemple :
      ```javascript
      function printCar(car) {
        console.log(`${car.brand} - ${car.model}`);
      }
      printCar({ brand: "Toyota", model: "Corolla", year: 2020 }); // Ok
      printCar({ brand: "Toyota" }); // Erreur non détectée
      ```
- **En TypeScript :**
    - Valide la structure avec les interfaces :
      ```typescript
      interface Car {
        readonly brand: string;
        model: string;
        year?: number;
      }
      const myCar: Car = { brand: "Toyota", model: "Corolla" };
      myCar.brand = "Honda"; // Erreur
      ```
**À l'oral :**  
"Les interfaces imposent un contrat clair pour les objets, réduisant les erreurs d'intégration."

---
Voici une proposition pour deux slides sur l'héritage en TypeScript, avec un texte concis et du code d'exemple, ainsi que le texte à prononcer :

---

### Slide 4: **L’héritage en Typescript**
**Titre :**  L'héritage en TypeScript
**Contenu :**

- TypeScript permet l'héritage de classes via le mot-clé `extends`.
- Une classe enfant peut hériter des propriétés et méthodes d'une classe parente.

```typescript
class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} fait un bruit`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} aboie`);
  }
}

const dog = new Dog('Rex');
dog.speak();  // Affiche "Rex aboie"
```

**Texte à prononcer :**
"L'héritage en TypeScript permet à une classe enfant d'hériter des propriétés et des méthodes d'une classe parente, ce qui facilite la réutilisation du code. Ici, la classe `Dog` hérite de la classe `Animal`, mais elle peut aussi redéfinir ses propres méthodes, comme la méthode `speak`."

---

### Slide 5: **Accès aux propriétés et méthodes**
**Titre :**  L’accès aux propriétés et méthodes
**Contenu :**

- Le constructeur d’une classe enfant doit appeler le constructeur de la classe parente avec `super()`.
- Les propriétés et méthodes de la classe parente sont accessibles avec `this`.

```typescript
class Animal {
  constructor(public name: string, public age: number) {}

  describe() {
    console.log(`${this.name} a ${this.age} ans`);
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, public breed: string) {
    super(name, age);  // Appel du constructeur de la classe parente
  }

  describe() {
    super.describe();  // Appel de la méthode parente
    console.log(`C'est un ${this.breed}`);
  }
}

const dog = new Dog('Rex', 5, 'Labrador');
dog.describe();  
// Affiche "Rex a 5 ans"
// Affiche "C'est un Labrador"
```

**Texte à prononcer :**
"Lorsqu'une classe enfant possède un constructeur, il doit appeler le constructeur de la classe parente avec `super()`. Cela permet de bien initialiser les propriétés héritées. Dans cet exemple, la classe `Dog` appelle `super(name, age)` pour initialiser les propriétés de la classe parente `Animal`."

---

Voici une proposition pour une slide résumant les différences entre l'héritage en TypeScript et en JavaScript :

---

### Slide 6: **Différences entre Javascript et Typescript**
**Titre :**   Différences entre l’héritage en TypeScript et JavaScript
**Contenu :**

### 1. **Héritage en JavaScript (ES6)**
- Basé sur des classes et prototypes.
- Pas de vérification de types.
- Exemple : `class Dog extends Animal { ... }`

### 2. **Héritage en TypeScript**
- Similaire à JavaScript avec classes et prototypes.
- Vérification des types au moment de la compilation.
- Possibilité d'utiliser des **interfaces** et des **mixins** pour des fonctionnalités supplémentaires.

### 3. **Exemple en TypeScript :**

```typescript
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog('Rex', 'Labrador');
```

### **Différences principales :**
- **Vérification statique des types** en TypeScript.
- **Interfaces** et **mixins** pour enrichir l'héritage en TypeScript.

---

**Texte à prononcer :**
"En JavaScript, l'héritage repose sur les prototypes et les classes, sans vérification des types. En TypeScript, l'héritage fonctionne de la même manière, mais avec une vérification des types au moment de la compilation, ce qui permet d'éviter les erreurs de type. TypeScript offre aussi la possibilité d'utiliser des interfaces et des mixins pour étendre l'héritage, ce qui n'est pas possible en JavaScript natif."

---

Cela résume bien la différence entre les deux langages au niveau de l'héritage.

### Slide 7: **Génériques : Introduction**
**Titre :** Les Génériques pour plus de flexibilité  
**Contenu :**
- **Pourquoi ?**
    - En JavaScript : Les fonctions et classes acceptent tous types, mais cela crée des ambiguïtés :
      ```javascript
      function wrap(value) {
        return [value];
      }
      const wrapped = wrap(42); // Que contient 'wrapped' ?
      ```
    - En TypeScript : Les génériques précisent et réutilisent des types.

- **Fonctions génériques :**
  ```typescript
  function wrap<T>(value: T): T[] {
    return [value];
  }
  const wrapped = wrap<number>(42); // Type précis : number[]
  ```
- **Classes génériques :**
  ```typescript
  class Box<T> {
    content: T;
    constructor(content: T) {
      this.content = content;
    }
  }
  const stringBox = new Box<string>("Hello");
  ```
**À l'oral :**  
"Les génériques permettent une flexibilité tout en maintenant la rigueur des types."

---

### Slide 8: **Génériques avancés : Contraintes**
**Titre :** Génériques avec des contraintes  
**Contenu :**
- **Pourquoi ajouter des contraintes ?** Pour limiter les types autorisés :
  ```typescript
  function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
  }
  logLength("Hello"); // OK
  logLength([1, 2, 3]); // OK
  logLength(42); // Erreur
  ```
- **Comparaison avec JavaScript :**
    - En JS : Erreur détectée uniquement à l'exécution.
    - En TS : Prévention dès la compilation.  
      **À l'oral :**  
      "Les contraintes augmentent la flexibilité tout en limitant les erreurs d'usage."

---

### Slide 9: **Quiz : Objets et Génériques**
**Titre :** Testez vos connaissances !  
**Questions :**
1. Quels sont les modificateurs d'accès en TypeScript ?
2. Quelle est la différence principale entre une interface et une classe ?
3. Donnez un exemple d'utilisation de `readonly` dans une interface.
4. Pourquoi utiliser un générique dans une fonction ?
5. Avec un exemple, expliquez le concept de contrainte dans les génériques.  
   **À l'oral :**  
   "Réfléchissez à ces questions pour consolider votre compréhension des concepts abordés."

---

Ces ajouts devraient renforcer la comparaison entre JavaScript et TypeScript tout en clarifiant l'intérêt des génériques. Souhaitez-vous des modifications ou des précisions supplémentaires ? 😊