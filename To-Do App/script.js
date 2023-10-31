let inputBox = document.getElementById("input-box");
let myList = document.getElementById("my-list");

function addTask() {
  if (inputBox.value === '') {
    alert("You must type somthing on the inputbox!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    myList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}


myList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove() ;
    saveData();
  }
}, false);


function saveData(){
  localStorage.setItem("data", myList.innerHTML);
}

function showTask(){
  myList.innerHTML= localStorage.getItem("data");
}

showTasks();