// SNACK 2

// Creo la funzione che generi numeri randomici
function rng(){
    let rngNumber = Math.floor(Math.random()  * 100 + 1)

    return rngNumber;
}

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

console.log(teams)

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

    // VERSIONE CON L'ARRAY
    let { name, falliSubiti } = elem;

    namesAndFouls.push(name);
    namesAndFouls.push(falliSubiti);

    // VERSIONE CON GLI OGGETTI
    // let obj = {
    //     name,
    //     falliSubiti,
    // }

    // namesAndFouls.push(obj);
});

// Controllo che sia stato eseguito tutto correttamente
console.log(namesAndFouls)

