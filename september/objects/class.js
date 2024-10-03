class calculator{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(num1,num2){
        return this.num1 + this.num2;
    }
    subtraction(num1,num2){
        return this.num1 - this.num2;
    }
    multiplication(num1,num2){
        return this.num1 * this.num2;
    }
    divition(num1,num2){
        return this.num1 / this.num2;

    }
}
obj1 =new calculator(12,32);
console.log(obj1.addition());