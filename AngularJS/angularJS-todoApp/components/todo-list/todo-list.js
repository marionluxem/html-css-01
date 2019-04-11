function TodoList() {
  const controller = this;
  controller.TodoList = [
    {
      text:'Walk the Dog',
      completed: false
    },
    {
      text:'Go to the store',
      completed: true
    },
    {
      text:'Get gas',
      completed: false
    },
    {
      text:'Wash the car',
      completed: false
    }
  ];

  controller.save = function (task) {
    let addTask = $scope.addTask;
    let completed = $scope.completed;
    let index = $scope.index;
    let clearCompleted = $scope.clearCompleted;
    
    if (!addTask == undefined || !addTask == '') {
      if (!index == '') {
        $scope.todos.splice(index, 1, {
          text: addTask,
          completed: completed
        });
      } else {
        $scope.todos.push({
          text: addTask,
          completed: false
        });
      };
      
      $scope.addTask = $scope.completed = $scope.index = '';
    };
  }; 
}
  angular.module('todoApp').component('todoList', {
    template: 
    `
      <section>
      <h1>To-Do List</h1>
      <p>A place to store the things you have to do!</p>
    
      <todo-filter>
      </todo-filter>

      <ol>
        <li data-ng-animate="'animate'" data-ng-repeat="task in todos | filter:search:strict">
        <todo-task></todo-task>
        </li>
      </ol>
    
      <todo-add on-add="">
      </todo-add>
      
      </section>
    `, // or use templateUrl
    controller: TodoList
  });