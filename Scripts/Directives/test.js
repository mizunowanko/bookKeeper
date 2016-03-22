/**
 * Created by takashima on 16/03/22.
 */

app.directive(
    "test",
    function(){
        return{
            restrict: "E",
            templateUrl: "Templates/Directives/test.html",
            scope: {
                data: "="
            }
        };
    }
);