### **Slides mises à jour : Types conditionnels**

---

### **Slide 1 : Qu’est-ce qu’un type conditionnel ?**

**À l’écrit :**
- Les types conditionnels permettent de choisir dynamiquement un type en fonction d’une condition.
- Ils se présentent sous la forme :  
  `T extends U ? X : Y`

**Exemple simple :**
```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'Hello'>; // true
type B = IsString<42>; // false
```

**À l’oral :**
- Les types conditionnels permettent de simplifier le typage complexe, en appliquant des "si... alors" directement au niveau des types.
- Ils sont particulièrement utiles lorsqu’on travaille avec des structures complexes ou dynamiques.

---

### **Slide 2 : Pourquoi utiliser des types conditionnels ?**

**À l’écrit :**
- **Réduction de la duplication** : Un seul type pour remplacer de multiples surcharges.
- **Meilleure maintenabilité** : Centralisation de la logique des types.
- **Utilisation dynamique** : Adapte les types de retour selon le contexte.

**Exemple classique avec surcharges :**
```typescript
function process(input: string): string[];
function process(input: number): number[];
function process(input: any): any[] {
  if (typeof input === 'string') return input.split('');
  if (typeof input === 'number') return [input];
}
```

**Problème :**
- Chaque nouveau type nécessite une nouvelle signature.

---

### **Slide 3 : Simplifier avec un type conditionnel**

**À l’écrit :**
Utilisation d’un type conditionnel pour centraliser la logique.

```typescript
type Processed<T> = T extends string
  ? string[]
  : T extends number
  ? number[]
  : never;

function process<T>(input: T): Processed<T> {
  if (typeof input === 'string') return input.split('') as Processed<T>;
  if (typeof input === 'number') return [input] as Processed<T>;
}
```

**À l’oral :**
- Le type `Processed<T>` décide dynamiquement du type de retour.
- Cette approche évite de dupliquer la logique dans plusieurs surcharges.
- Ajouter un type (par exemple `boolean`) ne nécessite qu'une modification dans `Processed<T>`.

---

### **Slide 4 : Cas d’utilisation des types conditionnels**

**À l’écrit :**
- **API dynamique :**
  Adapter le format des données retournées en fonction des paramètres.

- **Simplification des surcharges :**
  Gérer les cas multiples sans répétition.

- **Manipulation de types complexes :**
  Par exemple, filtrer ou transformer des unions de types.

**Exemple :**
```typescript
type Format<T> = T extends 'json'
  ? Record<string, any>
  : T extends 'xml'
  ? string
  : never;

function fetchData<T extends 'json' | 'xml'>(format: T): Format<T> {
  // ...
}
```
---

### **Slide 5 : Mini-quiz**

**Questions :**
1. Que retourne un type conditionnel si la condition est vraie ?
    - A. `T extends U ? Y : X`
    - B. `T extends U ? X : Y` ✅
    - C. `T ? U : never`

2. Pourquoi éviter les surcharges dans certains cas ?
    - A. Trop de duplications ✅
    - B. Les surcharges ne sont pas supportées.
    - C. Les surcharges n’autorisent pas de types complexes.

3. Qu’est-ce que `never` dans un type conditionnel ?
    - A. Un type par défaut.
    - B. Un type invalide pour éliminer des branches de logique. ✅
    - C. Une erreur de compilation.

---

### **Slides Reformatées pour les Types Mappés**

---

#### **Slide 1 : Qu’est-ce qu’un type mappé ?**

**Texte concis :**
- Un type mappé permet de transformer toutes les propriétés d’un type en appliquant une règle uniforme.
- Utilisé pour automatiser la manipulation de types et éviter les répétitions.

**Exemple :**  
Créer une version optionnelle d’un type :
```typescript
type User = { name: string; age: number };
type OptionalUser = { [K in keyof User]?: User[K] };
```

**À l’oral :**
- Types mappés = générer des types dérivés automatiquement.
- Très utiles pour des structures dynamiques comme des API ou des objets de configuration.
- Syntaxe de base : `[Key in keyof Type]: NewType`.

---

