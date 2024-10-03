var students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
];
var output = [];
for(var i =0; i<students.length; i++){
    var marks = students[i].subject1Marks + students[i].subject2Marks + students[i].subject3Marks
    output.push(marks);

};
console.log(output);