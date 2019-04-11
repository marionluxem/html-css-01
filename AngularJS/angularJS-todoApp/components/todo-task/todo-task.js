function TodoTask() {
  const controller = this;
}
  angular.module('todoApp').component('todoTask', {
    template: 
    `
          <label data-ng-click="task.completed = !task.completed">
            <span ng-class="{ completed: task.completed }"><a class="complete" ng-if="!task.completed" href="#" >Complete</a>
              {{ task.text }} </span>
              <a class="edit" href="javascript:;" data-ng-click="edit(task, $index)">Edit</a>
              <button class="remove-btn" ng-click="removeTask(task)">X</button>
          </label>
       

    `, // or use templateUrl
    controller: TodoTask
  });