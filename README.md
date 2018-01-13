# ext-todo-library
an extensible todolist ...library? I suppose

### The Core ExtensibleTodo classes ###
* TodoItem
  * responsible for storing the raw todo text, making calls to registered ITodoItemExtensions, and rendering the HTML to be shown on display
* TodoList
  * responsible for organizing it's subtasks, performing mass operations, and todolist exports
* Project
  *  responsible for organizing it's subprojects (if any),  membership, and it's todolist
* Member
  * a member is a hookin for some implementation of users.  to modify a project or it's todolist, you need to be a member of said project
