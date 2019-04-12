function component () {
  function upDownController($scope) {
      const controller = this; 
      controller.count = 0;
      controller.up = function() {
        controller.count += 10;
        console.log("test");
    };
   
    controller.down = function() {
      controller.count -= 10;
    };
    }
  
  return {
    bindings: {},
    controller: upDownController,
    template: `
      <button ng-click="$ctrl.up()">UP</button>
      <p>{{$ctrl.count}}</p>
      <button ng-click="$ctrl.down()">DOWN</button>
      <div class="input-box">
        <label>
            Click inside of the input to expand it
            <p>
            <input expand-on-focus count="$ctrl.count" />
            </p>
        </label>
      </div>
      ` 
  }
}

angular
  .module("MyApp")
  .component ('upDownCounter', component());