/**
 * Created by takashima on 16/03/21.
 */


app.factory("AccountDetail",
    function(row, accountLargeCategories, accountSmallCategories, accounts){
        return{
            //各科目の全データ
            accountLargeCategories: accountLargeCategories,
            accountSmallCategories: accountSmallCategories,
            accounts: accounts,

            //Templateに紐付けられる各値
            row: row,
            debitAccountLargeCategories: accountLargeCategories,
            debitAccountSmallCategories: [],
            debitAccounts:[],
            creditAccountLargeCategories: accountLargeCategories,
            creditAccountSmallCategories: [],
            creditAccounts:[],
            amount: 0,

            //カテゴリ選択時のイベント
            selectAccountCategory: function(categoryId, isDebit, isLarge){
                if(isDebit){
                    if(isLarge){
                        this.debitAccountSmallCategories = _.where(
                            this.accountSmallCategories,
                            { account_large_category_id: categoryId }
                        );
                    }else{
                        this.debitAccounts = _.where(
                            this.accounts,
                            { account_small_category_id: categoryId}
                        );
                    }
                }else{
                    if(isLarge){
                        this.creditAccountSmallCategories = _.where(
                            this.accountSmallCategories,
                            { account_large_category_id: categoryId }
                        );
                    }else{
                        this.creditAccounts = _.where(
                            this.accounts,
                            { account_small_category_id: categoryId}
                        );
                    }
                }
            }
        };
    }
);