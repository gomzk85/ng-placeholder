/**
 * Place holder directive
 * on input tags be it password or text add attribute ngc-place-holder="<<flag to be used for the span which should be hidden>>"
 *
 * For example <input ngc-place-holder="placeHolder" type="text" name="userEmail" ng-model="loginObject.username" class="text" placeholder="Email" ng-pattern="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/" required />
          <span ng-show="placeHolder">Enter Email</span>
 */

angular.module('ngcPlaceHolder', []).directive('ngcPlaceHolder',['$parse', function($parse){
  return {
    restrict: 'A',
    link:function(scope, element, attrs){
                  var spanElement = angular.element(document.getElementById(attrs.ngcPlaceHolder));
                  scope[attrs.ngcPlaceHolder] = (element.val() == "" && scope.$eval(attrs.ngModel) == undefined) ? true : false;
                  element.bind('focus',function(){
                      // angular.element(spanElement.selector).hide();
                      spanElement.addClass("hidden");                    
                  });
                  element.bind('blur',function(){
                    if(element.val() != "") return;                    
                      spanElement.removeClass("hidden");
                      // angular.element(spanElement.selector).show();                    
				          });
                  spanElement.bind('click',function(){
                      element[0].focus();
                      spanElement.addClass("hidden");
                      // angular.element(spanElement.selector).hide();
                  });
                  scope.$watch(attrs.ngModel, function(n,o){
                      if(n != undefined) {                        
                        spanElement.addClass("hidden");
                      }else{                        
                        if(n==null && attrs.$attr.nullcheck){                          
                          spanElement.removeClass("hidden");
                        }
                      }


                  });
    }
  }
}]);
