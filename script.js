// variable declare
let isSidebarOpen = false;
const todo = document.getElementById("input")


let todoText = ""

todo.addEventListener("change",(event) => {
  console.log(event.target.value);
  todoText = event.target.value
  
  
})

// getting elements from html
const sidePanel = document.getElementById("sidepanel");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");



// all functions
const toggleSideBar = () => {
  isSidebarOpen = !isSidebarOpen;

  if (isSidebarOpen) {
    sidePanel.classList.add("show");
    overlay.classList.add("show");
    hamburger.classList.add("active");
  } else {
    sidePanel.classList.remove("show");
    overlay.classList.remove("show");
    hamburger.classList.remove("active");
  }
};



// event listners
hamburger.addEventListener("click", toggleSideBar);

