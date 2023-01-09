class Calculator {
   constructor(currentOperandTextElement) {
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
   }

   clear() {
      this.currentOperand = ''
      this.operation = undefined
   }

   delete() {

   }

   appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return 
      this.currentOperand = this.currentOperand.toString() + number.toString()
   }


   chooseOperation(operation) {
      this.operation = operation
      this.currentOperand = ''
   }

   compute() {

   }

   updateDisplay() {
      this.currentOperandTextElement.innerText = this.currentOperand
   }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-result]')
const resetButton = document.querySelector('[data-reset]')
const deleteButton = document.querySelector('[data-delete]')

const currentOperandTextElement = document.querySelector('[screen]')

const calculator = new Calculator(currentOperandTextElement)

numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
   })
})

operationButtons.forEach(button => {
   button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
   })
})