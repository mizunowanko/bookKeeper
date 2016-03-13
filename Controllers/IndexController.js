/**
 * Created by takashima on 16/03/12.
 */

angular.module("myApp", ["ui.bootstrap", "ngSanitize"])
    .controller("IndexController", ["$scope", function($scope){
        $scope.aaa = "aaa";
        $scope.templates = [
            {
                title:'入力',
                url: "Templates/Input.html"
            },
            {
                title:"履歴",
                url: "Templates/Aggregate.html"
            },
            {
                title: "集計",
                url: "Templates/History.html"
            }
        ];
        $scope.logging = function(title){
            console.log(title);
        };
    }]);