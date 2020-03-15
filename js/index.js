// 搜索栏
var baobei = document.getElementsByClassName("baoBei")[0];
var tianmao = document.getElementsByClassName("tianMao")[0];
var dianpu = document.getElementsByClassName("dianPu")[0];		
var gjtext = document.getElementsByClassName("gjtext")[0];
var inputShuRu = document.getElementById("inputShuRu");
// 搜索框的宝贝按钮
baobei.onclick = function (){
	gjtext.style.display = "block";
	inputShuRu.setAttribute("placeholder","网红裤腰带 洋气 国际范 9.9包邮");
	tianmao.setAttribute("class","");
	dianpu.setAttribute("class","");
	baobei.setAttribute("class","active");
} 
// 搜索框的天猫按钮
tianmao.onclick = function (){
	gjtext.style.display = "none";
	inputShuRu.setAttribute("placeholder","");
	tianmao.setAttribute("class","active");
	dianpu.setAttribute("class","");
	baobei.setAttribute("class","");
}
// 搜索框的店铺按钮
dianpu.onclick = function (){
	gjtext.style.display = "block";
	inputShuRu.setAttribute("placeholder","");
	tianmao.setAttribute("class","");
	dianpu.setAttribute("class","active");
	baobei.setAttribute("class","");
}

// 右特色的隐藏部分
// 文章的隐藏
var notice = document.getElementsByClassName("notice")[0],
	rule = document.getElementsByClassName("rule")[0];
	forum = document.getElementsByClassName("forum")[0],
	security = document.getElementsByClassName("security")[0],
	welfare = document.getElementsByClassName("welfare")[0],
	gongGao = document.getElementsByClassName("gongGao")[0],
	guiZe = document.getElementsByClassName("guiZe")[0],
	lunT = document.getElementsByClassName("lunT")[0],
	anQuan = document.getElementsByClassName("anQuan")[0],
	gongYi = document.getElementsByClassName("gongYi")[0];
// 悬停在公告
notice.addEventListener("mouseover",function (){
	gongGao.style.display = "block";
	guiZe.style.display = "none";
	lunT.style.display = "none";
	anQuan.style.display = "none";
	gongYi.style.display = "none";
	notice.setAttribute("class","hong");
	rule.setAttribute("class","");
	forum.setAttribute("class","");
	security.setAttribute("class","");
	welfare.setAttribute("class","");
},false);
// 悬停在规则
rule.addEventListener("mouseover",function (){
	gongGao.style.display = "none";
	guiZe.style.display = "block";
	lunT.style.display = "none";
	anQuan.style.display = "none";
	gongYi.style.display = "none";
	notice.setAttribute("class","");
	rule.setAttribute("class","hong");
	forum.setAttribute("class","");
	security.setAttribute("class","");
	welfare.setAttribute("class","");
},false)
// 悬停在论坛
forum.addEventListener("mouseover",function (){
	gongGao.style.display = "none";
	guiZe.style.display = "none";
	lunT.style.display = "block";
	anQuan.style.display = "none";
	gongYi.style.display = "none";
	notice.setAttribute("class","");
	rule.setAttribute("class","");
	forum.setAttribute("class","hong");
	security.setAttribute("class","");
	welfare.setAttribute("class","");
},false)
// 悬停在安全
security.addEventListener("mouseover",function (){
	gongGao.style.display = "none";
	guiZe.style.display = "none";
	lunT.style.display = "none";
	anQuan.style.display = "block";
	gongYi.style.display = "none";
	notice.setAttribute("class","");
	rule.setAttribute("class","");
	forum.setAttribute("class","");
	security.setAttribute("class","hong");
	welfare.setAttribute("class","");
},false)
// 悬停在公益
welfare.addEventListener("mouseover",function (){
	gongGao.style.display = "none";
	guiZe.style.display = "none";
	lunT.style.display = "none";
	anQuan.style.display = "none";
	gongYi.style.display = "block";
	notice.setAttribute("class","");
	rule.setAttribute("class","");
	forum.setAttribute("class","");
	security.setAttribute("class","");
	welfare.setAttribute("class","hong");
},false)

// 图标下的隐藏
// 话费图标
var exit1 = document.getElementById("exit1"),
	chonghuafei = document.getElementsByClassName("chonghuafei")[0],
	chongliuliang = document.getElementsByClassName("chongliuliang")[0],
	chongguhua = document.getElementsByClassName("chongguhua")[0],
	chongkuandai = document.getElementsByClassName("chongkuandai")[0],
	chonghuafei1 = document.getElementsByClassName("chonghuafei1")[0],
	chongliuliang1 = document.getElementsByClassName("chongliuliang1")[0],
	chongguhua1 = document.getElementsByClassName("chongguhua1")[0],
	chongkuandai1 = document.getElementsByClassName("chongkuandai1")[0],
	huaFeiHide1 = document.getElementsByClassName("huaFeiHide1")[0],
	huaFeiHide =document.getElementsByClassName("huaFeiHide")[0],
	chonghuafeijine = document.getElementById("chonghuafeijine"),
	huafeishoujiajine = document.getElementById("huafeishoujiajine");
