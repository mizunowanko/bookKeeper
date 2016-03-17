/**
 * Created by takashima on 16/03/17.
 */


app.controller("inputController",
    [
        "$scope",
        "$resource",
        function($scope, $resource){
            var AccountLargeCategory = $resource(
                "Models/accountLargeCategory.php"
            );
            var AccountSmallCategory = $resource(
                "Models/accountSmallCategory.php/:id",
                {id: "@id"}
            );
            $scope.accountLargeCategories = AccountLargeCategory.query();
            $scope.getAccountSmallCategoryById = function(id){
                $scope.accountSmallCategories = AccountSmallCategory.get({id: id});
            };
        }
    ]
);