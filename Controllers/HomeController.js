/**
 * Created by takashima on 16/03/12.
 */

angular.module("myApp", ["ui.bootstrap", "ngSanitize"])
    .controller("HomeController", ["$scope", function($scope){
        $scope.templates = [
            {
                title:'入力',
                url: "templates/input.html"
            },
            {
                title:"履歴",
                url: "templates/input.html"
            },
            {
                title: "集計",
                url: "templates/input.html"
            }
        ];
        $scope.logging = function(title){
            console.log(title);
        };
    }]);