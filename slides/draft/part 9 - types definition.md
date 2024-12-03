### **Slides - Type Definitions (Définition de types personnalisés)**

---

#### **Slide 1 : Pourquoi les définitions de types ?**
**À l’oral :**
- Les définitions de types permettent d’adapter TypeScript à vos besoins spécifiques.
- Elles sont indispensables pour travailler avec des bibliothèques JavaScript non typées ou mal typées.

**Contenu :**
- **Interopérabilité** : Assurez un typage robuste pour les bibliothèques non natives.
- **Clarté** : Réduisez les annotations répétitives ou complexes.
- **Flexibilité** : Adaptez TypeScript à des scénarios avancés.

---

#### **Slide 2 : Créer des types personnalisés**
**À l’oral :**
- TypeScript permet de définir deux types de structures principales : `type` et `interface`.
- Les deux ont des cas d'utilisation spécifiques, bien qu'elles puissent se chevaucher.

**Contenu :**
- **Avec `type`** : Créer des unions, intersections ou des types simples.
  ```ts
  type Role = 'admin' | 'editor' | 'viewer';
  type User = {
    id: number;
    name: string;
    role: Role;
  };
  ```  
- **Avec `interface`** : Décrire des structures d’objets.
  ```ts
  interface User {
    id: number;
    name: string;
    role: 'admin' | 'editor' | 'viewer';
  }
  ```  

---

#### **Slide 3 : Typage de bibliothèques externes**
**À l’oral :**
- Si une bibliothèque JavaScript n’a pas de types intégrés, vous pouvez en installer ou en créer.

**Contenu :**
- Installation des types avec `npm install @types/<package>`  
  Exemple :
  ```bash
  npm install axios
  npm install @types/axios
  ```  
- Création d’un fichier `d.ts` pour typage manuel :
  ```ts
  declare module 'my-library' {
    export function myFunction(param: string): boolean;
  }
  ```  

---

#### **Slide 4 : Étendre ou modifier des types existants**
**À l’oral :**
- Étendre les types peut simplifier l'adaptation à des besoins spécifiques.
- La redéclaration permet de compléter ou de corriger des types fournis par une bibliothèque.

**Contenu :**
- **Extension d’interface** :
  ```ts
  interface BaseUser {
    id: number;
    name: string;
  }
  interface Admin extends BaseUser {
    privileges: string[];
  }
  ```  
- **Redéclaration de module** :
  ```ts
  declare module 'express' {
    interface Request {
      user?: { id: string; role: string };
    }
  }
  ```  

---

#### **Slide 5 : Questionnaire à choix multiple**
**À l’oral :**
- Ce quiz permet de vérifier que vous avez bien assimilé les concepts.

**Contenu :**

1. **Pourquoi utiliser les définitions de types ?**  
   a) Pour éviter d'utiliser TypeScript.  
   b) Pour ajouter ou enrichir les types de bibliothèques existantes. (*)  
   c) Pour se passer de typage strict.

2. **Quelle commande permet d’ajouter les types d’un package ?**  
   a) `npm install <package>-types`  
   b) `npm install @types/<package>` (*)  
   c) `npm add typings <package>`

3. **Quelle est une différence clé entre `type` et `interface` ?**  
   a) `type` peut créer des unions et intersections, mais pas `interface`. (*)  
   b) `interface` est plus rapide à exécuter.  
   c) Les deux sont identiques.

4. **Que permet la redéclaration de module ?**  
   a) Ajouter des propriétés à des types existants. (*)  
   b) Écraser tout le contenu d’un fichier TypeScript.  
   c) Supprimer un module non utilisé.

5. **Dans quel fichier écrit-on des définitions pour un module JavaScript ?**  
   a) `module.ts`  
   b) `*.d.ts` (*)  
   c) `package.json`

---

#### **Durée estimée**
- Théorie : **45 minutes**
- Questionnaire : **5 minutes**
- **Total : 50 minutes**