// 右上角退出
exit1.addEventListener("click",function (){
	huaFeiHide.style.display = "none";
},false)
// 鼠标进入充话费图标
huaFeiHide1.addEventListener("mouseover",function(){
	huaFeiHide.style.display = "block";
},false)
// 鼠标移出充话费图标
huaFeiHide1.addEventListener("mouseout",function(){
	huaFeiHide.style.display = "none";
},false)
// 选择充话费
chonghuafei.addEventListener("mouseover",function(){
	chonghuafei1.style.display = "block";
	chongliuliang1.style.display = "none";
	chongguhua1.style.display = "none";
	chongkuandai1.style.display = "none";
	chonghuafei.setAttribute("class","hong");
	chongliuliang.setAttribute("class","");
	chongguhua.setAttribute("class","");
	chongkuandai.setAttribute("class","");
},false)
// 选择金额
chonghuafeijine.addEventListener("change",function (){
	let huafeijine =parseInt(chonghuafeijine.value),
		huafeijine1 = huafeijine*0.98;
	huafeishoujiajine.innerHTML = huafeijine1 + "-" +huafeijine;
},false)
// 流量
var liuliangshoujiajine = document.getElementById("liuliangshoujiajine"),
	liuliangleixing = document.getElementById("liuliangleixing"),
	liuliang = document.getElementById("liuliang");
// 选择充流量
chongliuliang.addEventListener("mouseover",function(){
	chonghuafei1.style.display = "none";
	chongliuliang1.style.display = "block";
	chongguhua1.style.display = "none";
	chongkuandai1.style.display = "none";
	chonghuafei.setAttribute("class","");
	chongliuliang.setAttribute("class","hong");
	chongguhua.setAttribute("class","");
	chongkuandai.setAttribute("class","");
},false)
// 选择流量类型
liuliangleixing.addEventListener("change",function(){
	let num = 0;
	if(liuliangleixing.value == "全国流量")
	{
		num = 0.03;
	}else{
		num = 0.02;
	}
	liuliangshoujiajine.innerHTML = parseInt(liuliang.value) * num;
},false)
// 选择流量多少
liuliang.addEventListener("change",function(){
	let num = 0;
	if(liuliangleixing.value == "全国流量")
	{
		num = 0.03;
	}else{
		num = 0.02;
	}
	liuliangshoujiajine.innerHTML = parseInt(liuliang.value) * num;
},false)
// 固话
var guhuajine = document.getElementById("guhuajine"),
	guhuashoujiajine = document.getElementById("guhuashoujiajine");
// 选择充固话
chongguhua.addEventListener("mouseover",function(){
	chonghuafei1.style.display = "none";
	chongliuliang1.style.display = "none";
	chongguhua1.style.display = "block";
	chongkuandai1.style.display = "none";
	chonghuafei.setAttribute("class","");
	chongliuliang.setAttribute("class","");
	chongguhua.setAttribute("class","hong");
	chongkuandai.setAttribute("class","");
},false)
// 选择充值固话金额
guhuajine.addEventListener("change",function(){
	guhuashoujiajine.innerHTML = parseInt(guhuajine.value) * 0.98;
},false)
// 宽带
var kuandaijine = document.getElementById("kuandaijine"),
	kuandaishoujiajine = document.getElementById("kuandaishoujiajine");
// 选择充固话
chongkuandai.addEventListener("mouseover",function(){
	chonghuafei1.style.display = "none";
	chongliuliang1.style.display = "none";
	chongguhua1.style.display = "none";
	chongkuandai1.style.display = "block";
	chonghuafei.setAttribute("class","");
	chongliuliang.setAttribute("class","");
	chongguhua.setAttribute("class","");
	chongkuandai.setAttribute("class","hong");
},false)
kuandaijine.addEventListener("change",function(){
	kuandaishoujiajine.innerHTML = parseInt(kuandaijine.value);
},false)

// 旅行图标
var lvxinghide1 = document.getElementsByClassName("lvXingHide1")[0],
	lvxinghide = document.getElementsByClassName("lvXingHide")[0],
	exit3 = document.getElementById("exit3");
// 鼠标移到旅行图标
lvxinghide1.addEventListener("mouseover",function(){
	lvxinghide.style.display = "block";
},false)
// 鼠标移出旅行图标
lvxinghide1.addEventListener("mouseout",function(){
	lvxinghide.style.display = "none";
},false)
// 点击退出叉叉按钮
exit3.addEventListener("click",function(){
	lvxinghide.style.display = "none";
},false)

