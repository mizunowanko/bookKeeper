/**
 * Created by takashima on 16/03/21.
 */

//仕訳詳細クラス
app.factory("JournalizationDetailFactory",
    function(){
        var JournalizationDetail = function(row, accountLargeCategories, accountSmallCategories, accounts){
            //各科目の全データ
            this.accountLargeCategories = accountLargeCategories;
            this.accountSmallCategories = accountSmallCategories;
            this.accounts = accounts;

            //selectに紐付けられる値の配列
            this.row = row;
            this.debitAccountLargeCategories = accountLargeCategories;
            this.debitAccountSmallCategories = [];
            this.debitAccounts = [];
            this.creditAccountLargeCategories = accountLargeCategories;
            this.creditAccountSmallCategories = [];
            this.creditAccounts = [];

            //バインディングされるModel

            this.amount = 0;
        };
        JournalizationDetail.prototype.changeAccountCategory = function(categoryId, isDebit, isLarge){
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
        };
        return {
            create: function(row, accountLargeCategories, accountSmallCategories, accounts){
                return new JournalizationDetail(row, accountLargeCategories, accountSmallCategories, accounts);
            }
        };
    }
);