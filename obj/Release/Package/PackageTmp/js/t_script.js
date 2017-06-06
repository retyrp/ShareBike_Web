
var menuDisabled = false;

jQuery(function ($) {

    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('#main-wrapper').delay(350).css({ 'overflow': 'visible' });
    });

    $(document).ready(function () {

        loadBaiduMap();

        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, { speed: 500 });

        // for responsive-menu
        $("#m-btn").click(function () {
            $("#responsive").toggle();
        });

        // copy menu list to responsive menu
        var mainMenuList = $('#menu-list').html();
        $('#responsive').html(mainMenuList);

        //for image slide on menu item click(normal) and responsive
        $("#menu-list a, #responsive a").on('click', function (e) {


            if (this.className == "external") {
                return;
            }

            e.preventDefault();

            if (menuDisabled == false) // check the menu has disabled?
            {
                menuDisabled = true; // disable to menu

                var name = $(this).attr('href');
                $('#menu-list li').removeClass('active');
                $('#responsive li').removeClass('active');

                //  set active to both menu
                var menuClass = $(this).parent('li').attr('class');
                $('.' + menuClass).addClass('active');

                // hide responsive menu
                $("#responsive").hide();

                // get image url and assign to backstretch for background
                var imgSrc = $("img" + name + "-img").attr('src');
                $.backstretch(imgSrc, { speed: 500 }); //backstretch for background fade in/out

                // content slide in/out
                $("section.active").animate({ left: $("section.active").outerWidth() }, 400, function () {
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name + "-text").show();
                    $(name + "-text").animate({ left: '0px' }, 400, function () {
                        $(this).addClass("active");

                        //BMap.maps.event.trigger(map, 'resize'); // resize map
                        $.backstretch("resize"); // resize the background image

                        menuDisabled = false; // enable the menu
                    });
                });

            }
            return;
        });

    });

});

var map = '';

function initialize() {
    
}

function loadBaiduMap() {
    // load baidu map
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=knG4xlmqxGF0ovSn8GvGRSuDUvbmGuAG' + 'callback=initialize';
    map = new BMap.Map("map-canvas");
    var point = new BMap.Point(116.331398, 39.897445);
    //map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
    //map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
    map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
    map.enableScrollWheelZoom();                            //启用滚轮放大缩小
    //map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
    map.disable3DBuilding();
    map.centerAndZoom(point, 12);
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });
   // map.addControl(navigationControl);
    // 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function (e) {
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        //alert("当前定位地址为：" + address);
    });
    geolocationControl.addEventListener("locationError", function (e) {
        // 定位失败事件
        alert(e.message);
    });
    map.addControl(geolocationControl);

    /*var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            //alert('your location：' + r.point.lng + ',' + r.point.lat);
        }
        else {
            alert('failed' + this.getStatus());
        }
    }, { enableHighAccuracy: true })*/
    //map = new BMap.maps.Map(document.getElementById('dituContent'), geolocation);
    document.body.appendChild(script);
}