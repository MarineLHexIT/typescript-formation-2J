function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Accès à ${key}: ${descriptor.value}`);
}

class Example {

    @Log
    prop: string = "Hello";
}

const example = new Example();
example.prop = "World";