// 国内机票
var guoneichufacj = document.getElementById("guoneichufacj"),
	guoneichufacj1 = document.getElementsByClassName("guoneichufacj1")[0],
	guoneichufaremen = document.getElementsByClassName("guoneichufaremen")[0],
	guoneichufaabcde = document.getElementsByClassName("guoneichufaabcde")[0],
	guoneichufafghj = document.getElementsByClassName("guoneichufafghj")[0],
	guoneichufaklmnp = document.getElementsByClassName("guoneichufaklmnp")[0],
	guoneichufaqrstw = document.getElementsByClassName("guoneichufaqrstw")[0],
	guoneichufaxyz = document.getElementsByClassName("guoneichufaxyz")[0],
	guoneichufaremen1 = document.getElementsByClassName("guoneichufaremen1")[0],
	guoneichufaabcde1 = document.getElementsByClassName("guoneichufaabcde1")[0],
	guoneichufafghj1 = document.getElementsByClassName("guoneichufafghj1")[0],
	guoneichufaklmnp1 = document.getElementsByClassName("guoneichufaklmnp1")[0],
	guoneichufaqrstw1 = document.getElementsByClassName("guoneichufaqrstw1")[0],
	guoneichufaxyz1 = document.getElementsByClassName("guoneichufaxyz1")[0],
	guonei = document.getElementsByClassName("guonei")[0],
	guonei1 = document.getElementsByClassName("guonei1")[0];
// 鼠标移到国内机票
guonei.addEventListener("mouseover",function(){
	guonei.setAttribute("class","hong");
	guoji.setAttribute("class","");
	jiudian.setAttribute("class","");
	dujia.setAttribute("class","");
	huoche.setAttribute("class","");
	guonei1.style.display = "block";
	guoji1.style.display = "none";
	jiudian1.style.display = "none";
	dujia1.style.display = "none";
	huoche1.style.display = "none";
},false)
// 点击出发城市框
guoneichufacj.addEventListener("click",function(){
	let a = guoneichufacj1.style.display;
	if(a == "none"){
		guoneichufacj1.style.display = "block";
	}else{
		guoneichufacj1.style.display = "none";
	}
},false)
// 点击选择城市的城市顺序(热门)
guoneichufaremen.addEventListener("click",function(){
	guoneichufaremen.setAttribute("class","biankuan");
	guoneichufaabcde.setAttribute("class","");
	guoneichufafghj.setAttribute("class","");
	guoneichufaklmnp.setAttribute("class","");
	guoneichufaqrstw.setAttribute("class","");
	guoneichufaxyz.setAttribute("class","");
	guoneichufaremen1.style.display = "block";
	guoneichufaabcde1.style.display = "none";
	guoneichufafghj1.style.display = "none";
	guoneichufaklmnp1.style.display = "none";
	guoneichufaqrstw1.style.display = "none";
	guoneichufaxyz1.style.display = "none";
},false)
// 点击选择城市的城市顺序(ABCDE)
guoneichufaabcde.addEventListener("click",function(){
	guoneichufaremen.setAttribute("class","");
	guoneichufaabcde.setAttribute("class","biankuan");
	guoneichufafghj.setAttribute("class","");
	guoneichufaklmnp.setAttribute("class","");
	guoneichufaqrstw.setAttribute("class","");
	guoneichufaxyz.setAttribute("class","");
	guoneichufaremen1.style.display = "none";
	guoneichufaabcde1.style.display = "block";
	guoneichufafghj1.style.display = "none";
	guoneichufaklmnp1.style.display = "none";
	guoneichufaqrstw1.style.display = "none";
	guoneichufaxyz1.style.display = "none";
},false)
// 点击选择城市的城市顺序(FGHJ)
guoneichufafghj.addEventListener("click",function(){
	guoneichufaremen.setAttribute("class","");
	guoneichufaabcde.setAttribute("class","");
	guoneichufafghj.setAttribute("class","biankuan");
	guoneichufaklmnp.setAttribute("class","");
	guoneichufaqrstw.setAttribute("class","");
	guoneichufaxyz.setAttribute("class","");
	guoneichufaremen1.style.display = "none";
	guoneichufaabcde1.style.display = "none";
	guoneichufafghj1.style.display = "block";
	guoneichufaklmnp1.style.display = "none";
	guoneichufaqrstw1.style.display = "none";
	guoneichufaxyz1.style.display = "none";
},false)
// 点击选择城市的城市顺序(KLMNP)
guoneichufaklmnp.addEventListener("click",function(){
	guoneichufaremen.setAttribute("class","");
	guoneichufaabcde.setAttribute("class","");
	guoneichufafghj.setAttribute("class","");
	guoneichufaklmnp.setAttribute("class","biankuan");
	guoneichufaqrstw.setAttribute("class","");
	guoneichufaxyz.setAttribute("class","");
	guoneichufaremen1.style.display = "none";
	guoneichufaabcde1.style.display = "none";
	guoneichufafghj1.style.display = "none";
	guoneichufaklmnp1.style.display = "block";
	guoneichufaqrstw1.style.display = "none";
	guoneichufaxyz1.style.display = "none";
},false)
// 点击选择城市的城市顺序(QRSTW)
guoneichufaqrstw.addEventListener("click",function(){
	guoneichufaremen.setAttribute("class","");
	guoneichufaabcde.setAttribute("class","");
	guoneichufafghj.setAttribute("class","");
	guoneichufaklmnp.setAttribute("class","");
	guoneichufaqrstw.setAttribute("class","biankuan");
	guoneichufaxyz.setAttribute("class","");
	guoneichufaremen1.style.display = "none";
	guoneichufaabcde1.style.display = "none";
	guoneichufafghj1.style.display = "none";
	guoneichufaklmnp1.style.display = "none";
	guoneichufaqrstw1.style.display = "block";
	guoneichufaxyz1.style.display = "none";
},false)
// 点击选择城市的城市顺序(XYZ)
guoneichufaxyz.addEventListener("click",function(){
	guoneichufaremen.setAttribute("class","");
	guoneichufaabcde.setAttribute("class","");
	guoneichufafghj.setAttribute("class","");
	guoneichufaklmnp.setAttribute("class","");
	guoneichufaqrstw.setAttribute("class","");
	guoneichufaxyz.setAttribute("class","biankuan");
	guoneichufaremen1.style.display = "none";
	guoneichufaabcde1.style.display = "none";
	guoneichufafghj1.style.display = "none";
	guoneichufaklmnp1.style.display = "none";
	guoneichufaqrstw1.style.display = "none";
	guoneichufaxyz1.style.display = "block";
},false)
// 选择城市+隐藏
guoneichufaremen1.addEventListener("click",function(event){
	let even = event || window.event,
		tag = even.target || even.srcElement;
	guoneichufacj.value = tag.innerHTML;
	guoneichufacj1.style.display = "none";
},false)
guoneichufaabcde1.addEventListener("click",function(event){
	let even = event || window.event,
		tag = even.target || even.srcElement;
	guoneichufacj.value = tag.innerHTML;
	guoneichufacj1.style.display = "none";
},false)
guoneichufafghj1.addEventListener("click",function(event){
	let even = event || window.event,
		tag = even.target || even.srcElement;
	guoneichufacj.value = tag.innerHTML;
	guoneichufacj1.style.display = "none";
},false)
guoneichufaklmnp1.addEventListener("click",function(event){
	let even = event || window.event,
		tag = even.target || even.srcElement;
	guoneichufacj.value = tag.innerHTML;
	guoneichufacj1.style.display = "none";
},false)
guoneichufaqrstw1.addEventListener("click",function(event){
	let even = event || window.event,
		tag = even.target || even.srcElement;
	guoneichufacj.value = tag.innerHTML;
	guoneichufacj1.style.display = "none";
},false)
guoneichufaxyz1.addEventListener("click",function(event){
	let even = event || window.event,
		tag = even.target || even.srcElement;
	guoneichufacj.value = tag.innerHTML;
	guoneichufacj1.style.display = "none";
},false)

