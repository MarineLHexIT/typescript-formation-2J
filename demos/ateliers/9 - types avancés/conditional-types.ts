interface User {
    name: string;
    age: number;
}

interface WithOptionalEmail {
    name: string;
    email?: string;
}

interface Company {
    name: string;
    siret?: string;
}

type WithEmail<T> = T extends { email: string, name: string } ? T : T & WithOptionalEmail;

function processUser<T>(withEmail: WithEmail<T>) {
    if (withEmail.email) {
        console.log(`${withEmail.name} email: `, withEmail.email);
    } else {
        console.log(`${withEmail.name} doesn't have an email`);
    }
}

const userWithEmail: User & WithOptionalEmail = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const userWithoutEmail: User = {
    name: "Bob",
    age: 25
};

const company: Company = {
    name: "BAO",
}

processUser(userWithEmail);
processUser(userWithoutEmail);
processUser(company);