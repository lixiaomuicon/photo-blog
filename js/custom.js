// <!-- 公号防盗链 -->
(function() {
    let meta = document.createElement('meta');
    meta.content = 'no-referrer';
    meta.name = 'referrer';
    document.getElementsByTagName('head')[0].appendChild(meta);
    console.log(document.getElementsByTagName('head'))
})()