// 国际机票
var guoji = document.getElementsByClassName("guoji")[0],
	guoji1 = document.getElementsByClassName("guoji1")[0];
// 鼠标移到国际机票
guoji.addEventListener("mouseover",function(){
	guonei.setAttribute("class","");
	guoji.setAttribute("class","hong");
	jiudian.setAttribute("class","");
	dujia.setAttribute("class","");
	huoche.setAttribute("class","");
	guonei1.style.display = "none";
	guoji1.style.display = "block";
	jiudian1.style.display = "none";
	dujia1.style.display = "none";
	huoche1.style.display = "none";
},false)
// 酒店客栈
var jiudian = document.getElementsByClassName("jiudian")[0],
	jiudian1 = document.getElementsByClassName("jiudian1")[0];
// 鼠标移到酒店客栈
jiudian.addEventListener("mouseover",function(){
	guonei.setAttribute("class","");
	guoji.setAttribute("class","");
	jiudian.setAttribute("class","hong");
	dujia.setAttribute("class","");
	huoche.setAttribute("class","");
	guonei1.style.display = "none";
	guoji1.style.display = "none";
	jiudian1.style.display = "block";
	dujia1.style.display = "none";
	huoche1.style.display = "none";
},false)
// 度假门票	
var dujia = document.getElementsByClassName("dujia")[0],
	dujia1 = document.getElementsByClassName("dujia1")[0];
// 鼠标移到度假门票
dujia.addEventListener("mouseover",function(){
	guonei.setAttribute("class","");
	guoji.setAttribute("class","");
	jiudian.setAttribute("class","");
	dujia.setAttribute("class","hong");
	huoche.setAttribute("class","");
	guonei1.style.display = "none";
	guoji1.style.display = "none";
	jiudian1.style.display = "none";
	dujia1.style.display = "block";
	huoche1.style.display = "none";
},false)
// 火车票
var huoche = document.getElementsByClassName("huoche")[0],
	huoche1 = document.getElementsByClassName("huoche1")[0];
// 鼠标移到火车票
huoche.addEventListener("mouseover",function(){
	guonei.setAttribute("class","");
	guoji.setAttribute("class","");
	jiudian.setAttribute("class","");
	dujia.setAttribute("class","");
	huoche.setAttribute("class","hong");
	guonei1.style.display = "none";
	guoji1.style.display = "none";
	jiudian1.style.display = "none";
	dujia1.style.display = "none";
	huoche1.style.display = "block";
},false)



