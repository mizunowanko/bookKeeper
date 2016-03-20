/**
 * Created by takashima on 16/03/17.
 */


app.controller("inputController",
    [
        "$scope",
        "$resource",
        function($scope, $resource){

            //科目大分類のデータ取得
            var AccountLargeCategory = $resource(
                "Models/accountLargeCategory.php"
            );
            $scope.accountLargeCategories = AccountLargeCategory.query();

            //科目小分類のデータ取得
            var AccountSmallCategory = $resource(
                "Models/accountSmallCategory.php"
            );
            $scope.accountSmallCategories = AccountSmallCategory.query();

            //科目のデータ取得
            var Account = $resource(
                "Models/account.php"
            );
            $scope.accounts = Account.query();

            //借方の科目データのscopeを初期化
            $scope.debitAccountLargeCategories = $scope.accountLargeCategories;
            $scope.debitAccountSmallCategories = [];
            $scope.debitAccounts = [];

            //貸方の科目データをscopeにセット
            $scope.creditAccountLargeCategories = $scope.accountLargeCategories;
            $scope.creditAccountSmallCategories = [];
            $scope.creditAccounts = [];

            //科目選択時の
            $scope.selectAccountCategory = function(categoryId, isDebit, isLarge){
                if(isDebit){
                    if(isLarge){
                        $scope.debitAccountSmallCategories = _.filter(
                            $scope.accountSmallCategories,
                            function(x){ return x.account_large_category_id == categoryId; }
                        );
                    }else{
                        $scope.debitAccounts = _.filter(
                            $scope.accounts,
                            function(x){ return x.account_small_category_id == categoryId; }
                        );
                    }
                }else{
                    if(isLarge){
                        $scope.creditAccountSmallCategories = _.filter(
                            $scope.accountSmallCategories,
                            function(x){ return x.account_large_category_id == categoryId; }
                        );
                    }else{
                        $scope.creditAccounts = _.filter(
                            $scope.accounts,
                            function(x){ return x.account_small_category_id == categoryId; }
                        );
                    }
                }
            }
        }
    ]
);