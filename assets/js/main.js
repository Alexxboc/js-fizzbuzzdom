// Seleziona il container 
const numbersElement = document.querySelector(`.container`)

// Stampa un ciclo da 1 a 100
for (let i = 1; i <= 100; i++){

// Dichiara una varibaile per il murkup
    let markup;

// Stampa i numeri divisibili sia per 3 che per 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`FizzBuzz`)
        markup = `
        <div class="square red">
        <div>fizzbuzz</>
        </div>`
        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }

// Stampa i numeri divisibili per 3 
    else if (i % 3 == 0) {
        console.log(`Fizz`)
        markup = `
        <div class="square green">
        <div>fizz</>
        </div>`
        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }

// Stampa i numeri divisibili per 5
    else if (i % 5 == 0) {
        console.log(`Buzz`)
        markup = `
        <div class="square yellow">
        <div>buzz</>
        </div>`
        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }

// Stampa i numeri restanti
    else {
        console.log(i)
         markup = `
        <div class="square blue">
        <div>${i}</>
        </div>`

        numbersElement.insertAdjacentHTML
        (`beforeend`, markup)
    }
    
}