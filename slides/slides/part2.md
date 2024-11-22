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
- **IDE recommandés :**
    - **VS Code** : support natif pour TypeScript.
    - WebStorm : intégration avancée avec refactoring.
- **Avantages :**
    - Auto-complétion améliorée.
    - Détection d’erreurs en temps réel.
    - Navigation dans le code facilitée (Go to Definition, etc.).

**Oral :**
> *"Utiliser un IDE moderne, comme VS Code, est un atout majeur pour travailler avec TypeScript. L’autocomplétion et la gestion des erreurs en temps réel vous feront gagner beaucoup de temps et d’efficacité."*

---

### **Slide 5 : Intégration côté Serveur**
**Titre :** *TypeScript côté serveur avec Node.js*  
**Contenu :**
- **Serveur Node.js avec TypeScript :**
    - TypeScript peut être utilisé pour écrire des applications côté serveur avec Node.js.
    - Exemple d’un serveur simple avec TypeScript et Express :
        1. Installer les dépendances :
           ```bash
           npm install express @types/express
           ```  
        2. Créer un fichier `server.ts` :
           ```typescript
           import express from "express";
           const app = express();
           app.get("/", (req, res) => res.send("Hello TypeScript with Node.js!"));
           app.listen(3000, () => console.log("Server running on port 3000"));
           ```  
        3. Compiler le code TypeScript et exécuter le serveur :
           ```bash
           tsc server.ts
           node server.js
           ```  

**Oral :**
> *"TypeScript n’est pas seulement pour le front-end, il peut aussi être utilisé côté serveur. Avec Node.js et des frameworks comme Express, vous pouvez profiter des avantages du typage statique même dans vos applications backend."*

---

### **Slide 6 : Source Maps**
**Titre :** *Déboguer comme un pro avec les Source Maps*  
**Contenu :**
- **Qu’est-ce qu’un Source Map ?**
    - Fichier généré lors de la compilation TypeScript → JavaScript.
    - Permet de relier le code JavaScript compilé au code TypeScript d’origine.
- **Activation :**
    - Ajouter dans `tsconfig.json` :
      ```json
      {
        "sourceMap": true
      }
      ```  
- **Avantage :** Debugger directement le code TypeScript dans les navigateurs ou outils comme VS Code.

**Oral :**
> *"Les Source Maps sont des outils très puissants pour le débogage. Elles permettent de voir exactement quel code TypeScript correspond à une erreur dans le JavaScript compilé."*

---

### **Interaction après cette partie : Atelier (20 min)**
**Atelier : Configurer un projet TypeScript avec serveur et client**
1. **Côté serveur :**
    - Créez un projet Node.js avec `npm init`.
    - Installez TypeScript et Express avec `npm install --save-dev typescript @types/express express`.
    - Créez un fichier `server.ts` avec un serveur Express simple (voir exemple ci-dessus).
    - Compilez le fichier avec `tsc server.ts`.
    - Lancez le serveur avec `node server.js`.
    - Vérifiez l’accès à `http://localhost:3000`.

2. **Côté client :**
    - Créez un fichier `index.ts` avec un code TypeScript simple :
      ```typescript
      const message = "Hello, TypeScript!";
      document.getElementById('message')!.textContent = message;
      ```  
    - Créez un fichier `index.html` avec un élément pour afficher le message :
      ```html
      <div id="message"></div>
      <script src="index.js"></script>
      ```  
    - Compilez `index.ts` avec `tsc index.ts`.
    - Ouvrez `index.html` dans votre navigateur et vérifiez si le message s'affiche.

**Consigne :** Travaillez en petits groupes pour aider ceux qui rencontrent des difficultés.  
**Objectif :** À la fin, chaque participant doit avoir un projet TypeScript fonctionnel côté serveur (Express) et côté client (HTML/JS).

---

### **Slide 7 : Résumé de la section**
**Titre :** *Récapitulatif : Environnement et Outillage*  
**Contenu :**
- **Installation de Node.js** : nécessaire pour exécuter TypeScript et gérer les paquets.
- **TypeScript** : installation simple via npm, avec des outils comme `tsc`.
- **IDE** : VS Code ou WebStorm pour une expérience optimale.
- **Source Maps** : déboguez votre code TypeScript en toute simplicité.
- **Serveur Node.js avec TypeScript** : utilisez TypeScript pour vos projets full-stack.

**Oral :**
> *"Nous avons vu comment configurer votre environnement de développement TypeScript, que ce soit pour le front-end ou le back-end. Vous êtes maintenant prêts à lancer vos projets dans les meilleures conditions."*