/**
 * Created by takashima on 16/03/22.
 */

app.directive(
    "journalization",
    function(){
        return{
            restrict: "E",
            templateUrl: "Templates/Directives/journalization.html",
            scope: {
                data: "="
            }
        };
    }
);

app.directive(
    "journalizationDetail",
    function(){
        return{
            restrict: "E",
            templateUrl: "Templates/Directives/journalizationDetail.html",
            scope: {
                data: "="
            }
        };
    }
);