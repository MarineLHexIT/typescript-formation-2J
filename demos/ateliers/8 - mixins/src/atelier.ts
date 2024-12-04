interface NameInterface {
    name: string;
}

type NameBase<T = NameInterface> = new (...args: any[]) => T;

class Person implements NameInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function CanSpeak<TBase extends NameBase>(Base: TBase) {
    return class extends Base {
        speak() {
            console.log(`${ this.name } is speaking.`);
        }
    };
}

function CanDrive<TBase extends NameBase>(Base: TBase) {
    return class extends Base {
        drive() {
            console.log(`${ this.name } is driving.`);
        }
    };
}

export const MultiTalentedPerson = CanDrive(CanSpeak(Person));
export const john = new MultiTalentedPerson('John');
john.speak();  // "John is speaking."
john.drive();  // "John is driving."

