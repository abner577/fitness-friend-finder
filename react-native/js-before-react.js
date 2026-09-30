const names = ["Pedro", "Jack", "Jessica"];

const names2 = names.map( (name) => {
    return name + "1";
});

const namesWithoutPedro = names.filter( (name) => {
    return name !== "Pedro";
});

console.log(names2);
console.log(namesWithoutPedro);