#### **Slide 2 : Rendre toutes les propriétés optionnelles**

**Texte concis :**
- **Cas d’utilisation :** API où certaines propriétés peuvent être absentes.
- **Exemple :**
```typescript
type User = { name: string; email: string };
type UpdateUser = Partial<User>; // Toutes les propriétés deviennent optionnelles
```

**À l’oral :**
- Types mappés intégrés comme `Partial` sont courants.
- Idéal pour des structures de données flexibles.
- Exemple concret : payload d’une mise à jour utilisateur.

---

#### **Slide 3 : Rendre toutes les propriétés immuables**

**Texte concis :**
- **Cas d’utilisation :** Configurations ou objets système qui ne doivent pas être modifiés après leur création.
- **Exemple :**
```typescript
type Config = { host: string; port: number };
type ImmutableConfig = Readonly<Config>;
```

**À l’oral :**
- Utiliser `Readonly` pour bloquer toute modification.
- Exemple typique : config de serveur où `config.port = 3000;` serait une erreur.
- Approche sécurisée pour les structures critiques.

---

#### **Slide 4 : Supprimer `readonly` ou `?`**

**Texte concis :**
- **Cas d’utilisation :** Réactiver des propriétés modifiables ou obligatoires.
- **Exemple :**
```typescript
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };
```

**À l’oral :**
- Important pour des systèmes où une étape temporaire demande des modifications.
- Exemple : éditeur qui modifie des objets avant qu’ils ne deviennent immuables.

---

#### **Slide 5 : Filtrer ou exclure des propriétés**

**Texte concis :**
- **Cas d’utilisation :** Exclure des données sensibles d’un objet.
- **Exemple :**
```typescript
type User = { name: string; password: string };
type PublicUser = Omit<User, 'password'>;
```

**À l’oral :**
- Exemple classique : construire un type pour une API publique.
- Propriétés inutiles ou sensibles peuvent être exclues avec `Omit`.
- Inversement, `Pick` extrait un sous-ensemble précis de propriétés.

---

#### **Slide 6 : Renommer ou préfixer les clés**

**Texte concis :**
- **Cas d’utilisation :** Adapter les clés pour des normes spécifiques.
- **Exemple :**
```typescript
type User = { name: string; age: number };
type APIUser = { [K in keyof User as `api_${K}`]: User[K] };
```

**À l’oral :**
- Transformation très puissante pour adapter un type interne à une convention externe.
- Exemple : préfixer des clés pour différencier des champs provenant d’une API tierce.

---

#### **Slide 7 : Types conditionnels dans un type mappé**

**Texte concis :**
- **Cas d’utilisation :** Modifier les types des propriétés selon leur type initial.
- **Exemple :**
```typescript
type FormValues = { name: string; age: number };
type Validation = {
  [K in keyof FormValues]: FormValues[K] extends string ? boolean : FormValues[K];
};
```

**À l’oral :**
- Combine la logique des types conditionnels et des types mappés.
- Exemple : validation automatique d’un formulaire en transformant `string` en `boolean`.

---

#### **Slide 8 : Quiz - Types mappés**

1. **Quel est l’avantage principal des types mappés ?**
    - a) Réduction du code répétitif.
    - b) Optimisation des performances.
    - c) Gestion des erreurs runtime.  
      **Réponse : a)**

2. **Quelle transformation applique `Readonly<T>` ?**
    - a) Rend toutes les propriétés optionnelles.
    - b) Rend toutes les propriétés immuables.
    - c) Supprime une propriété spécifique.  
      **Réponse : b)**

3. **Quel type utiliser pour exclure une propriété sensible ?**
    - a) Pick
    - b) Omit
    - c) Required  
      **Réponse : b)**

---

### **Temps estimé pour la sous-partie Types mappés**
**Environ 30 minutes :**
- Explications théoriques : ~15 minutes.
- Étude d’exemples : ~10 minutes.
- Quiz : ~5 minutes.
### **Étude de Cas Complète : Types Mappés en Action**

