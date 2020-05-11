var budgetContoller = (function () {

    var x = 23;
    var add = function (a) {
        return x + a
    }

    return {
        publicTest: function (b) {
            console.log(add(b));
        }
    }
})();




var UIController = (function(){

    //some code later

})();




var controller = (function(budgetCtrl, UICtrl){

document.querySelector('.add__btn').addEventListener('click',function(){
    console.log('clicked');
})

})(budgetContoller,UIController);