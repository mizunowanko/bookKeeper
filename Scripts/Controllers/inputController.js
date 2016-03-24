/**
 * Created by takashima on 16/03/17.
 */


app.controller("inputController",
    [
        "$scope",
        "$resource",
        "journalizationDetailFactory",
        function($scope, $resource, journalizationDetailFactory){

            //科目のデータ取得
            $scope.accountLargeCategories = $resource("APIs/accountLargeCategory.php").query();
            $scope.accountSmallCategories = $resource("APIs/accountSmallCategory.php").query();
            $scope.accounts = $resource("APIs/account.php").query();

            //仕訳詳細クラスの配列の作成
            $scope.journalizationDetailsList=[
                journalizationDetailFactory.create(0, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts),
                journalizationDetailFactory.create(1, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts),
                journalizationDetailFactory.create(2, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts),
                journalizationDetailFactory.create(3, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts)
            ];
        }
    ]
);

