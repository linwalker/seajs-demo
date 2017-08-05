/**
 * Created by linyuhua on 2017/1/14.
 */
define(function (require, exports, module) {
    var init= function() {
        var textContent = [
            'yes it works',
            'seajs demo',
            'it is a lucky day',
            'wish this help you',
            'thank you for reading'
        ];
        var index = Math.floor(Math.random()*textContent.length);
        return textContent[index];
    }
    module.exports = {
        init:init
    }
})