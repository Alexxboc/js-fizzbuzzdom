// Seleziona il container 
const numbersElement = document.querySelector(`.row`)

// Stampa un ciclo da 1 a 100
for (let i = 1; i <= 100; i++){

// Dichiara una varibaile per il murkup
    let markup;

// Stampa i numeri divisibili sia per 3 che per 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`FizzBuzz`)
        markup = `
        <div class="col red">
        <div>fizzbuzz</div>
        </div>`
        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }

// Stampa i numeri divisibili per 3 
    else if (i % 3 == 0) {
        console.log(`Fizz`)
        markup = `
        <div class="col green">
        <div>fizz</div>
        </div>`
        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }

// Stampa i numeri divisibili per 5
    else if (i % 5 == 0) {
        console.log(`Buzz`)
        markup = `
        <div class="col yellow">
        <div>buzz</div>
        </div>`
        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }

// Stampa i numeri restanti
    else {
        console.log(i)
         markup = `
        <div class="col blue">
        <div>${i}</div>
        </div>`

        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }
    
}