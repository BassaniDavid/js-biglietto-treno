const nameSurname = "nome cognome "

const totalKm = "100"

const costKm = 0.21

const age = "165"


if (age < 18 ){
    let totalCost = (totalKm * costKm) / 100 * 80
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost + " €")
} 
else if ( age > 65 ){
    let totalCost = (totalKm * costKm) / 100 * 60
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost + " €")
}
else{
    let totalCost = (totalKm * costKm)
    console.log(nameSurname + " il costo del tuo biglietto è " + totalCost + " €")
}