// 车险图标
// 车险
var exit2 = document.getElementById("exit2"),
	chexianhide = document.getElementsByClassName("cheXianHide")[0],
	chexianhide1 = document.getElementsByClassName("cheXianHide1")[0],
	chexianxuanzechengshi = document.getElementById("chexianxuanzechengshi"),
	cj = document.getElementsByClassName("cj")[0],
	chexian = document.getElementsByClassName("chexian")[0],
	chexian1 = document.getElementsByClassName("chexian1")[0],
	chexianremen = document.getElementsByClassName("chexianremen")[0],
	chexianabcde = document.getElementsByClassName("chexianabcde")[0],
	chexianfghj = document.getElementsByClassName("chexianfghj")[0],
	chexianklmnp = document.getElementsByClassName("chexianklmnp")[0],
	chexianqrstw = document.getElementsByClassName("chexianqrstw")[0],
	chexianxyz = document.getElementsByClassName("chexianxyz")[0],
	chexianremen1 = document.getElementsByClassName("chexianremen1")[0],
	chexianabcde1 = document.getElementsByClassName("chexianabcde1")[0],
	chexianfghj1 = document.getElementsByClassName("chexianfghj1")[0],
	chexianklmnp1 = document.getElementsByClassName("chexianklmnp1")[0],
	chexianqrstw1 = document.getElementsByClassName("chexianqrstw1")[0],
	chexianxyz1 = document.getElementsByClassName("chexianxyz1")[0];
// 鼠标进入车险那图标
chexianhide1.addEventListener("mouseover",function(){
	chexianhide.style.display ="block";
},false)
// 鼠标移出车险图标
chexianhide1.addEventListener("mouseout",function(){
	chexianhide.style.display ="none";
},false)
// 点击退出叉叉按钮
exit2.addEventListener("click",function(){
	chexianhide.style.display = "none";
},false)
// 鼠标移到车险
chexian.addEventListener("mouseover",function(){
	chexian.setAttribute("class","hong");
	yiwaixian.setAttribute("class","");
	jiankangxian.setAttribute("class","");
	lvxingxian.setAttribute("class","");
	caichanxian.setAttribute("class","");
	chexian1.style.display = "block";
	yiwaixian1.style.display = "none";
	jiankangxian1.style.display = "none";
	lvxingxian1.style.display = "none";
	caichanxian1.style.display = "none";
},false)
// 点击选择城市框
chexianxuanzechengshi.addEventListener("click",function(){
	let dis = cj.style.display;
	if(dis == "none"){
		cj.style.display = "block";
	}else{
		cj.style.display = "none";
	}
},false)
// 在选择城市里面点击热门
chexianremen.addEventListener("click",function(){
	chexianremen.setAttribute("class","biankuan");
	chexianabcde.setAttribute("class","");
	chexianfghj.setAttribute("class","");
	chexianklmnp.setAttribute("class","");
	chexianqrstw.setAttribute("class","");
	chexianxyz.setAttribute("class","");
	chexianremen1.style.display = "block";
	chexianabcde1.style.display = "none";
	chexianfghj1.style.display = "none";
	chexianklmnp1.style.display = "none";
	chexianqrstw1.style.display = "none";
	chexianxyz1.style.display = "none";
},false)
// 在选择城市里面点击ABCDE
chexianabcde.addEventListener("click",function(){
	chexianremen.setAttribute("class","");
	chexianabcde.setAttribute("class","biankuan");
	chexianfghj.setAttribute("class","");
	chexianklmnp.setAttribute("class","");
	chexianqrstw.setAttribute("class","");
	chexianxyz.setAttribute("class","");
	chexianremen1.style.display = "none";
	chexianabcde1.style.display = "block";
	chexianfghj1.style.display = "none";
	chexianklmnp1.style.display = "none";
	chexianqrstw1.style.display = "none";
	chexianxyz1.style.display = "none";
},false)
// 在选择城市里面点击FGHJ
chexianfghj.addEventListener("click",function(){
	chexianremen.setAttribute("class","");
	chexianabcde.setAttribute("class","");
	chexianfghj.setAttribute("class","biankuan");
	chexianklmnp.setAttribute("class","");
	chexianqrstw.setAttribute("class","");
	chexianxyz.setAttribute("class","");
	chexianremen1.style.display = "none";
	chexianabcde1.style.display = "none";
	chexianfghj1.style.display = "block";
	chexianklmnp1.style.display = "none";
	chexianqrstw1.style.display = "none";
	chexianxyz1.style.display = "none";
},false)
// 在选择城市里面点击KLMNP
chexianklmnp.addEventListener("click",function(){
	chexianremen.setAttribute("class","");
	chexianabcde.setAttribute("class","");
	chexianfghj.setAttribute("class","");
	chexianklmnp.setAttribute("class","biankuan");
	chexianqrstw.setAttribute("class","");
	chexianxyz.setAttribute("class","");
	chexianremen1.style.display = "none";
	chexianabcde1.style.display = "none";
	chexianfghj1.style.display = "none";
	chexianklmnp1.style.display = "block";
	chexianqrstw1.style.display = "none";
	chexianxyz1.style.display = "none";
},false)
// 在选择城市里面点击QRSTW
chexianqrstw.addEventListener("click",function(){
	chexianremen.setAttribute("class","");
	chexianabcde.setAttribute("class","");
	chexianfghj.setAttribute("class","");
	chexianklmnp.setAttribute("class","");
	chexianqrstw.setAttribute("class","biankuan");
	chexianxyz.setAttribute("class","");
	chexianremen1.style.display = "none";
	chexianabcde1.style.display = "none";
	chexianfghj1.style.display = "none";
	chexianklmnp1.style.display = "none";
	chexianqrstw1.style.display = "block";
	chexianxyz1.style.display = "none";
},false)
// 在选择城市里面点击XYZ
chexianxyz.addEventListener("click",function(){
	chexianremen.setAttribute("class","");
	chexianabcde.setAttribute("class","");
	chexianfghj.setAttribute("class","");
	chexianklmnp.setAttribute("class","");
	chexianqrstw.setAttribute("class","");
	chexianxyz.setAttribute("class","biankuan");
	chexianremen1.style.display = "none";
	chexianabcde1.style.display = "none";
	chexianfghj1.style.display = "none";
	chexianklmnp1.style.display = "none";
	chexianqrstw1.style.display = "none";
	chexianxyz1.style.display = "block";
},false)
// 选择城市后隐藏
chexianremen1.addEventListener("click",function(even){
	let event = even || window.even,
		tag = event.target || event.srcElement;
	chexianxuanzechengshi.value = tag.innerHTML;
	cj.style.display = "none";
},false)
chexianabcde1.addEventListener("click",function(even){
	let event = even || window.even,
		tag = event.target || event.srcElement;
	chexianxuanzechengshi.value = tag.innerHTML;
	cj.style.display = "none";
},false)
chexianfghj1.addEventListener("click",function(even){
	let event = even || window.even,
		tag = event.target || event.srcElement;
	chexianxuanzechengshi.value = tag.innerHTML;
	cj.style.display = "none";
},false)
chexianklmnp1.addEventListener("click",function(even){
	let event = even || window.even,
		tag = event.target || event.srcElement;
	chexianxuanzechengshi.value = tag.innerHTML;
	cj.style.display = "none";
},false)
chexianqrstw1.addEventListener("click",function(even){
	let event = even || window.even,
		tag = event.target || event.srcElement;
	chexianxuanzechengshi.value = tag.innerHTML;
	cj.style.display = "none";
},false)
chexianxyz1.addEventListener("click",function(even){
	let event = even || window.even,
		tag = event.target || event.srcElement;
	chexianxuanzechengshi.value = tag.innerHTML;
	cj.style.display = "none";
},false)

