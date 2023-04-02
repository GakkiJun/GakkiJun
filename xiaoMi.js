window.onload = function () {


    /**********************************************设置购物车鼠标移入效果****************************************************/


    var topshopcar = document.getElementById('topshopcar');//获取要添加鼠标移入事件的元素
    var shopcar = document.getElementById('shopcar');//获取要弹出的元素
    var gouwuche = document.getElementById('gouwuche');//获取要变色的购物的车图标

    //给购物车添加一个鼠标移入事件，显示出下拉框并添加boxshadow，变更文字颜色及背景颜色
    topshopcar.onmouseover = function () {
        topshopcar.style.backgroundColor = '#ffffff';
        gouwuche.style.color = '#FF6A00';
        shopcar.style.height = '100px';
        shopcar.style.color = 'black';
        shopcar.style.boxShadow = 'box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.2),0 4px 5px -3px rgba(0, 0, 0, 0.2),4px 0 5px -3px rgba(0, 0, 0, 0.2);';
    }
    //给购物车添加一个鼠标移出的事件，隐藏下拉框，把文字颜色以及背景颜色都改为默认，清除boxshadow
    topshopcar.onmouseleave = function () {
        topshopcar.style.backgroundColor = '';
        gouwuche.style.color = '';
        shopcar.style.height = '0';
        shopcar.style.boxShadow = '';
        shopcar.style.color = '#ffffff';
    }



    /**********************************************app下载下拉框****************************************************/


    var dwpp = document.getElementById('dwapp');// 获取要添加事件的元素 ‘ 下载app ’
    var appcode = document.getElementById('appcode');//获取要显示的元素
    var Trigo = document.getElementById('Trigo');//获取要显示的小三角
    //添加一个鼠标移入事件，更改隐藏下拉框的高度以达到显示目的，同时添加boxshadow，显示出小三角
    dwpp.onmousemove = function () {
        appcode.style.height = '150px';
        appcode.style.boxShadow = '-4px 0 5px -3px rgba(0, 0, 0, 0.2),0 4px 5px -3px rgba(0, 0, 0, 0.2),4px 0 5px -3px rgba(0, 0, 0, 0.2)';
        Trigo.style.display = 'block';
    }
    //添加一个鼠标移出事件，改变下拉框高度达到隐藏下拉框的目的，并清除boxshadow，隐藏小三角
    dwpp.onmouseleave = function () {
        appcode.style.height = '0';
        appcode.style.boxShadow = '';
        Trigo.style.display = 'none';
    }



    /**********************************************搜索框区域****************************************************/

    //给搜索框添加事件效果
    var searchIcon = document.getElementById('search-icon');
    //获取搜索图标
    var searchI = document.getElementById('search-i');
    //获取搜索内容输入框
    var searchText = document.getElementById('search-text');
    // 获取下拉菜单
    var serchTextXl = document.getElementById('serch-text-xl');
    //先给搜索按钮部分添加事件
    //添加鼠标移入函数
    function searchHover() {
        searchI.style.color = '#fff';
        searchIcon.style.backgroundColor = '#FF6A00';
        searchIcon.style.border = '1px solid #FF6A00';
    }
    //添加鼠标移出函数
    function clearSearchHouver() {
        searchI.style.color = 'black';
        searchIcon.style.backgroundColor = 'white';
        searchIcon.style.border = '1px solid #E0E0E0';
    }
    //调用上面两个函数
    searchIcon.onmouseover = function () {
        searchHover();
    }
    searchIcon.onmouseleave = function () {
        clearSearchHouver();
    }
    searchI.onmouseover = function () {
        searchHover();
    }
    searchI.onmouseleave = function () {
        clearSearchHouver();
    }

    // 给内容输入添加事件
    searchText.onmousedown = function () {
        // this.style.border = '1px solid #FF6A00';
        searchText.style.borderColor = '#FF6A00';
        searchIcon.style.border = '1px solid #FF6A00';
        serchTextXl.style.height = '240px';
        serchTextXl.style.borderWidth = '1px';
        serchTextXl.style.borderColor = '#FF6A00';
    }
    document.onclick = function () {
        // this.style.border = '1px solid #FF6A00';
        searchText.style.borderColor = '#E0E0E0';
        serchTextXl.style.height = '0px';
        serchTextXl.style.borderWidth = '0px';
        searchIcon.style.border = '1px solid #E0E0E0';
    }






    /**********************************************设置第二行导航栏内容的下拉框****************************************************/

    var shangpinb = document.getElementsByClassName('shangpin-b');
    var shangpinnav = document.getElementsByClassName('shangpinnav');

    for (let i = 0; i < shangpinb.length; i++) {
        //添加鼠标移入函数
        function spHover() {
            shangpinnav[i].style.height = '230px';
            shangpinnav[i].style.border = '1px solid rgb(224,224,224)';
        }
        //添加鼠标移出函数
        function clearSpHover() {
            shangpinnav[i].style.height = '0px';
            shangpinnav[i].style.border = '';
        }
        //调用上面两个函数完成隐藏板块
        shangpinb[i].onmouseover = function () {
            spHover();
        }
        shangpinb[i].onmouseleave = function () {
            clearSpHover();
        }
        shangpinnav[i].onmouseover = function () {
            spHover();
        }
        shangpinnav[i].onmouseleave = function () {
            clearSpHover();
        }

    }


    /**********************************************轮播图****************************************************/

    // 将要轮播的图片放进一个数组里
    var lunbo = document.getElementById('lunbo');
    var lunbotuImgBox = new Array('./img/lunbotu/lunbotu1.jpg', './img/lunbotu/lunbotu2.webp',
        './img/lunbotu/lunbotu3.webp', './img/lunbotu/lunbotu4.webp');
    //获取两个按键
    var preBtn = document.getElementById('pre');
    var nextBtn = document.getElementById('next');
    // 设置小圆点
    var circleList = document.getElementsByClassName('circle');

    var i = 0;

    // 定义一个自动轮播和下一张图片按键都可以使用的函数
    function next() {
        i++;
        lunbo.src = lunbotuImgBox[i];
        clearCircleMain(i);
        if (i == lunbotuImgBox.length - 1) {
            i = -1;
        }
    }

    // 定义一个圆圈函数，清除当前除外的所有圆圈的circlemain类名
    function clearCircleMain(index) {
        for (let n = 0; n < circleList.length; n++) {
            circleList[n].className = 'circle';
        }
        circleList[index].className += ' circlemain';
    }

    // 自动轮播

    setInterval(function () {
        next();
    }, 3000)

    // 下一张按钮点击事件
    nextBtn.onclick = function () {
        next();
    }

    // 上一张按钮点击事件
    preBtn.onclick = function () {
        i--;
        if (i <= 0) {
            i = lunbotuImgBox.length - 1;
        }
        lunbo.src = lunbotuImgBox[i];
        clearCircleMain(i);
    }

    // 设置圆圈点击效果事件
    for (let m = 0; m < circleList.length; m++) {
        circleList[m].onclick = function () {
            lunbo.src = lunbotuImgBox[m];
            clearCircleMain(m);
        }
    };

    /**************************************第三行隐藏目录******************************************* */

    var itemPhone = document.getElementById('item-phone');
    var categoryItem = document.getElementsByClassName('category-item');
    var threeXl = document.getElementsByClassName('three-xl');

    for (let j = 0; j < categoryItem.length; j++) {
        categoryItem[j].onmouseover = function () {
            threeXl[j].style.width = '992px';
            threeXl[j].style.boxShadow = '1px 2px 9px rgba(0,0,0,0.2)';
            threeXl[j].style.border = '1px solid #E0E0E0';
        }
        categoryItem[j].onmouseleave = function () {
            threeXl[j].style.width = '0';
            threeXl[j].style.border = '';
        }
    }

        /**************************************商品展示区******************************************* */

    var phoneAdlis = document.getElementsByClassName('phone-adlis');

    for(let j=0 ; j<phoneAdlis.length ; j++){
        phoneAdlis[j].onmouseover = function(){
            phoneAdlis[j].style.boxShadow = '1px 1px 6px gray, -1px 1px 2px gray';
            // phoneAdlis[j].style.paddingTop = '10px';
            // phoneAdlis[j].style.paddingBottom = '30px';
            
        }
        phoneAdlis[j].onmouseleave = function(){
            phoneAdlis[j].style.boxShadow = '';
            // phoneAdlis[j].style.paddingTop = '20px';
            // phoneAdlis[j].style.paddingBottom = '20px';
        }
    }


    var wxtubiao = document.getElementById('wxtubiao');
    var wxi = document.getElementById('wxi');

    wxtubiao.onmouseover = function(){
        wxi.style.display = 'block';
    }
    wxtubiao.onmouseleave = function(){
        wxi.style.display = 'none';
    }
    
};
