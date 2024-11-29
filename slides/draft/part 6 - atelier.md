## **Atelier 1 : Gestion Simplifiée de Bibliothèque (20-30 minutes)**

### **Objectifs**
1. Manipuler des **types**, **enums**, et **tuples**.
2. Créer et utiliser une classe avec des méthodes simples.
3. Écrire des tests pour vérifier les fonctionnalités.

---

### **Instructions**
1. **Créer une classe `Library`** :
    - Ajoutez une propriété `books` (un tableau contenant des objets `Book`).

2. **Créer un type `Book`** :
    - Le type doit inclure :
        - `title: string`
        - `author: string`
        - `year: number`
        - `status: BookStatus`

3. **Créer un enum `BookStatus`** :
    - Les valeurs possibles sont : `Available` et `CheckedOut`.

4. **Ajouter des méthodes dans la classe `Library`** :
    - `addBook(book: Book): void` : ajoute un livre.
    - `findBook(title: string): Book | undefined` : retourne un livre selon son titre.

5. **Créer une fonction utilitaire** :
    - `formatBook(book: Book): [string, string, number]` : retourne un tuple avec le titre, l’auteur et l’année.

---

### **Pistes pour guider les apprenants**
- **Étape 1 : Type et enum**  
  Demandez-leur pourquoi utiliser un enum pour le statut, au lieu d’un type simple comme `string`.
- **Étape 2 : Classe**  
  Discutez des avantages d’encapsuler la logique dans une classe.
- **Étape 3 : Tuples**  
  Montrez comment un tuple garantit un format strict.

---

### **Questions facultatives**
- **Tests :**
    - Comment tester que `findBook` retourne bien `undefined` si le titre n’existe pas ?
    - Pouvez-vous tester le format retourné par `formatBook` ?

### **Instructions de test**
1. **Test de l’ajout de livres.**
    - Vérifiez que la méthode `addBook` ajoute correctement un livre à la bibliothèque.

2. **Test de la recherche de livres.**
    - Vérifiez que `findBook` retourne le bon livre lorsque le titre correspond.

3. **Test des tuples.**
    - Vérifiez que la fonction `formatBook` retourne bien un tableau contenant le titre, l’auteur et l’année.
---

### **Correction**

#### **Code**
```typescript
enum BookStatus {
  Available = "Available",
  CheckedOut = "CheckedOut",
}

type Book = {
  title: string;
  author: string;
  year: number;
  status: BookStatus;
};

class Library {
  books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  findBook(title: string): Book | undefined {
    return this.books.find(book => book.title === title);
  }
}

function formatBook(book: Book): [string, string, number] {
  return [book.title, book.author, book.year];
}
```

#### **Tests**
```typescript
import { Library, Book, BookStatus, formatBook } from './library';

describe('Library', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  test('should add a book to the library', () => {
    const book: Book = { title: "1984", author: "George Orwell", year: 1949, status: BookStatus.Available };
    library.addBook(book);

    expect(library.books).toContainEqual(book);
  });

  test('should find a book by title', () => {
    const book: Book = { title: "1984", author: "George Orwell", year: 1949, status: BookStatus.Available };
    library.addBook(book);

    const foundBook = library.findBook("1984");
    expect(foundBook).toEqual(book);
  });

  test('should format book details as a tuple', () => {
    const book: Book = { title: "1984", author: "George Orwell", year: 1949, status: BookStatus.Available };
    const formatted = formatBook(book);

    expect(formatted).toEqual(["1984", "George Orwell", 1949]);
  });
});
```

---

## **Atelier 2 : Gestion Avancée de Bibliothèque (1 heure)**

### **Objectifs**
1. Approfondir l’utilisation des **génériques**.
2. Manipuler des méthodes plus complexes dans une classe.
3. Écrire des tests plus complets, y compris pour les cas limites.

---

### **Instructions**
1. **Étendre la classe `Library`** :
    - Ajoutez les méthodes suivantes :
        - `borrowBook(title: string, borrower: string): void`
        - `returnBook(title: string): void`

2. **Modifier le type `Book`** :
    - Ajoutez un champ `borrower?: string`.

