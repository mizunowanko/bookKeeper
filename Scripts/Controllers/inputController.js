/**
 * Created by takashima on 16/03/17.
 */


app.controller("inputController",
    [
        "$scope",
        "$resource",
        "JournalizationDetailFactory",
        function($scope, $resource, JournalizationDetailFactory){

            //科目のデータ取得
            $scope.accountLargeCategories = $resource("APIs/accountLargeCategory.php").query();
            $scope.accountSmallCategories = $resource("APIs/accountSmallCategory.php").query();
            $scope.accounts = $resource("APIs/account.php").query();

            //仕訳詳細クラスの配列の作成
            $scope.journalizationDetailsList=[
                JournalizationDetailFactory.create(0, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts),
                JournalizationDetailFactory.create(1, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts),
                JournalizationDetailFactory.create(2, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts),
                JournalizationDetailFactory.create(3, $scope.accountLargeCategories, $scope.accountSmallCategories, $scope.accounts)
            ];
        }
    ]
);

