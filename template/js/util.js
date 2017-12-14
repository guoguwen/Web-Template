/**
 * reset the frontSize and use the rem  default the 16px 375pt
 * create by Guwen  
 * create Time 2017-10-23
 */
var objHtml=document.getElementsByTagName('html');

objHtml[0].style.visibility="hidden";
window.onload =function(){
    
    function getRem(pwidth,prem){
        var html = document.getElementsByTagName("html")[0];
        var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = oWidth/pwidth*prem + "px";
    }
    getRem(750,32);
    window.onresize = function(){
        getRem(750,32)
    };
 objHtml[0].style.visibility="visible";
};


/**
 *
 * The idCard invalid check
 * 
 */
var aCity={
	11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
	33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",
	46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",
	65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"
};
function invalidIdCard(sId){ 
	var iSum=0 ;
	var info="" ;
	if(!/^\d{17}(\d|x)$/i.test(sId))
    	return false; 
		sId=sId.replace(/x$/i,"a"); 
	if(aCity[parseInt(sId.substr(0,2))]==null) 
		return false; 
	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2)); 
	var d=new Date(sBirthday.replace(/-/g,"/")) ;
	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())) 
		return false; 
	for(var i = 17; i >= 0; i--) 
		iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
	if(iSum%11!=1) 
		return false; 
	//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
	return true;
}

/**
 *
 *	invalid the phone
 * 
 */
function invalidPhone(phone){
	var phone_reg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
	return phone_reg.test(phone);
}

/**
 *
 *	invalid the name
 * 
 */
function invalidName(name){
	var name_reg=/[\u4e00-\u9fa5]/;
	return name_reg.test(name);
}

/**
 *
 *	
 * 
 */