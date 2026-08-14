// variables
let isSidebarOpen = false;
let task = "";
let date = "";
let time = "";
let category = "";

// getting html elements

const sidePanel = document.getElementById("sidepanel");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const taskInput = document.getElementById("input");
const timeInput = document.getElementById("time");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("Category");
const taskList = document.getElementById("taskListVeiw");

// functions

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

addTodo = (addtask) => {
  taskList.innerHTML = `<li class="lst" id="lst">
  <div>
  <span style="font-size: 20px;" id="task"><b>Task</b></span>
  <span style="font-size: 20px;">:</span>
  <span style="font-size: 20px;"><b>${task}</b></span>
  </div>
  <div>
  <span>Date</span>
  <span>:</span>
  <span>${date}</span>
  </div>
  <div>
  <span>Time</span>
          <span>:</span>
          <span>${time}</span>
        </div>
        <div>
          <span>Category</span>
          <span>:</span>
          <span>${category}</span>
        </div>
      </li>`;
};
// eventlistners

hamburger.addEventListener("click", toggleSideBar);

taskInput.addEventListener("change", (event) => {
  console.log(event.target.value);
  task = event.target.value;
});
timeInput.addEventListener("change", (event) => {
  time = event.target.value;
});
dateInput.addEventListener("change", (event) => {
  date = event.target.value;
});
categoryInput.addEventListener("change", (event) => {
  category = event.target.value;
});
