(function () {

    interface NameInterface {
        name: string;
    }

    class Animal implements NameInterface {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    type NamedConstructor<T = NameInterface> = new (...args: any[]) => T;

    function CanFly<TBase extends NamedConstructor>(Base: TBase) {
        return class extends Base {
            fly() {
                console.log(`${ this.name } is flying!`);
            }
        };
    }

    const Bird = CanFly(Animal);
    const eagle = new Bird('Eagle');
    eagle.fly(); // "Eagle is flying!"


    function CanSwim<TBase extends NamedConstructor>(Base: TBase) {
        return class extends Base {
            swim() {
                console.log(`${ this.name } is swimming!`);
            }
        };
    }

    const Amphibian = CanSwim(CanFly(Animal));
    const frog = new Amphibian('Frog');
    frog.fly();  // "Frog is flying!"
    frog.swim(); // "Frog is swimming!"
})();