// 意外险
var yiwaixian = document.getElementsByClassName("yiwaixian")[0],
	yiwaixian1 = document.getElementsByClassName("yiwaixian1")[0];
// 鼠标移到意外险
yiwaixian.addEventListener("mouseover",function(){
	chexian.setAttribute("class","");
	yiwaixian.setAttribute("class","hong");
	jiankangxian.setAttribute("class","");
	lvxingxian.setAttribute("class","");
	caichanxian.setAttribute("class","");
	chexian1.style.display = "none";
	yiwaixian1.style.display = "block";
	jiankangxian1.style.display = "none";
	lvxingxian1.style.display = "none";
	caichanxian1.style.display = "none";
},false)
// 健康险
var jiankangxian = document.getElementsByClassName("jiankangxian")[0],
	jiankangxian1 = document.getElementsByClassName("jiankangxian1")[0];
// 鼠标移到健康险
jiankangxian.addEventListener("mouseover",function(){
	chexian.setAttribute("class","");
	yiwaixian.setAttribute("class","");
	jiankangxian.setAttribute("class","hong");
	lvxingxian.setAttribute("class","");
	caichanxian.setAttribute("class","");
	chexian1.style.display = "none";
	yiwaixian1.style.display = "none";
	jiankangxian1.style.display = "block";
	lvxingxian1.style.display = "none";
	caichanxian1.style.display = "none";
},false)
// 旅行险
var lvxingxian = document.getElementsByClassName("lvxingxian")[0],
	lvxingxian1 = document.getElementsByClassName("lvxingxian1")[0];
// 鼠标移到旅行险
lvxingxian.addEventListener("mouseover",function(){
	chexian.setAttribute("class","");
	yiwaixian.setAttribute("class","");
	jiankangxian.setAttribute("class","");
	lvxingxian.setAttribute("class","hong");
	caichanxian.setAttribute("class","");
	chexian1.style.display = "none";
	yiwaixian1.style.display = "none";
	jiankangxian1.style.display = "none";
	lvxingxian1.style.display = "block";
	caichanxian1.style.display = "none";
},false)
// 财产险
var caichanxian = document.getElementsByClassName("caichanxian")[0],
	caichanxian1 = document.getElementsByClassName("caichanxian1")[0];
// 鼠标移到财产险
caichanxian.addEventListener("mouseover",function(){
	chexian.setAttribute("class","");
	yiwaixian.setAttribute("class","");
	jiankangxian.setAttribute("class","");
	lvxingxian.setAttribute("class","");
	caichanxian.setAttribute("class","hong");
	chexian1.style.display = "none";
	yiwaixian1.style.display = "none";
	jiankangxian1.style.display = "none";
	lvxingxian1.style.display = "none";
	caichanxian1.style.display = "block";
},false)



// 轮播
// 上轮播
var shang = document.getElementsByClassName("shang")[0],
	leftJianTou = document.getElementsByClassName("leftJianTou")[0],
	rightJianTou = document.getElementsByClassName("rightJianTou")[0],
	xiaBiao = document.getElementById("xiaBiao1"),
	xiaBiaoLi = xiaBiao.getElementsByTagName("li");
