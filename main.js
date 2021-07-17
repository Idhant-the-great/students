students=[];
function submit()
{
var name_1= document.getElementById("span1").value;
var name_2= document.getElementById("span2").value;
var name_3= document.getElementById("span3").value;
var name_4= document.getElementById("span4").value;

students.push(name_1);
students.push(name_2);
students.push(name_3);
students.push(name_4);

console.log(students);

document.getElementById("display_name").innerHTML=students;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
students.sort();
console.log(students);
document.getElementById("display_name").innerHTML=students;
}
