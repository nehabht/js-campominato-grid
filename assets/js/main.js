
// fare in modo che generi le 100 celle del livello easy

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

generateGrid('.cells', 'div', 'cell', 100)


// genero i numeri da 1 a 100 per easy level
const orderNumberList = []

function generateNumbers(limit){

    for (let i = 1; i<=limit; i++){
        orderNumberList.push(i)
        
    }
    console.log(orderNumberList) 
}

generateNumbers(100);


// appendere i numeri generati nella dom ovvero nelle singole celle


function selectElements(selector){
    const cells = document.querySelectorAll(selector);
    console.log(cells)
    const numbers = generateNumbers()

    for (let i = 0; i <= cells.length; i++) {
        const cell = cells[i]
        
        // appendi il numero generato alla cella 
        const spanElement = document.createElement('span')
        spanElement.append(numbers[i])
        
        cell.append(spanElement)
        console.log(spanElement)
       
    }

}

selectElements('.cell')