// 自动轮播
// 下标选项的背景颜色
function aa(){
	let letW = parseInt(shang.style.left);
	if(letW == 0){
		xiaBiaoLi[0].style.backgroundColor = "#ff5000";
		xiaBiaoLi[1].style.backgroundColor = "";
		xiaBiaoLi[2].style.backgroundColor = "";
		xiaBiaoLi[3].style.backgroundColor = "";
		xiaBiaoLi[4].style.backgroundColor = "";
	}else if(letW == -520){
		xiaBiaoLi[0].style.backgroundColor = "";
		xiaBiaoLi[1].style.backgroundColor = "#ff5000";
		xiaBiaoLi[2].style.backgroundColor = "";
		xiaBiaoLi[3].style.backgroundColor = "";
		xiaBiaoLi[4].style.backgroundColor = "";
	}else if(letW == -1040){
		xiaBiaoLi[0].style.backgroundColor = "";
		xiaBiaoLi[1].style.backgroundColor = "";
		xiaBiaoLi[2].style.backgroundColor = "#ff5000";
		xiaBiaoLi[3].style.backgroundColor = "";
		xiaBiaoLi[4].style.backgroundColor = "";
	}else if(letW == -1560){
		xiaBiaoLi[0].style.backgroundColor = "";
		xiaBiaoLi[1].style.backgroundColor = "";
		xiaBiaoLi[2].style.backgroundColor = "";
		xiaBiaoLi[3].style.backgroundColor = "#ff5000";
		xiaBiaoLi[4].style.backgroundColor = "";
	}else if(letW == -2080){
		xiaBiaoLi[0].style.backgroundColor = "";
		xiaBiaoLi[1].style.backgroundColor = "";
		xiaBiaoLi[2].style.backgroundColor = "";
		xiaBiaoLi[3].style.backgroundColor = "";
		xiaBiaoLi[4].style.backgroundColor = "#ff5000";
	}
}
aa();
var time = setInterval(function (){
	if(parseInt(shang.style.left) == -2080){
		shang.style.left = "0px";	
	}else{
		shang.style.left = parseInt(shang.style.left) - 520 +"px";
	}
	aa();
},3000)
// 点击左箭头
leftJianTou.addEventListener("click",function (){
	let withss = parseInt(shang.style.left); 
	if(withss == -2080){
		shang.style.left = "0px";
	}else{
		shang.style.left = withss - 520 +"px";
	}
	aa();
},false)
// 点击右箭头
rightJianTou.addEventListener("click",function (){
	let withss = parseInt(shang.style.left); 
	if(withss == 0){
		shang.style.left = "-2080px";
	}else{
		shang.style.left = withss + 520 +"px";
	}
	aa();
},false)
// 点击下面选项按钮
xiaBiao.addEventListener("click",function (even){
	let len = xiaBiaoLi.length;
	let event = even || window.event;
	let target = event.target || event.srcElement;
	let num = target.innerHTML;
	shang.style.left = -520 * num + "px";
	for(let i = 0;i < len;i ++){
		xiaBiaoLi[i].style.backgroundColor = "";
	}
	target.style.backgroundColor = "#ff5000"

},false)

// 下轮播
var xia = document.getElementsByClassName("xiaLunBo1")[0],
	num = document.getElementById("num"),
	heidian = document.getElementsByClassName("heidian")[0],
	xiaLeft = document.getElementsByClassName("xiaLeft")[0],
	xiaRight = document.getElementsByClassName("xiaRight")[0],
	sum;
// 右边数字和黑条进度
function a(){
	let letWidthss = parseInt(xia.style.left);
	if(letWidthss == 0){
		sum= 1;
		heidian.style.left = "0px";
	}else if(letWidthss == -520){
		sum = 2;
		heidian.style.left = "86px";
	}else if(letWidthss == -1040){
		sum = 3;
		heidian.style.left = "172px";
	}else if(letWidthss == -1560){
		sum = 4;
		heidian.style.left = "258px";
	}else if(letWidthss == -2080){
		sum = 5;
		heidian.style.left = "344px";
	}else if(letWidthss == -2600){
		sum = 6;
		heidian.style.left = "430px";
	}
	num.innerHTML = sum;
}
a();
// 自动轮播
var time2 = setInterval(function (){
	if(parseInt(xia.style.left) == -2600){
		xia.style.left = "0px";
	}else{
		xia.style.left = parseInt(xia.style.left) - 520 +"px";
	}
	a();
},3000)
// 点击左箭头
xiaLeft.addEventListener("click",function (){
	let withss = parseInt(xia.style.left);
	if(withss == -2600){
		xia.style.left = "0px";
	}else{
		xia.style.left = withss - 520 +"px";
	}
	a();
},false)
// 点击右箭头
xiaRight.addEventListener("click",function (){
	let withss = parseInt(xia.style.left);
	if(withss == 0){
		xia.style.left = "-2600px";
	}else{
		xia.style.left = withss + 520 +"px";
	}
	a();
},false)





