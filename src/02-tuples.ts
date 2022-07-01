// array inferido
const prices: (number | string)[] = [1,2,3,4,'a'];

// tupla
let user: [string, number, boolean] = ['amepablo', 15, true];

    // Declaración y asignación de una tupla
    let userA: [string, number];
        userA = ['amepablo', 15];

// user = [];
// user = ['amepablo'];
// user = ['amepablo', 12];
// user = ['amepablo', 12, 12];


// Destucturación en una tupla
user = ['amepablo', 38, true];
const [username, age] = user
console.log(username);
console.log(age);

// El uso de tuplas se encuentra en los usestate de hooks de React
