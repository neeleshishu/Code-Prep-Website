console.log("hello console");
document.getElementById('rollno').style.display = 'none';
document.getElementById('college').style.display = 'none';

let jecian = document.getElementById('jecian');
let notjecian = document.getElementById('notjecian');

jecian.addEventListener('click',()=>{
  console.log("clicked on jecian");
  document.getElementById('rollno').style.display = 'block';
  document.getElementById('college').style.display = 'none';
})

notjecian.addEventListener('click',()=>{
  console.log("clicked on not A jecian");
  document.getElementById('rollno').style.display = 'none';
  document.getElementById('college').style.display = 'block';
}) 