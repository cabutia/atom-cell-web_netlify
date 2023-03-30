/**
plugins: [
    { src: '~/plugins/axl.ts', mode: 'client' }
]
 */

export default defineNuxtConfig({
    css: [
        '~/assets/scss/style.scss',
    ],
    app: {
        head: {
            link: [
                { href:'/assets/css/vendor/bootstrap.min.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/font-awesome.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/flaticon/flaticon.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/slick.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/slick-theme.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/jquery-ui.min.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/sal.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/magnific-popup.css', rel: 'stylesheet' },
                { href:'/assets/css/vendor/base.css', rel: 'stylesheet' },
            ],
            script: [
                { src: '/assets/js/vendor/modernizr.min.js', body: true },
                { src: '/assets/js/vendor/jquery.js', body: true },
                { src: '/assets/js/vendor/popper.min.js', body: true },
                { src: '/assets/js/vendor/bootstrap.min.js', body: true },
                { src: '/assets/js/vendor/slick.min.js', body: true },
                { src: '/assets/js/vendor/js.cookie.js', body: true },
                { src: '/assets/js/vendor/jquery-ui.min.js', body: true },
                { src: '/assets/js/vendor/jquery.style.switcher.js', body: true },
                { src: '/assets/js/vendor/jquery.countdown.min.js', body: true },
                { src: '/assets/js/vendor/sal.js', body: true },
                { src: '/assets/js/vendor/jquery.magnific-popup.min.js', body: true },
                { src: '/assets/js/vendor/imagesloaded.pkgd.min.js', body: true },
                { src: '/assets/js/vendor/isotope.pkgd.min.js', body: true },
                { src: '/assets/js/vendor/counterup.js', body: true },
                { src: '/assets/js/vendor/waypoints.min.js', body: true },
            ]
        }
    }
})
