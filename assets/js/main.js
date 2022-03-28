// Seleziona il container 
const numbersElement = document.querySelector(`.container`)

// Crea 100 quadrati con testo
for (let i = 1; i <= 100; i++){
    console.log(i);
    const markupLi = `
    <div class="square">
    <div>${i}</>
    </div>`

    numbersElement.insertAdjacentHTML
    (`beforeend`, markupLi)
}