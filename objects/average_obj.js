const student = {
    Name : "mohamed mohideen thayub",
    marks : [100,55,67,50,70],
    address:{streetname: "south thaikk street",district : "Tirunelveli"},
    age:20,
    average: function (){
        let result = 0
        for(var i =0 ;i<this.marks.length; i++){
            result  += this.marks[i];
        }
        let average =Math.floor(result / this.marks.length);
        console.log(average);
    }
}

student.average();

console.log(student.address.streetname)