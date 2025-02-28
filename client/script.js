// Get DOM HTML Elements
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
// Fetch all todos when page loads
async function fetchTodos() {
// add your code
let x = [];
fetch(`/api/todo`)
.then((response) => response.json())
.then((data) => {
    x = data
});
console.log(x);
}

// Display todos in the list
function displayTodos(todos) {
// add your code
}

// Handle form submission
todoForm.addEventListener('submit', async (e) => {
// add your code  
});

// Load todos when page loads
fetchTodos();




