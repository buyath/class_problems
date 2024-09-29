var students = [
    { name: "Amar", grade: 'A' },
    { name: "Akbar", grade: 'B' },
    { name: "Anthony", grade: 'A'},
];
var names = [];
for(var i =0; i<students.length; i++){
    if(students[i].grade == 'A'){
        names.push(students[i].name);
    }
}
console.log(names);



