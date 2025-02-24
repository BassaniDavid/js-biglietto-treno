const nameSurname = "nome cognome"

const nameSurname2 = "nome cognome"

if(nameSurname === nameSurname2){
    alert("per favore, inserisci il tuo nome e cognome")

}

const totalKm = "numero km"

const costKm = 0.21

const age = "età"

if (isNaN(totalKm)){
    alert("per favore, inserisci un numero di km valido")
}
if (isNaN(age)){
    alert("per favore, inserisci un età valida")
}

if (age < 18 ){
    let totalCost = (totalKm * costKm) / 100 * 80
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    alert(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
} 
else if ( age > 65 ){
    let totalCost = (totalKm * costKm) / 100 * 60
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    alert(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
}
else{
    let totalCost = (totalKm * costKm)
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    alert(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
}
