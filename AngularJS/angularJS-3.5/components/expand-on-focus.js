function ExpandOnFocus() {
  return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
      let height = 15;

      $scope.$watch($attrs.count, function(value) {
        height = value;
        console.log(value);
      });
      $element.on("focus", () => {
        console.log($scope, $element, $attrs);
        $element.css("height", height + 'px');
      });
      $element.on("blur", () => {
        $element.css("height", "");
      });
    }
  };
};

angular
.module("MyApp")
.directive("expandOnFocus", ExpandOnFocus);