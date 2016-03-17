/**
 * Created by takashima on 16/03/17.
 */


app.controller("inputController",
    [
        "$scope",
        "$resource",
        function($scope, $resource){
            var Account = $resource(
                "Models/resource.php"
            );
            $scope.accounts = Account.query();
        }
    ]
);
