console.log("il codice darà NaN finchè non si inseriranno i campi")

const nameSurname = "nome cognome"

const totalKm = "numero km"

const costKm = 0.21

const age = "età"


if (age < 18 ){
    let totalCost = (totalKm * costKm) / 100 * 80
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
} 
else if ( age > 65 ){
    let totalCost = (totalKm * costKm) / 100 * 60
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
}
else{
    let totalCost = (totalKm * costKm)
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
}
