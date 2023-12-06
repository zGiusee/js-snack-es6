//****************************
//     INIZIO SNACK 2
//****************************

// FUNZIONI

// Creo la funzione che generi numeri randomici
function rng(){
    let rngNumber = Math.floor(Math.random()  * 100 + 1)

    return rngNumber;
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
let lighterBicycle = bicycles[0].weight;

bicycles.forEach((elem) => {

    if(elem.weight < lighterBicycle){
        lighterBicycle = elem.weight;
    }
    
    console.log(lighterBicycle)

});

// Eseguo un altro ciclo usando la destrutturazione stampandolo in console
bicycles.forEach((elem) => {

    if(lighterBicycle == elem.weight){
        let { bicycleName, weight} = elem;
        console.log(`la bici col peso minore è ${bicycleName} con un peso di ${weight}kg`)
    }

});


// for(let i = 0; i < bicycles.length; i++){

//     if(bicycles[i].weight < lighterBicycle){

//         lighterBicycle = bicycles[i].weight;

//         console.log(lighterBicycle)
//     }

//     // let { bicycleName, weight} = 

// }
// console.log(lighterBicycle)


//****************************
//     FINE SNACK 1
//****************************



//****************************
//     INIZIO SNACK 3
//****************************

// FUNZIONI

// Creo la funzione che generi una lettera dell'alfabeto casuale 
function randomLetter(){

    const letters = 'abcdefghijklmnopqrstuvwxyz';

    let letter = Math.floor(Math.random() * letters.length);

    return letters[letter];
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


let rngLetter = console.log(randomLetter())

const newItems = items.map((elem) => {

    
    // let { name, type, color } = elem;

    let obj = {
        name: elem.name,
        type: elem.type,
        color: elem.color,
        letter: rngLetter,
        
    }

    return obj;

})

console.log(newItems)



//****************************
//     FINE SNACK 3
//****************************


