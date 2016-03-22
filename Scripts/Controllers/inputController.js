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
            $scope.journalizationDetail = $scope.journalizationDetailsList[0];

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