#### **Contexte**
Vous êtes chargé·e de créer un système de gestion des utilisateurs pour une application. Chaque utilisateur peut avoir des données publiques et privées, et certaines propriétés doivent être transformées pour différents usages. Vous devez construire des types pour répondre à ces besoins.

---

#### **Objectif**
Créer des types mappés adaptés aux scénarios suivants :
1. Gérer des utilisateurs publics et privés.
2. Préparer les données pour une API en modifiant les clés.
3. Implémenter des validations automatiques dans les formulaires.

---

### **Partie 1 : Types d'Utilisateur**

1. **Base**  
   Créez un type `User` :
```typescript
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
```

2. **Utilisateur Public**  
   Définissez un type `PublicUser` qui exclut la propriété `password`.

3. **Utilisateur Modifiable**  
   Définissez un type `EditableUser` où toutes les propriétés sont optionnelles.

---

### **Partie 2 : Préparer des Données pour une API**

1. **API Compatible**  
   Créez un type `APIUser` qui modifie les clés de `User` pour les préfixer avec `api_`.

2. **Propriétés Sélectionnées**  
   Créez un type `MinimalAPIUser` qui ne contient que `api_id` et `api_name`.

---

### **Partie 3 : Validation Automatique**

1. **Validation des Champs**  
   Créez un type `ValidationSchema` qui transforme chaque propriété de `User` :
    - Si la propriété est un `string`, elle devient un `boolean`.
    - Sinon, le type reste le même.

---

### **Énoncé Final**
Implementez les types suivants pour répondre à ces cas. Voici un exemple d’entrée et de sortie attendu :

#### **Entrée**
```typescript
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "securepassword",
};
```

#### **Sortie**
1. **PublicUser**
```typescript
{
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com";
}
```

2. **APIUser**
```typescript
{
  api_id: 1,
  api_name: "John Doe",
  api_email: "john.doe@example.com",
  api_password: "securepassword",
}
```

3. **ValidationSchema**
```typescript
{
  id: 1,
  name: true,
  email: true,
  password: true,
}
```

---

### **Étapes pour les Développeurs**

#### Étape 1 : Définir les Types
Créez `PublicUser`, `EditableUser`, `APIUser`, et `ValidationSchema`.

#### Étape 2 : Vérifier les Transformations
Testez chaque type avec un objet utilisateur pour confirmer qu’il fonctionne comme attendu.

#### Étape 3 : Bonus (facultatif)
Écrivez des tests unitaires pour vérifier :
- Si `PublicUser` exclut correctement `password`.
- Si les clés de `APIUser` sont bien préfixées.
- Si `ValidationSchema` transforme correctement les `string` en `boolean`.

---

### **Correction**

#### Types Mappés
```typescript
// Base User Type
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// Public User (Exclut password)
type PublicUser = Omit<User, 'password'>;

// Editable User (Propriétés optionnelles)
type EditableUser = Partial<User>;

// API User (Préfixage des clés)
type APIUser = { [K in keyof User as `api_${K}`]: User[K] };

// Minimal API User (Sélection de propriétés)
type MinimalAPIUser = Pick<APIUser, 'api_id' | 'api_name'>;

// Validation Schema (Transformation conditionnelle)
type ValidationSchema<T> = {
  [K in keyof T]: T[K] extends string ? boolean : T[K];
};
```

---

### **Résultats de Test**
```typescript
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "securepassword",
};

// Public User
const publicUser: PublicUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

// Editable User
const editableUser: EditableUser = {
  name: "Jane Doe", // Uniquement modifié
};

// API User
const apiUser: APIUser = {
  api_id: 1,
  api_name: "John Doe",
  api_email: "john.doe@example.com",
  api_password: "securepassword",
};

// Validation Schema
const validation: ValidationSchema<User> = {
  id: 1, // inchangé
  name: true, // string devient boolean
  email: true, // string devient boolean
  password: true, // string devient boolean
};
```

---

### **Temps Estimé pour l’Étude de Cas**
**45 minutes :**
- Compréhension de l’objectif : ~5 minutes.
- Implémentation : ~25 minutes.
- Tests et corrections : ~15 minutes.

---