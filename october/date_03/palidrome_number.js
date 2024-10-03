var Name = "madam";
var dum = Name;
var emp = "";
for(var i=1; i<=Name.length; i++){
    emp  = emp + Name[Name.length -i];

}
if (dum == emp){
    console.log("this is palimdrome");
}
else{
    console.log("this is not palidrome");
}


