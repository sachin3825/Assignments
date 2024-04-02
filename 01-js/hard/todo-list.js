/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []; // Initialize an empty array to hold todos
  }

  // Adds a todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Removes a todo from the list by index
  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1); // Remove the item at the specified index
    }
  }

  // Updates a todo at the given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo; // Update the todo at the specified index
    }
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns a todo at a specific index
  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index]; // Return the todo at the specified index
    }
    return null; // Return null if the index is out of bounds
  }

  // Clears all todos
  clear() {
    this.todos = []; // Reset the todos array to empty
  }
}

module.exports = Todo;
