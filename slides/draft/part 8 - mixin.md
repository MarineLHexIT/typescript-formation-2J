### **Slides : Mixins en TypeScript**

---

#### **Slide 1 : Introduction aux mixins**
**Contenu :**  
**Qu'est-ce qu'un mixin ?**
- Un mixin est un moyen de réutiliser du code entre plusieurs classes sans recourir à l'héritage multiple (non supporté en TypeScript).
- Permet d'ajouter des fonctionnalités à des classes via la composition.

**Comparaison :**
- **Héritage classique :** Une classe dérive d’une autre (relation parent-enfant stricte).
- **Mixins :** Combinaison flexible de comportements entre plusieurs entités, sans hiérarchie stricte.

**Cas d'utilisation :**
- Ajout de fonctionnalités réutilisables, comme `CanFly`, `CanSwim`, ou `CanSing`.
- Modularisation de comportements partagés dans de grandes bases de code.

**À l'oral :**
- "Pensez aux mixins comme des blocs LEGO. Chaque bloc ajoute une fonctionnalité, et vous assemblez les blocs nécessaires pour créer l'objet final."

---

#### **Slide 2 : Créer des mixins en TypeScript**
**Contenu :**
1. **Étapes pour un mixin :**
    - Déclarez une fonction prenant une classe de base comme argument.
    - Retournez une nouvelle classe qui étend cette classe de base avec des fonctionnalités supplémentaires.

2. **Exemple simple :**
```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function CanFly<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log(`${this.name} is flying!`);
    }
  };
}

const Bird = CanFly(Animal);
const eagle = new Bird("Eagle");
eagle.fly(); // "Eagle is flying!"
```

**À l'oral :**
- "Nous combinons ici une classe de base avec une fonctionnalité supplémentaire, sans modifier directement la classe d'origine. Cela facilite la maintenance et la réutilisation."

---

#### **Slide 3 : Combiner plusieurs mixins**
**Contenu :**  
**Composition de mixins :**
- TypeScript permet de composer plusieurs mixins en les appliquant successivement à une classe de base.

**Exemple :**
```typescript
function CanSwim<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    swim() {
      console.log(`${this.name} is swimming!`);
    }
  };
}

const Amphibian = CanSwim(CanFly(Animal));
const frog = new Amphibian("Frog");
frog.fly();  // "Frog is flying!"
frog.swim(); // "Frog is swimming!"
```

**À l'oral :**
- "Vous pouvez enchaîner les mixins comme des couches successives, mais attention à l'ordre de composition, car certains mixins pourraient dépendre des autres."

---

#### **Slide 4 : Avantages des mixins**
**Contenu :**
- **Réutilisabilité :** Les mixins encapsulent des fonctionnalités spécifiques, facilement applicables à différentes classes.
- **Flexibilité :** Pas de hiérarchie rigide ; les mixins s’appliquent à la demande.
- **Découplage :** Chaque mixin reste indépendant des autres.

**À l'oral :**
- "Les mixins sont idéaux pour éviter la complexité de l'héritage profond ou multiple, tout en rendant le code plus modulaire et lisible."

---

#### **Slide 5 : Limites des mixins**
**Contenu :**
- **Complexité :** Plusieurs mixins peuvent compliquer la compréhension de la classe finale.
- **Conflits :** Si deux mixins ajoutent des méthodes avec le même nom, cela peut causer des bugs.
- **Performances :** Un usage abusif peut entraîner des classes trop lourdes.

**À l'oral :**
- "Comme tout outil, les mixins doivent être utilisés avec modération pour éviter une surcharge cognitive ou des conflits de noms."

---

#### **Slide 6 : Atelier : Créez vos propres mixins**
**Contenu :**  
**Objectif :**
- Créer une classe `Person` enrichie de comportements `CanSpeak` et `CanDrive`.

**Instructions :**
1. Créez une classe `Person` avec une propriété `name`.
2. Créez deux mixins :
    - `CanSpeak` : ajoute une méthode `speak()` pour afficher un message.
    - `CanDrive` : ajoute une méthode `drive()` pour afficher un message.
3. Appliquez les mixins à la classe `Person`.
4. Testez la classe résultante.

**À l'oral :**
- "Dans cet atelier, vous allez manipuler directement des mixins pour observer comment ils enrichissent une classe de base avec de nouveaux comportements."

---

#### **Slide 7 : Correction de l’atelier**
**Contenu :**  
**Code complet :**
```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function CanSpeak<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    speak() {
      console.log(`${this.name} is speaking.`);
    }
  };
}

function CanDrive<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    drive() {
      console.log(`${this.name} is driving.`);
    }
  };
}

const MultiTalentedPerson = CanDrive(CanSpeak(Person));
const john = new MultiTalentedPerson("John");
john.speak();  // "John is speaking."
john.drive();  // "John is driving."
```

---

#### **Slide 8 : Quizz rapide**
**Contenu :**
1. Que sont les mixins en TypeScript ?
2. Quelle est la différence entre un mixin et l’héritage classique ?
3. Citez deux avantages des mixins.
4. Pourquoi l'ordre des mixins est-il important ?
5. Que se passe-t-il si deux mixins définissent la même méthode ?

**À l'oral :**
- "Le quizz sert à ancrer les points clés sur les mixins et à vérifier que tout le monde est à l'aise avec leur fonctionnement."

---

### **Durée totale estimée :**
**45 minutes**
- **Slides 1-5 (théorie) :** 15 minutes.
- **Atelier pratique :** 25 minutes.
- **Quizz rapide :** 5 minutes.