function TodoFilter() {
    const controller = this;
  }
    angular.module('todoApp').component('todoFilter', {
      template: 
      `
        <input type="search" data-ng-model="search.text" placeholder="Filter Your To Dos">
  
      `, // or use templateUrl
      controller: TodoFilter,
      bindings: { todoList: "=" }
    });