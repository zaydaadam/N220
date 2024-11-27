# Personal Task Manager
# Final Project
## Github Link

[https://zaydaadam.github.io/N220/final-project](https://zaydaadam.github.io/N220/final-project)

---
### **How It Works**

1. **Login Process**:
   - The user enters a username and password.
   - If the credentials meet the validation criteria, the user is logged in and redirected to the Main Page.

2. **Main Page Features**:
   - Personalized welcome message.
   - Task management tools (add, remove, edit, mark as complete).
   - Logout functionality.

3. **Task Management**:
   - Each user can add, modify, and delete their tasks.
   - Tasks are tied to the logged-in user, ensuring task separation between users.

---
## Major Features
```md
### **Login Form**

- **DOM References**:
  - Username input: #username
  - Password input: #password
  - Login button: #loginButton
  - Error message container: #errorMessage

- **Logic**:
  - Check if the username is empty and display an error message if true.
  - Validate password:
    - Check if it is empty.
    - Check if it is less than 8 characters.
    - Check if it contains at least one uppercase letter.
    - Check if it contains at least one number.
  - If all validations pass, log in the user and load the Main Page.

- **Events**:
  - On clicking the #loginButton, validate the input fields.
  - If invalid, display appropriate error messages.
  - If valid, redirect the user to the Main Page.

---

### **Dashboard (Main Page)**

- **DOM References**:
  - Welcome message: Dynamic `<h2>` displaying "Welcome, [username]".
  - Logout button: #logoutButton
  - Task management area:
    - Task list container: #taskList
    - Add Task button: #addTaskButton
    - Task input field: #taskInput

- **Logic**:
  - Display a personalized welcome message for the logged-in user (Welcome, [username]).
  - Allow the user to log out:
    - Clear the current session (currentUser).
    - Redirect back to the login form.

- **Events**:
  - On clicking #logoutButton, reset the session and reload the login form.

---

### **Task Manipulation**

- **DOM References**:
  - Task list container: #taskList
  - Add Task button: #addTaskButton
  - Task input field: #taskInput
  - Task item controls:
    - Remove button (next to each task).
    - Edit button (next to each task).
    - Complete checkbox (to mark tasks as complete).

- **Logic**:
  - **Add Task**:
    - Clicking the "Add Task" button reveals the input field.
    - Typing a task and pressing "Enter" adds it to the current user's task list.
  - **Edit Task**:
    - Allows the user to modify the text of a task.
  - **Remove Task**:
    - Clicking "Remove" deletes the task from the user's list.
  - **Mark Task as Complete**:
    - Checking the "Complete" checkbox marks the task visually and updates its status.
  - Tasks are tied to the logged-in user and stored in a global object, ensuring each user can only see their tasks.

- **Events**:
  - Add Task:
    - Click #addTaskButton to reveal the task input.
    - Press "Enter" to add the task.
  - Remove Task:
    - Click the "Remove" button next to a task to delete it.
  - Edit Task:
    - Click "Edit" to modify the task text.
  - Complete Task:
    - Toggle the "Complete" checkbox to mark a task as complete or incomplete.

---

### **Additional Features**

- **User-Specific Tasks**:
  - Tasks are stored in a global object (userTasks) indexed by the username.
  - Only tasks belonging to the currently logged-in user are displayed.

- **Task Properties**:
  - Tasks can have additional properties, such as:
    - Completion status.
    - Category ( "Outdoor," "Indoor").
  - Users can assign or change these properties dynamically.

- **Data Management**:
  - All tasks are stored in memory during the session (userTasks object).
  - Each user's tasks persist while they are logged in.

---

