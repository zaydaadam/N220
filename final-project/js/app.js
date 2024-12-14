const userTasks = {}; // store tasks
const userPasswords = {}; // store password
let currentUser = null; // current user

// login
document.getElementById("loginButton").addEventListener("click", () => {
  const usernameInput = document.getElementById("usernameInput").value.trim();
  const passwordInput = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  // clear
  errorMessage.textContent = "";

  // empty field
  if (!usernameInput || !passwordInput) {
    errorMessage.textContent = "username and password cannot be empty.";
    return;
  }

  // check if user exist
  if (userTasks[usernameInput]) {
    // check password
    if (userPasswords[usernameInput] !== passwordInput) {
      errorMessage.textContent = "incorrect password. please try again.";
      return;
    }
  } else {
    // new user
    if (
      passwordInput.length < 8 ||
      !/[A-Z]/.test(passwordInput) ||
      !/[0-9]/.test(passwordInput)
    ) {
      errorMessage.textContent =
        "password must be at least 8 characters, include an uppercase letter, and a number.";
      return;
    }

    //save username and password
    userTasks[usernameInput] = [];
    userPasswords[usernameInput] = passwordInput;
  }

  // switch to dashboard
  currentUser = usernameInput;
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("dashboardSection").style.display = "block";
  document.getElementById("currentUser").textContent = usernameInput;
  renderTasks();
});

// logout
document.getElementById("logoutButton").addEventListener("click", () => {
  currentUser = null;
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("dashboardSection").style.display = "none";

  //clear inputs
  document.getElementById("loginForm").reset();
});

// add task
document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskDescription = prompt("Enter a new task:").trim();

  if (taskDescription) {
    userTasks[currentUser].push({
      description: taskDescription,
      completed: false,
      category: "Uncategorized",
    });
    renderTasks();
  }
});

// display task
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // generate tasks
  const taskHTML = userTasks[currentUser]
    .map((task, taskIndex) => {
      return `
        <li>
          <h4 style="text-decoration: ${
            task.completed ? "line-through" : "none"
          };" onclick="toggleTask(${taskIndex})">
            ${task.description} (${task.category})
          </h4>
          <button onclick="removeTask(${taskIndex})">Remove</button>
          <button onclick="editTask(${taskIndex})">Edit</button>
          <select onchange="updateCategory(${taskIndex}, event)">
            ${["Uncategorized", "Home", "Work", "Personal"]
              .map(
                (category) =>
                  `<option value="${category}" ${
                    task.category === category ? "selected" : ""
                  }>${category}</option>`
              )
              .join("")}
          </select>
        </li>`;
    })
    .join("");

  taskList.innerHTML = taskHTML;
}

// complete
function toggleTask(taskIndex) {
  userTasks[currentUser][taskIndex].completed =
    !userTasks[currentUser][taskIndex].completed;
  renderTasks();
}

// remove task
function removeTask(taskIndex) {
  userTasks[currentUser].splice(taskIndex, 1);
  renderTasks();
}

// change description
function editTask(taskIndex) {
  const newTaskDescription = prompt(
    "Edit the task:",
    userTasks[currentUser][taskIndex].description
  );
  if (newTaskDescription) {
    userTasks[currentUser][taskIndex].description = newTaskDescription;
    renderTasks();
  }
}

// update category
function updateCategory(taskIndex, event) {
  userTasks[currentUser][taskIndex].category = event.target.value;
  renderTasks();
}
