const student = {
    Name :"mohamed mohideen thayub",
    class : "section -B",
    subject: "computer science",
    roll_no : 21,
    details: function(){
        console.log(`${this.Name},${this.class},${this.subject},${this.roll_no}`);
    }
}

student.details();
