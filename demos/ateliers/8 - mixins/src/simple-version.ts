(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    function CanFly<TBase extends new (...args: any[]) => {}>(Base: TBase) {
        return class extends Base {
            fly() {
                console.log(`I’m flying!`);
            }
        };
    }

    const Bird = CanFly(Animal);
    const eagle = new Bird('Eagle');
    eagle.fly(); // "I’m flying!"


    function CanSwim<TBase extends new (...args: any[]) => {}>(Base: TBase) {
        return class extends Base {
            swim() {
                console.log(`I’m swimming!`);
            }
        };
    }

    const Amphibian = CanSwim(CanFly(Animal));
    const frog = new Amphibian('Frog');
    frog.fly();  // "I’m flying!"
    frog.swim(); // "I’m swimming!"
})();