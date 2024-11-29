const printMe = (): void => {
    const div = document.getElementById("printMe");
    if (div) {
        div.innerText = "Hello World";
    }
};