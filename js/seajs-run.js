!(function() {
    var version = '1.0.16';
    var languageCode = 'zh_CN';
    var htmlElem = document.getElementsByTagName('html');
    if(htmlElem.length && htmlElem[0].getAttribute('lang')) {
        languageCode = htmlElem[0].getAttribute('lang');
    }

    seajs.config({
        vars: {
            "language": languageCode
        },
        paths: {
            "root": "/static", // 静态文件根目录
            "path": "/static/site", //网站前台公共模块
            "agent": "/static/site/agent", //网站前台公共模块
            "site": "/website/"+htmlElem[0].getAttribute('site')+'/js', //网站前台私有模块
            "common": "/static/seajs-modules", // 公共seajs模块
            "modules": "/static/site/modules"
        },
        alias: {
            "vue": "root/vue/vue.min.js",
            "avalon": "root/avalon/avalon.min.js",
            "jquery": "root/js/jquery.min.js",
            "jqlazyload": "root/js/jquery.lazyload.min.js",
            "jqcookie": "root/js/jquery.cookie.min.js",
            "jqform": "root/js/jquery.form.min.js",
            "layer": "root/layer/layer.js",
            "buttonState": "common/buttonState.js",

            "imagesloaded": "root/imagesloaded/4.1.3/imagesloaded.pkgd.min.js",

            "mmenu": "root/mmenu/6.1.5/jquery.mmenu.all.js",

            "wow": "root/wow/1.0.1/wow.min.js",

            "formValidation": "root/formValidation/formValidation.custom.min.js",

            "distpickerData": "root/distpicker/distpicker.data.min.js",
            "distpicker": "root/distpicker/distpicker.min.js",

            "owlCarouselCss": "root/owlCarousel/owl.carousel.css",
            "owlCarousel": "root/owlCarousel/owl.carousel.min.js",

            "lightGalleryCss": "root/lightGallery/css/lightgallery.min.css",
            "lightGalleryTransitionCss": 'root/lightGallery/css/lg-transitions.min.css',
            "lightGallery": "root/lightGallery/js/lightgallery-all.min.js",

            "moment": "root/moment/moment.min.js",

            "layerDateJs": "root/laydate/5.0.9/laydate.js",

            "jqueryMousewheel": "root/jquery-mousewheel/jquery.mousewheel.min.js",

            "fullPageCss":"root/fullPage/2.8.7/jquery.fullpage.min.css",
            "fullPageJs":"root/fullPage/2.8.7/jquery.fullPage.min.js",

            "swiperCss":"root/swiper/4.2.0/swiper.min.css",
            "swiperJs":"root/swiper/4.2.0/swiper.min.js",

        },
        map: [
            [ /^(.*\/path\/.*\.(?:css|js))(?:.*)$/i, '$1?v='+version ],
            [ /^(.*\/site\/.*\.(?:css|js))(?:.*)$/i, '$1?v='+version ],
            [ /^(.*\/common\/.*\.(?:css|js))(?:.*)$/i, '$1?v='+version ]
        ]
    });

    seajs.use('path/modules/main');
})();
