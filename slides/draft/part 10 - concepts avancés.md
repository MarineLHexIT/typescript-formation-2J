### **Concepts Avancés : Structure et Révisions**

Je vais organiser cette partie en reprenant les concepts demandés (décorateurs, types union, alias) tout en ajoutant des concepts avancés supplémentaires pour enrichir la section. Voici le plan :

1. **Décorateurs**
2. **Types Union**
3. **Alias**
4. **Types Conditionnels**
5. **Types Mappés**
6. **Types Inférés avec infer**

---

#### **Slide 1: Décorateurs - Définition et Utilisation**

**Titre : Introduction aux Décorateurs**

**Texte à afficher :**
- **Définition :** Fonction spéciale annotant une classe, une méthode ou une propriété.
- **Syntaxe :** Préfixée par `@`.
- **Types de décorateurs :**
   - **Classe** : `@ClassDecorator`
   - **Méthode** : `@MethodDecorator`
   - **Propriété** : `@PropertyDecorator`

**Exemple :**
```typescript
function Log(target: any, key: string) {
  console.log(`${key} a été accédé`);
}

class Exemple {
  @Log
  prop: string = 'Hello';
}
```

---

**Texte oral :**  
Les décorateurs permettent d’ajouter ou de modifier des comportements sans altérer directement le code annoté. Leur principal usage se trouve dans les frameworks comme Angular pour gérer des métadonnées ou des injections de dépendance. En revanche, ils nécessitent une configuration avancée, car ils ne sont disponibles qu’en mode expérimental.

---

#### **Slide 2: Décorateurs - Pros & Cons**

**Titre : Décorateurs - Avantages et Inconvénients**

**Texte à afficher :**
- **Avantages :**
   - Réduction de code boilerplate.
   - Extensibilité accrue via annotations.
   - Idéal pour les frameworks.
- **Inconvénients :**
   - Syntaxe parfois peu intuitive.
   - Nécessite un support expérimental.
   - Pas adapté à tous les projets.

---

**Texte oral :**  
Les décorateurs brillent lorsqu’ils sont utilisés dans des contextes standardisés, mais peuvent vite devenir confus lorsqu’ils sont employés de manière non conventionnelle. Ils sont recommandés dans des environnements comme Angular, mais peut-être moins dans des projets TypeScript simples.

---

#### **Slide 3: Types Union - Définition et Usage**

**Titre : Types Union**

**Texte à afficher :**
- **Définition :** Type combinant plusieurs possibilités.
- **Syntaxe :** Utilise le symbole `|`.
- **Exemple :**
```typescript
type ID = number | string;

function printId(id: ID) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

---

**Texte oral :**  
Les types union permettent de simplifier les signatures des fonctions tout en offrant une grande flexibilité. Cependant, ils imposent souvent d’ajouter des contrôles spécifiques, ce qui peut compliquer le code si trop de types sont combinés.

---

#### **Slide 4: Alias - Définition et Usage**

**Titre : Alias de Types**

**Texte à afficher :**
- **Définition :** Donne un nom à un type complexe pour simplifier la réutilisation.
- **Syntaxe :** `type AliasName = ...;`
- **Exemple :**
```typescript
type Point = { x: number; y: number };

function printPoint(point: Point) {
  console.log(`x: ${point.x}, y: ${point.y}`);
}
```

---

**Texte oral :**  
Les alias de types sont idéaux pour améliorer la lisibilité du code et réduire la duplication. Cependant, ils ne créent pas de nouvelles entités comme les interfaces, et donc ne peuvent pas être étendus directement.

---

#### **Slide 5: Concepts Avancés - Types Conditionnels**

**Titre : Types Conditionnels**

**Texte à afficher :**
- **Définition :** Type déterminé dynamiquement selon une condition.
- **Syntaxe :** `T extends U ? X : Y`
- **Exemple :**
```typescript
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
```

---

**Texte oral :**  
Les types conditionnels permettent de rendre les types dynamiques en fonction de règles spécifiques. Ils sont très puissants dans des bibliothèques génériques et des outils fortement typés, mais leur lisibilité peut rapidement devenir un problème.

---

#### **Slide 6: Concepts Avancés - Types Mappés**

**Titre : Types Mappés**

**Texte à afficher :**
- **Définition :** Transforme un type en appliquant des modifications à ses clés ou valeurs.
- **Syntaxe :** `{ [K in Keys]: ValueType }`
- **Exemple :**
```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Point = { x: number; y: number };
type ReadOnlyPoint = ReadOnly<Point>;
```

---

**Texte oral :**  
Les types mappés sont particulièrement utiles pour créer des variantes des types existants (readonly, optional). Cependant, ils nécessitent de bien comprendre les clés et les indices de TypeScript.

---

#### **Slide 7: Concepts Avancés - Infer**

**Titre : Utiliser Infer**

**Texte à afficher :**
- **Définition :** Extrait des types spécifiques d’un type complexe.
- **Exemple :**
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getMessage(): string {
  return 'Hello';
}

type MessageReturn = ReturnType<typeof getMessage>; // string
```

---

**Texte oral :**  
`infer` est une fonctionnalité avancée permettant d’extraire des parties spécifiques d’un type, particulièrement utile dans les bibliothèques fortement typées. Toutefois, sa syntaxe peut sembler intimidante pour les débutants.

---

### **Durée Estimée :**

| Sujet               | Durée Estimée |
|---------------------|---------------|
| Décorateurs         | 25 min        |
| Types Union         | 15 min        |
| Alias               | 10 min        |
| Types Conditionnels | 20 min        |
| Types Mappés        | 20 min        |
| Infer               | 15 min        |
| **Total**           | **1h 45 min** |

Cela vous convient-il ? 😊