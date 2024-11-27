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


