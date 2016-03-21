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
                "APIs/accountLargeCategory.php"
            );
            $scope.accountLargeCategories = AccountLargeCategory.query();

            //科目小分類のデータ取得
            var AccountSmallCategory = $resource(
                "APIs/accountSmallCategory.php"
            );
            $scope.accountSmallCategories = AccountSmallCategory.query();

            //科目のデータ取得
            var Account = $resource(
                "APIs/account.php"
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

            //カテゴリ選択時に下位カテゴリを絞り込むイベント
            $scope.selectAccountCategory = function(categoryId, isDebit, isLarge){
                if(isDebit){
                    if(isLarge){
                        $scope.debitAccountSmallCategories = _.where(
                            $scope.accountSmallCategories,
                            { account_large_category_id: categoryId }
                        );
                    }else{
                        $scope.debitAccounts = _.where(
                            $scope.accounts,
                            { account_small_category_id: categoryId}
                        );
                    }
                }else{
                    if(isLarge){
                        $scope.creditAccountSmallCategories = _.where(
                            $scope.accountSmallCategories,
                            { account_large_category_id: categoryId }
                        );
                    }else{
                        $scope.creditAccounts = _.where(
                            $scope.accounts,
                            { account_small_category_id: categoryId}
                        );
                    }
                }
            }
        }
    ]
);

app.directive(
    "accountDetail",
    function(){
        return{
            templateUrl: "Templates/Directive/AccountDetail.html"
        };
    }
);