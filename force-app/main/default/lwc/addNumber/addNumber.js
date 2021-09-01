import { LightningElement,track } from 'lwc';

export default class AddNumber extends LightningElement {
    
    @track firstnumber;
    @track secondNumber;
    @track resultValue;

    handleNumberOneChange(event){
        this.firstnumber = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    addition(){
        this.resultValue = (this.firstNumber) + (this.secondNumber);
    }
    multification() {
        this.resultValue = this.firstNumber * this.secondNumber;
    }
    subtraction() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
    division() {
        this.resultValue = this.firstNumber / this.secondNumber;
    }
}