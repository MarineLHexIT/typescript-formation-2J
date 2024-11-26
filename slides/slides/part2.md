### **Slide 1 : Titre de la section**
**Titre :** *Environnement et Outillage*  
**Contenu :**
- Comment installer et configurer TypeScript.
- Découvrir les outils pour travailler efficacement.
- Intégrer TypeScript dans des projets existants.
- Ajouter l’intégration côté serveur.

**Oral :**
> *"Passons à la configuration pratique. Nous allons installer Node.js, configurer TypeScript, et aborder l’intégration côté serveur pour des applications full-stack."*

---

### **Slide 2 : Installation de Node.js**
**Titre :** *Installation de Node.js*  
**Contenu :**
- **Prérequis :** Node.js pour exécuter du JavaScript et TypeScript sur votre machine.
- **Installer Node.js** :
    - Rendez-vous sur [nodejs.org](https://nodejs.org) et téléchargez la version LTS (Long Term Support).
    - Vérifiez l’installation :
      ```bash
      node --version  
      npm --version  
      ```  

**Oral :**
> *"Si Node.js n’est pas déjà installé sur votre machine, vous devez d’abord l’installer. Node.js est essentiel pour exécuter votre code TypeScript, et npm (le gestionnaire de paquets) sera utilisé pour installer TypeScript et d’autres dépendances."*

---

### **Slide 3 : Installation de TypeScript**
**Titre :** *Installation de TypeScript*  
**Contenu :**
1. **Installer TypeScript globalement :**
   ```bash
   npm install -g typescript
   ```  
2. **Vérifier l’installation de TypeScript :**
   ```bash
   tsc --version
   ```  
3. **Initialiser un projet TypeScript :**
    - Créer un fichier `tsconfig.json` avec :
      ```bash
      tsc --init
      ```  

**Oral :**
> *"Une fois Node.js installé, vous pouvez facilement installer TypeScript. Il suffit de l’installer via npm et de créer un fichier de configuration pour personnaliser votre projet."*

---

### **Slide 4 : Intégration dans un IDE**
**Titre :** *Les IDE au service de TypeScript*  
**Contenu :**
- **IDE populaires :**
    - Visual Studio Code (VS Code) : léger et extensible.
    - WebStorm : puissant et riche en fonctionnalités.
    - Visual Studio (édition complète) : adapté aux projets complexes.
- **Alternatives :**
    - Sublime Text : nécessite des plugins.
    - Atom : support via extensions.
    - Vim/Neovim : nécessite une configuration avancée.

**Oral :**
> *"Bien que TypeScript soit compatible avec la plupart des éditeurs de texte, certains offrent une meilleure prise en charge grâce à des fonctionnalités comme l’auto-complétion et la détection d’erreurs en temps réel. Nous allons nous concentrer sur deux des plus utilisés : Visual Studio Code et WebStorm."*

---

### **Slide 5 : Configurer Visual Studio Code pour TypeScript**
**Contenu :**
1. **Étape 1 : Installer VS Code**
    - Téléchargez depuis [code.visualstudio.com](https://code.visualstudio.com).
2. **Étape 2 : Installer les extensions nécessaires**
    - **TypeScript and JavaScript Language Features** (intégré).
    - **ESLint** (si vous utilisez un linter).
3. **Étape 3 : Personnaliser `settings.json` (optionnel)**
    - Exemple de configuration :
      ```json
      {
        "typescript.tsdk": "./node_modules/typescript/lib",
        "editor.formatOnSave": true,
        "eslint.validate": ["javascript", "typescript"]
      }
      ```  
4. **Étape 4 : Activer le mode de vérification stricte dans `tsconfig.json`**
    - Ajoutez `"strict": true` dans votre configuration.

**Oral :**
> *"Visual Studio Code est extrêmement bien intégré avec TypeScript. L’installation de base suffit pour démarrer, mais des extensions comme ESLint ou Prettier peuvent améliorer encore votre expérience."*

---

### **Slide 6 : Configurer WebStorm pour TypeScript**
**Contenu :**
1. **Étape 1 : Installer WebStorm**
    - Téléchargez depuis [jetbrains.com/webstorm](https://www.jetbrains.com/webstorm/).
    - Assurez-vous que TypeScript est inclus dans votre licence.
2. **Étape 2 : Configuration automatique**
    - WebStorm détecte automatiquement TypeScript dans votre projet (grâce à `tsconfig.json`).
    - Les fonctionnalités comme l’auto-complétion et les annotations de types sont activées par défaut.
3. **Étape 3 : Vérifier les options TypeScript**
    - Allez dans **File > Settings > Languages & Frameworks > TypeScript** :
        - **TypeScript version** : utilisez la version installée localement via npm.
        - **Enable TypeScript service** : active par défaut.
4. **Étape 4 : Ajout de plugins utiles**
    - **Prettier** : pour le formatage.
    - **Node.js** : pour exécuter et déboguer des scripts Node.js.

**Oral :**
> *"WebStorm est idéal pour les projets TypeScript complexes. La configuration automatique est un gain de temps, et ses outils avancés comme le refactoring sont particulièrement utiles."*

---

### **Slide 7 : Autres éditeurs et configurations nécessaires**
**Titre :** *Alternatives à VS Code et WebStorm*  
**Contenu :**
- **Visual Studio (édition complète)**
    - Inclut le support TypeScript dès l’installation.
    - Ajoutez un fichier `tsconfig.json` pour bénéficier des fonctionnalités avancées.
- **Sublime Text**
    - Installez le plugin **TypeScript** via Package Control.
    - Ajoutez également **SublimeLinter** pour des retours en direct.
- **Atom**
    - Installez les packages **ide-typescript** et **linter-eslint**.
- **Vim/Neovim**
    - Utilisez le plugin **coc.nvim** avec l’extension TypeScript :
      ```bash
      :CocInstall coc-tsserver
      ```  

**Oral :**
> *"Pour ceux qui préfèrent des éditeurs légers comme Sublime Text ou Atom, des plugins sont nécessaires pour bénéficier des fonctionnalités de TypeScript. Pour les utilisateurs avancés de Vim, une configuration avec coc.nvim est également possible."*

---

### **Slide 8 : Résumé et recommandations**
**Titre :** *Choisir son IDE*  
**Contenu :**
- **Recommandation principale :** Visual Studio Code pour sa légèreté et sa prise en charge native.
- **Projets complexes :** WebStorm pour ses outils puissants.
- **Flexibilité :** Sublime Text ou Vim pour ceux qui préfèrent des solutions légères avec configuration.

**Oral :**
> *"Quel que soit votre choix, assurez-vous de bien configurer votre IDE pour tirer le meilleur parti de TypeScript. Cela peut faire une grande différence en termes de productivité."*

---

### **Slide 9 : Pourquoi utiliser TypeScript côté serveur ?**
**Titre :** *Les avantages de TypeScript côté serveur*  
**Contenu :**
- **Meilleure maintenabilité**
    - Systèmes complexes mieux structurés grâce aux types.
- **Moins d’erreurs**
    - Détection d’erreurs au moment du développement.
- **Écosystème riche**
    - Support étendu dans des frameworks comme Express, NestJS, etc.
- **Interopérabilité facile**
    - Compatible avec JavaScript et Node.js.

**Oral :**
> *"L’utilisation de TypeScript côté serveur permet de sécuriser davantage votre code grâce à une meilleure gestion des types et des outils d’introspection puissants. Les erreurs sont détectées bien avant l’exécution, ce qui réduit les risques en production."*

---

### **Slide 10 : Configurer un serveur Node.js avec TypeScript (1/2)**
**Contenu :**
1. **Étape 1 : Initialiser un projet Node.js**
    - Commande pour créer un nouveau projet :
      ```bash
      npm init -y
      ```  
    - Installez TypeScript et ses dépendances :
      ```bash
      npm install typescript ts-node @types/node --save-dev
      ```  
2. **Étape 2 : Configurer `tsconfig.json`**
    - Commande pour générer un fichier de configuration :
      ```bash
      npx tsc --init
      ```  
    - Exemple de fichier :
      ```json
      {
        "compilerOptions": {
          "target": "ES2020", // La version de JavaScript ciblée après compilation
          "module": "commonjs", // Le système de modules utilisé, ici pour Node.js
          "outDir": "./dist", // Le dossier où seront placés les fichiers compilés
          "rootDir": "./src", // Le dossier racine contenant le code source TypeScript
          "strict": true, // Active un ensemble de vérifications strictes (recommandé)
          "esModuleInterop": true // Permet une meilleure interopérabilité avec les modules CommonJS
        }
      }
      ```

**Oral :**
> *"Le fichier `tsconfig.json` est essentiel pour adapter le compilateur TypeScript à votre projet. Configurez-le selon vos besoins, notamment pour définir où les fichiers compilés seront placés."*

---

### **Slide 11 : Configurer un serveur Node.js avec TypeScript (2/2)**
**Contenu :**
3. **Étape 3 : Créer un fichier de démarrage**
    - Exemple : `src/server.ts`
      ```typescript
      import express from 'express'; // Import de la bibliothèque Express

      const app = express(); // Création d'une application Express
      const port = 3000; // Port d'écoute du serveur

      // Route GET qui renvoie un message simple
      app.get('/', (req, res) => {
        res.send('Hello, TypeScript!');
      });

      // Démarrage du serveur avec une fonction de callback
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
      ```  
4. **Étape 4 : Lancer le serveur**
    - Utilisez `ts-node` pour démarrer directement en TypeScript :
      ```bash
      npx ts-node src/server.ts
      ```  
    - Compilez puis exécutez en JavaScript si nécessaire :
      ```bash
      npx tsc && node dist/server.js
      ```

**Oral :**
> *"Voici un serveur minimal utilisant TypeScript avec Express. En plus de renforcer la robustesse de votre projet, cette configuration est facilement extensible pour des cas d’usage plus complexes."*

---

### **Slide 12 : Utiliser TypeScript avec un framework avancé**
**Titre :** *Exemple avec NestJS (optionnel)*  
**Contenu :**
1. **Installer NestJS**
    - Commande pour créer un projet :
      ```bash
      npm install -g @nestjs/cli
      nest new my-app
      ```  
2. **Avantages de NestJS avec TypeScript**
    - Structure modulaire.
    - Utilisation native de TypeScript (classes, décorateurs, etc.).

**Oral :**
> *"Pour des applications plus complexes, des frameworks comme NestJS offrent une intégration native avec TypeScript et une architecture prête à l’emploi pour les projets modulaires."*

---

### **Slide 13 : Atelier - Mise en pratique côté serveur**
**Titre :** *Créer un mini-serveur avec TypeScript*  
#### Objectif : Créer un mini-serveur qui :
- Accueille une requête `GET /` pour renvoyer un message de bienvenue.
- Accepte une requête `POST /data` avec un objet JSON et renvoie une réponse incluant un timestamp.

#### Étapes :
1. Initialisez un projet avec Node.js et TypeScript.
    - Créez un fichier `src/server.ts`.
2. Implémentez les routes `GET` et `POST`.
3. Ajoutez une validation simple pour les données entrantes (utilisez un type TypeScript).

#### Consignes :
- Travaillez en binôme.
- Durée : **30 minutes**.
- Posez des questions si vous êtes bloqués.

---

### **Slide 14 : Corrigé de l'Atelier - Mini-Serveur TypeScript**

**Titre :** *Corrigé : Serveur TypeScript avec Express*  
**Contenu :**

```typescript
import express from 'express'; // Import d'Express pour gérer les requêtes HTTP

const app = express(); // Création de l'application Express
const port = 3000; // Port sur lequel le serveur va écouter

// Middleware pour parser le JSON dans le corps des requêtes
app.use(express.json());

// Route GET - Renvoie un message de bienvenue
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre serveur TypeScript !');
});

// Définition du type des données attendues dans la requête POST
interface DataRequest {
  name: string;
  age: number;
}

// Route POST - Accepte un objet JSON et renvoie une réponse avec un timestamp
app.post('/data', (req, res) => {
  const data: DataRequest = req.body; // TypeScript vérifie les données reçues
  const response = {
    message: `Bonjour, ${data.name}! Vous avez ${data.age} ans.`,
    timestamp: new Date().toISOString(), // Ajout du timestamp
  };
  res.json(response); // Renvoi d'une réponse au format JSON
});

// Middleware de gestion des erreurs
app.use((err: Error, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose a mal tourné!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
```

**Oral pour présenter le corrigé :**
> *"Voici une solution complète pour l'atelier. Ce mini-serveur inclut deux routes principales : une pour accueillir l'utilisateur et une autre pour traiter des données envoyées en JSON. Le middleware de gestion des erreurs est ajouté pour vous montrer comment gérer les cas imprévus, et les types définis assurent une meilleure validation des données. Des questions ?"*

---

### Temps :
- **Présentation du corrigé : 5 minutes**
- **Discussions/questions avec les apprenants : 5-10 minutes**

---

Pas de souci, voici la **slide récapitulative** pour la section **Environnement et Outillage** :

---

### **Slide Récapitulatif : Environnement et Outillage**
**Titre :** *Récapitulatif - Environnement et Outillage pour TypeScript*

**Contenu :**
- **Node.js :** Installez Node.js pour exécuter TypeScript côté serveur et gérer les paquets.
- **TypeScript :** Installez TypeScript globalement avec `npm install -g typescript`.
- **IDE recommandés :**
    - **Visual Studio Code** : Bien intégré, extensions utiles comme *TypeScript Hero* et *Prettier*.
    - **WebStorm** : TypeScript supporté nativement, configurez via les paramètres.
    - **Autres IDE** : Sublime Text, Atom, Eclipse, etc. (avec plugins nécessaires).
- **Configuration TypeScript :** `tsconfig.json` pour gérer la compilation et les options avancées.
- **Serveur Node.js avec TypeScript :** Configuration de base avec `express` ou NestJS pour des applications serveur modernes.
- **Source Maps :** Utilisez-les pour faciliter le débogage de vos fichiers `.ts` dans les outils de développement.

**Oral :**
> *"Cette section vous a permis de comprendre comment préparer votre environnement de développement pour TypeScript, que ce soit pour le développement côté client ou serveur. Assurez-vous d’avoir tout configuré avant d’entamer la prochaine section."*

---

Voilà la slide récapitulative pour la partie Environnement et Outillage ! Prête à être utilisée dans ta présentation 😊.

Si tu es prêt pour la suite, on peut continuer sur le prochain sujet !