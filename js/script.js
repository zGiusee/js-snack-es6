//****************************
//     INIZIO SNACK 2
//****************************

// FUNZIONI

// Creo la funzione che generi numeri randomici
function rng(){
    let rngNumber = Math.floor(Math.random()  * 100 + 1)

    return rngNumber;
}

// Class correction funzione randomica generale
function rngGeneral(min, max){
    let rngNumber = Math.floor(Math.random()  * (max - min + 1)) + min;

    return rngNumberGeneral;
}

// FINE FUNZIONI

// Creo l'array di squadre di calcio con i rispettivi valori
const teams = [

    {
        name : 'Internazionale Milano F.C.',
        punti : 0,
        falliSubiti : 0
    },
    {
        name : 'A.C. Milan',
        punti : 0,
        falliSubiti : 0
    },
    {
        name : 'Juventus F.C.',
        punti : 0,
        falliSubiti : 0
    },
    {
        name : 'Real Madrid C.d.F.',
        punti : 0,
        falliSubiti : 0
    },
    {
        name : 'F.C. Barcelona',
        punti : 0,
        falliSubiti : 0
    },
];

// Ciclo l'array per dare un valore agli elementi usando la funzione dei numeri randomici
teams.forEach((elem) =>{
    
    elem.punti = rng();
    elem.falliSubiti = rng();

    // Class correcction
    // elem.punti = rngGeneral(1, 120);
    // elem.falliSubiti = rngGeneral(300, 650);

});

// Effettuo il controllo
console.log(teams)

// Definisco un array usando come chiavi solo i nomi e i falli subiti
let namesAndFouls = [ ];

// Ciclo l'array e prendo solo le info che mi servono per poi pusharli dentro l'array precedentemente definito
teams.forEach((elem) =>{

    let { name, falliSubiti } = elem;

    // VERSIONE CON L'ARRAY
    // namesAndFouls.push(name);
    // namesAndFouls.push(falliSubiti);

    // VERSIONE CON GLI OGGETTI
    let obj = {
        name,
        falliSubiti,
    }

    namesAndFouls.push(obj);
});

// Controllo che sia stato eseguito tutto correttamente
console.log(namesAndFouls)


//****************************
//     FINE SNACK 2
//****************************





//****************************
//     INIZIO SNACK 1
//****************************


// Creo l'array delle bici
const bicycles = [

    {
        bicycleName : 'Colnago',
        weight : 5.3
    },
    {
        bicycleName : 'Van Rysel',
        weight : 10.2
    },
    {
        bicycleName : 'Triban',
        weight : 3.6
    },
    {
        bicycleName : 'Cannondale',
        weight : 7
    },
    {
        bicycleName : 'Trek',
        weight : 4.3
    },
];

// Faccio in modo di creare un confronto tra la variabile lighterBicycle e una delle mie bici in questo caso la 0
// che poi andro a ciclare per farla confrontare con tutte le altre
let lighterBicycle = bicycles[0];

bicycles.forEach((elem) => {

    if(elem.weight < lighterBicycle.weight){
        lighterBicycle = elem;
    }

});

console.log(lighterBicycle)

// Class Correcction

// let { bicycleName, weight} = lighterBicycle;
// console.log(`la bici col peso minore è ${bicycleName} con un peso di ${weight}kg`)

// Eseguo un altro ciclo usando la destrutturazione stampandolo in console
bicycles.forEach((elem) => {

    if(lighterBicycle == elem.weight){
        let { bicycleName, weight} = elem;
        console.log(`la bici col peso minore è ${bicycleName} con un peso di ${weight}kg`)
    }

});

// DEFINISCO LA STESSA FUNZIONALITA PERò CON UN CICLO FOR
// let lighterBicycle = bicycles[0];

// for(let i = 1; i < bicycles.length; i++){

//     if(bicycles[i].weight < lighterBicycle.weight){

//         lighterBicycle = bicycles[i];

//         console.log(lighterBicycle)
//     }

// }

// let {bicycleName, weight} = lighterBicycle

// console.log(bicycleName);
// console.log(weight);


console.log(lighterBicycle)


//****************************
//     FINE SNACK 1
//****************************





//****************************
//     INIZIO SNACK 3
//****************************

// FUNZIONI

// Creo la funzione che generi una lettera dell'alfabeto casuale 
function randomLetter(){

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let letter = Math.floor(Math.random() * alphabet.length);

    return alphabet[letter];
}

// FINE FUNZIONI


// Creo l'array degli oggetti
const items = [

    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'Scarpe',
        color: 'Black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    },
];

// Ciclo gli oggetti con la funzione map per poi crearne uno nuovo ma aggiungendo il parametro 'letter'
const newItems = items.map((elem) => {

    // Definisco la variabile che sfruttera la funzione della lettera casuale
    let rngLetter = randomLetter()

    // Versione con spread
    const obj = {...elem, position: rngLetter}
    
    // Creo l'oggetto con l'aggiunta della lettera
    // let { name, type, color } = elem;

    // let obj = {
    //     name,
    //     type,
    //     color,
    //     letter: rngLetter,
    // }

    return obj;
})

console.log(newItems)

//****************************
//     FINE SNACK 3
//****************************


