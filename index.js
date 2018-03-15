const toughCookie = require('tough-cookie');

const _setCookie = toughCookie.CookieJar.prototype.setCookie;

toughCookie.CookieJar.prototype.setCookie = function(cookie, url, options, cb) {
    let cookies = cookie.split('; ');
    for(let i = 0; i < cookies.length; i ++) {
        if (cookies[i].toLowerCase().indexOf('path=') !== 0) continue;
        if (cookies[i][cookies[i].length - 1] === '/') {
            cookies[i] = cookies[i].substr(0, cookies[i].length - 1);
        }
    }
    cookie = cookies.join('; ');
    _setCookie.apply(this, [cookie, url, options, cb]);
}