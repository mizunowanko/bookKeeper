/**
 * Created by takashima on 16/03/12.
 */

app.config(
    [
        "$stateProvider",
        "$urlRouterProvider",
        function($StateProvider, $urlRouterProvider){
            $StateProvider.state(
                "input",
                {
                    url: "/input",
                    controller: "inputController",
                    templateUrl: "Templates/Input.html"
                }
            ).state(
                "history",
                {
                    url: "/history",
                    templateUrl: "Templates/History.html"
                }
            ).state(
                "aggregate",
                {
                    url: "/aggregate",
                    templateUrl: "Templates/Aggregate.html"
                }
            );
            $urlRouterProvider.otherwise("/");
        }
    ]
).controller("IndexController",
    [
        "$scope",
        function($scope){

        }
    ]
);