3. **Créer une fonction générique `sortItems`** :
    - La fonction doit accepter un tableau de type `T` et une clé `keyof T`, et trier les éléments selon cette clé.

---

### **Pistes pour guider les apprenants**
- **Étape 1 : Génériques**  
  Expliquez pourquoi une fonction générique est utile pour éviter de créer une fonction spécifique à chaque type.
- **Étape 2 : Cas limites**  
  Encouragez-les à tester des cas comme tenter d’emprunter un livre déjà emprunté.

---

### **Questions facultatives**
1. **Test des méthodes `borrowBook` et `returnBook`.**
    - Vérifiez que `borrowBook` modifie correctement le statut et ajoute l’emprunteur.
    - Vérifiez que `returnBook` réinitialise le statut et supprime l’emprunteur.

2. **Test de la fonction générique `sortItems`.**
    - Vérifiez que les livres sont triés correctement en fonction de la clé donnée (`keyof T`).

---

### **Correction**

#### **Code**
```typescript
class Library {
  books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  findBook(title: string): Book | undefined {
    return this.books.find(book => book.title === title);
  }

  borrowBook(title: string, borrower: string): void {
    const book = this.findBook(title);
    if (book && book.status === BookStatus.Available) {
      book.status = BookStatus.CheckedOut;
      book.borrower = borrower;
    }
  }

  returnBook(title: string): void {
    const book = this.findBook(title);
    if (book && book.status === BookStatus.CheckedOut) {
      book.status = BookStatus.Available;
      delete book.borrower;
    }
  }
}

function sortItems<T>(items: T[], key: keyof T): T[] {
  return [...items].sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
}
```

#### **Tests**
```typescript
import { Library, Book, BookStatus, sortItems } from './library';

describe('Advanced Library', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  test('should borrow a book', () => {
    const book: Book = { title: "1984", author: "George Orwell", year: 1949, status: BookStatus.Available };
    library.addBook(book);

    library.borrowBook("1984", "Alice");
    const borrowedBook = library.findBook("1984");

    expect(borrowedBook?.status).toBe(BookStatus.CheckedOut);
    expect(borrowedBook?.borrower).toBe("Alice");
  });

  test('should return a book', () => {
    const book: Book = { title: "1984", author: "George Orwell", year: 1949, status: BookStatus.Available };
    library.addBook(book);

    library.borrowBook("1984", "Alice");
    library.returnBook("1984");
    const returnedBook = library.findBook("1984");

    expect(returnedBook?.status).toBe(BookStatus.Available);
    expect(returnedBook?.borrower).toBeUndefined();
  });

  test('should sort books by year', () => {
    const book1: Book = { title: "1984", author: "George Orwell", year: 1949, status: BookStatus.Available };
    const book2: Book = { title: "Brave New World", author: "Aldous Huxley", year: 1932, status: BookStatus.Available };
    library.addBook(book1);
    library.addBook(book2);

    const sortedBooks = sortItems(library.books, 'year');
    expect(sortedBooks[0].year).toBe(1932);
    expect(sortedBooks[1].year).toBe(1949);
  });
});
```

---

### **Déroulé Étape par Étape pour les apprenants en difficulté**
1. **Écrire le type `Book` et l’enum `BookStatus`.**  
   Commencez par les définitions simples, puis ajoutez progressivement des champs comme `borrower`.
2. **Créer la méthode `borrowBook`.**  
   Testez avec des logs si la méthode fonctionne avant d’écrire un test Jest.
3. **Créer la fonction `sortItems`.**  
   Utilisez d’abord un tableau simple (par exemple, des nombres) pour comprendre le fonctionnement de `keyof`.
4. **Configuration de Jest :** Vérifiez que tout le monde a Jest correctement installé et configuré. Fournissez des fichiers `jest.config.ts` ou `package.json` si besoin.
5. **Écrire des tests simples en pair programming :** Guidez les apprenants sur les premiers tests (`addBook` ou `borrowBook`).
6. **Tester les cas limites :**
    - Livre déjà emprunté : tester que `borrowBook` ne permet pas de réemprunter un livre déjà prêté.
    - Titre inexistant : tester que `findBook` ou `borrowBook` retourne bien `undefined` ou ne plante pas.