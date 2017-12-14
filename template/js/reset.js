/**页面加载出来之前要隐藏转换rem */
var objHtml=document.getElementsByTagName('html');

objHtml[0].style.visibility="hidden";
window.onload =function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    
    function getRem(pwidth,prem){
        var html = document.getElementsByTagName("html")[0];
        var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = oWidth/pwidth*prem + "px";
    }
    getRem(750,32)
    /**去除hidden属性 */
    window.onresize = function(){
        getRem(750,32)
    };
 objHtml[0].style.visibility="visible";
};


var _mtac = {"senseQuery":1};  	
(function() {  		
		var mta = document.createElement("script");
        mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500529953");
        mta.setAttribute("cid", "500529954");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
 })();

 /**
  * 数组中是不是包含某个值
  */
 Array.prototype.contains = function ( needle ) {
    for (i in this) {
      if (this[i] == needle) return true;
    }
    return false;
  }
  /**
   * 去空格
   */
  String.prototype.trim = function() { 
    return this.replace(/(^\s*)|(\s*$)/g, ''); 
  };