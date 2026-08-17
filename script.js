// variables
let isSidebarOpen = false;
let task = "";
let date = "";
let time = "";
let category = "";

let taskListArray = [];

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

addTodo = () => {
  taskListArray.push({
    task: task,
    date: date,
    time: time,
    category: category,
  });

  console.log(taskListArray);

  taskList.innerHTML = taskListArray.map((todo) => {
    return `<li class="lst" id="lst">
   <div>
   <span style="font-size: 20px;" id="task"><b>Task</b></span>
   <span style="font-size: 20px;">:</span>
   <span style="font-size: 20px;"><b>${todo.task}</b></span>
   </div>
   <div>
   <span>Date</span>
   <span>:</span>
   <span>${todo.date}</span>
   </div>
   <div>
   <span>Time</span>
           <span>:</span>
           <span>${todo.time}</span>
         </div>
         <div>
           <span>Category</span>
           <span>:</span>
           <span>${category}</span>
         </div>
       </li>`;
  });

  // taskList.innerHTML = `<li class="lst" id="lst">
  // <div>
  // <span style="font-size: 20px;" id="task"><b>Task</b></span>
  // <span style="font-size: 20px;">:</span>
  // <span style="font-size: 20px;"><b>${task}</b></span>
  // </div>
  // <div>
  // <span>Date</span>
  // <span>:</span>
  // <span>${date}</span>
  // </div>
  // <div>
  // <span>Time</span>
  //         <span>:</span>
  //         <span>${time}</span>
  //       </div>
  //       <div>
  //         <span>Category</span>
  //         <span>:</span>
  //         <span>${category}</span>
  //       </div>
  //     </li>`;
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

// Code By Jayesh

const arrayDummy = [
  {
    task: "Task 1",
    date: "2024-06-01",
    time: "10:00",
    category: "Work",
  },
  {
    task: "Task 1",
    date: "2024-06-01",
    time: "10:00",
    category: "Work",
  },
  {
    task: "Task 1",
    date: "2024-06-01",
    time: "10:00",
    category: "Work",
  },
  {
    task: "Task 1",
    date: "2024-06-01",
    time: "10:00",
    category: "Work",
  },
  {
    task: "Task 1",
    date: "2024-06-01",
    time: "10:00",
    category: "Work",
  },
];
