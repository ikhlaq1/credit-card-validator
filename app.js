angular.module('app', []);

angular.module('app').controller
  ( 'MainCtrl'
  , function($scope,$locale) {
      
      $scope.ccinfo = {type:undefined}
      
    }
  )

angular.module('app').directive
  ( 'creditCardType'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
              scope.ccinfo.type =
                (/^5/.test(value)) ? "Mastercard"
                : (/^4/.test(value)) ? "Visa"
                : (/^3[47]/.test(value)) ? 'American Express'
                : '?'
              ctrl.$setValidity('invalid',!!scope.ccinfo.type)
              return value
            })
          }
        }
      return directive
      }
    )



