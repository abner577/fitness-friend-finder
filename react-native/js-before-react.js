const names = ["Pedro", "Jack", "Jessica"];

const names2 = names.map( (name) => {
    return name + "1";
});

const namesWithoutPedro = names.filter( (name) => {
    return name !== "Pedro";
});

console.log(names2);
console.log(namesWithoutPedro);


async function loadUser() {
  try {
    const response = await fetch("https://example.com/api/user");

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Could not load user:", error);
  }
}