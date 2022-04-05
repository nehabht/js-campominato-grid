/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
 in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/



let limit = 0


// cambia il valore di limit in base all'option del livello selezionato
// seleziona form dom


let formElement = document.querySelector("form")

let generate_grid = document.querySelector("button")

formElement.addEventListener("submit", function (event) {
    event.preventDefault()
    


    function levelchangeF(){
        
    
        let levelElement = document.getElementById("level").value;

    
        if (levelElement === "1"){
            limit = 100
            console.log('easy')
            generateGrid('.cells', 'div', 'cell', limit)
            generateNumbers(limit)
            selectElements('.cell')
            
        }else if (levelElement === "2"){
            limit = 81
            console.log('e')
            generateGrid('.cells', 'div', 'cell', limit)
            generateNumbers(limit)
            selectElements('.cell')
            
        }else if (levelElement === "3"){
            limit = 49
            console.log('d')
            generateGrid('.cells', 'div', 'cell', limit)
            generateNumbers(limit)
            selectElements('.cell')
            

        }
    
        return
    }

    const levelChange = levelchangeF()




})








// genero una griglia

function generateGrid(selector, tag_name, class_name, limit) {
    const cellsElement = document.querySelector(selector)
  
    for (let i = 1; i <= limit; i++) {
      const cellItem = document.createElement(tag_name);
      cellItem.classList.add(class_name)
      cellsElement.append(cellItem)
    }
  
}


// grigial easy level

// generateGrid('.cells', 'div', 'cell', limit)


// genero i numeri da 1 a 100 per easy level

function generateNumbers(limit){
    const orderNumberList = []

    for (let i = 1; i<=limit; i++){
        orderNumberList.push(i)
        
    }

    return orderNumberList;
    
}

// console.log(generateNumbers(limit));


// appendere i numeri generati nella dom ovvero nelle singole celle


function selectElements(selector){
    const cells = document.querySelectorAll(selector);
    const numbers = generateNumbers(limit)
    

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        
        // appendi il numero generato alla cella 
        const spanElement = document.createElement('span')
        spanElement.append(numbers[i])
        cell.append(spanElement)


         // cambia colore della cella al click
        cell.addEventListener('click', function () {
            this.classList.add('active_blu');
        
        })
    }

    return
}

// selectElements('.cell')