// 右侧悬浮导航
$(document).scroll(function(){
	let res = $(this).scrollTop();
	if(res > 365){
		$("#suspensionNav").css("position","fixed");
		$("#suspensionNav").css("top","80px");
	}else if(res <= 365){
		$("#suspensionNav").css("position","absolute");
		$("#suspensionNav").css("top","450px");
	}
	if(810 <= res && res <1417){
		$(".itema1").addClass("action")
		$(".itema2").removeClass("action")
		$(".itema3").removeClass("action")
		$(".itema4").removeClass("action")
		$(".itema5").removeClass("action")
	}
	if(1417 <= res && res < 2217){
		$(".itema1").removeClass("action")
		$(".itema2").addClass("action")
		$(".itema3").removeClass("action")
		$(".itema4").removeClass("action")
		$(".itema5").removeClass("action")
	}
	if(2217 <= res && res < 3015){
		$(".itema1").removeClass("action")
		$(".itema2").removeClass("action")
		$(".itema3").addClass("action")
		$(".itema4").removeClass("action")
		$(".itema5").removeClass("action")
	}
	if(3015 <= res && res < 4262){
		$(".itema1").removeClass("action")
		$(".itema2").removeClass("action")
		$(".itema3").removeClass("action")
		$(".itema4").addClass("action")
		$(".itema5").removeClass("action")
	}
	if(4262 <= res){
		$(".itema1").removeClass("action")
		$(".itema2").removeClass("action")
		$(".itema3").removeClass("action")
		$(".itema4").removeClass("action")
		$(".itema5").addClass("action")
	}
	if(res >= 1100){
		$(".itemaa").css("height","400px")
		$(".itema6").css("display","block")
	}else if(res <1100)
	{
		$(".itemaa").css("height","350px")
		$(".itema6").css("display","none")
	}
})
$(".itema1").click(function(){
	$(".itema1").addClass("action")
	$(".itema2").removeClass("action")
	$(".itema3").removeClass("action")
	$(".itema4").removeClass("action")
	$(".itema5").removeClass("action")
})
$(".itema2").click(function(){
	$(".itema1").removeClass("action")
	$(".itema2").addClass("action")
	$(".itema3").removeClass("action")
	$(".itema4").removeClass("action")
	$(".itema5").removeClass("action")
})
$(".itema3").click(function(){
	$(".itema1").removeClass("action")
	$(".itema2").removeClass("action")
	$(".itema3").addClass("action")
	$(".itema4").removeClass("action")
	$(".itema5").removeClass("action")
})
$(".itema4").click(function(){
	$(".itema1").removeClass("action")
	$(".itema2").removeClass("action")
	$(".itema3").removeClass("action")
	$(".itema4").addClass("action")
	$(".itema5").removeClass("action")
})
$(".itema5").click(function(){
	$(".itema1").removeClass("action")
	$(".itema2").removeClass("action")
	$(".itema3").removeClass("action")
	$(".itema4").removeClass("action")
	$(".itema5").addClass("action")
})
$(".itema6").click(function(){
	$(".itema1").addClass("action")
	$(".itema2").removeClass("action")
	$(".itema3").removeClass("action")
	$(".itema4").removeClass("action")
	$(".itema5").removeClass("action")
	$(document).scrollTop(0)
})


// 滑动滚动条后出现的上面搜索框
$(document).scroll(function(){
	let res = $(this).scrollTop();
	if(res >= 210){
		$("#search").css("display","block")
	}else{
		$("#search").css("display","none")
	}
})
$(".itemSearchab1").click(function(){
	let str = $(".baobei").text();
	$(".baobei").text($(".tianmao").text())
	$(".tianmao").text(str)
	if($(".baobei").text() == "天猫")
	{
		$("#searchBtn").css("backgroundColor","#ff9000")
		$("#searchBtn").css("borderRadius","0 50px 50px 0")
		$("#headSearchaInput").attr("placeholder","")
	}else{
		$("#searchBtn").css("backgroundColor","#ff5700")
		$("#searchBtn").css("borderRadius","0 50px 50px 0")
	}
	if($(".baobei").text() == "店铺")
	{
		$("#headSearchaInput").attr("placeholder","")
	}
	if($(".baobei").text() == "宝贝")
	{
		$("#headSearchaInput").attr("placeholder","网红裤腰带 洋气 国际范 9.9包邮")
	}
})
$(".itemSearchab2").click(function(){
	let str = $(".baobei").text();
	$(".baobei").text($(".dianpu").text())
	$(".dianpu").text(str)
	if($(".baobei").text() == "天猫")
	{
		$("#searchBtn").css("backgroundColor","#ff9000")
		$("#searchBtn").css("borderRadius","0 50px 50px 0")
		$("#headSearchaInput").attr("placeholder","")
	}else{
		$("#searchBtn").css("backgroundColor","#ff5700")
		$("#searchBtn").css("borderRadius","0 50px 50px 0")
	}
	if($(".baobei").text() == "店铺")
	{
		$("#headSearchaInput").attr("placeholder","")
	}
	if($(".baobei").text() == "宝贝")
	{
		$("#headSearchaInput").attr("placeholder","网红裤腰带 洋气 国际范 9.9包邮")
	}
})






