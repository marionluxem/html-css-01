"use strict";

function TodoController ($scope) {
  $scope.todos = [
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
  
  $scope.save = function () {
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
  
  
  $scope.remaining = function() {
    let count = 0;
    
    angular.forEach($scope.todos, function(task) {
      count += task.completed ? 0 : 1;
    });
    
    return count;
  };
  
  $scope.clear = function () {
    let todos = $scope.todos;
    
    $scope.todos = [];
    
    angular.forEach(todos, function(task) {
      if (!task.completed) $scope.todos.push(task);
    });
  };

  $scope.edit = function (task, index) {
    $scope.addTask = task.text;
    $scope.completed = task.completed;
    $scope.index = index;
  };

  $scope.removeTask = function() {
    let oldList = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldList, function(x) {
        if (!x.completed) $scope.todos.push(x);
    });
  };
}

angular
.module("todoApp")
.controller("TodoController", TodoController);