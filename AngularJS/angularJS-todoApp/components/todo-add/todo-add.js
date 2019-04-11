function TodoAdd() {
    const controller = this;
  }
    angular.module('todoApp').component('todoAdd', {
      template: 
      `
        <form data-ng-submit="onAdd()">
          <input type="text" data-ng-model="addTask" placeholder="Add Your To Do">
          <input type="hidden" data-ng-model="completed" value="">
          <input type="hidden" data-ng-model="index" value="">
          <input type="submit" value="Add" id="add-button">
        </form>
        
      `, // or use templateUrl
      controller: TodoAdd,
      bindings: { onAdd: "&" }
    });