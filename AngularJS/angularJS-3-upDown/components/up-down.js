function UpDownController() {
    const controller = this; 
    controller.num = 0;
    controller.up = function() {
      controller.num++;
      console.log("test");
  };

  controller.down = function() {
    controller.num--;
  };
  }
  
  angular.module('MyApp').component('upDownCounter', {
    template: `
      <button ng-click="$ctrl.up()">UP</button>
      <p>{{$ctrl.num}}</p>
      <button ng-click="$ctrl.down()">DOWN</button>
      `, 
    controller: UpDownController
  });
