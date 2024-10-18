var rule = {
    author: '小可乐/2408/第一版',
    title: '厂长资源',
    类型: '影视',
    //host: 'https://www.czys.pro',
    host: 'https://www.cz01.vip',
    hostJs: 'HOST = pdfh(request(HOST), "h2:eq(1)&&a&&href")',
    headers: { 'User-Agent': 'MOBILE_UA' },
    编码: 'utf-8',
    timeout: 5000,

    homeUrl: '/',
    url: '/fyfilter/page/fypage',
    filter_url: '{{fl.cateId}}{{fl.year}}{{fl.class}}{{fl.zilei}}',
    detailUrl: '/movie/fyid.html',
    searchUrl: 'http://czzy.210985.xyz/czzy_search8.php?wd=**&page=fypage',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,

    class_name: '全部&最新电影&国产剧&番剧',
    class_url: 'movie_bt&zuixindianying&gcj&fanju',
    filter_def: {
        movie_bt: { cateId: 'movie_bt' },
        zuixindianying: { cateId: 'zuixindianying' },
        gcj: { cateId: 'gcj' },
        fanju: { cateId: 'fanju' }
    },

    play_parse: true,
    // lazy代码源于香雅情大佬
    lazy: `js:
pdfh = jsp.pdfh;
var html = request(input);
var ohtml = pdfh(html, '.videoplay&&Html');
var url = pdfh(ohtml, "body&&iframe&&src");
if (url) {
    var _obj={};
    eval(pdfh(request(url),'body&&script&&Html')+'\\n_obj.player=player;_obj.rand=rand');
    function js_decrypt(str, tokenkey, tokeniv) {
        eval(getCryptoJS());
        var key = CryptoJS.enc.Utf8.parse(tokenkey);
        var iv = CryptoJS.enc.Utf8.parse(tokeniv);
        return CryptoJS.AES.decrypt(str, key, {iv: iv,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)
    };
    let config = JSON.parse(js_decrypt(_obj.player,'VFBTzdujpR9FWBhe', _obj.rand));
    input = {jx: 0, url: config.url, parse: 0}
} else if (/decrypted/.test(ohtml)) {
    var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");
    eval(getCryptoJS());
    var script = phtml.match(/var.*?\\)\\);/g)[0];
    var data = [];
    eval(script.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));
    input = {jx: 0, url: data.match(/url:.*?['"](.*?)['"]/)[1], parse: 0}
} 
`,

    limit: 9,
    double: false,
    推荐: '*',
    一级: `js:
VODS = [];
let klists = pdfa(request(input),'li:has(img)');
klists.forEach((it) => {
    VODS.push({
        vod_name: pdfh(it,'img&&alt'),
        vod_pic: pdfh(it,'img&&data-original'),
        vod_remarks: pdfh(it,'.jidi&&Text')||pdfh(it,'.qb&&Text')||pdfh(it,'.furk&&Text'),
        vod_id: pdfh(it,'a:eq(0)&&href')    
    })
})
`,
    二级: `js:
let khtml = request(input);
let kdetail = pdfh(khtml, '.dytext');
VOD = {};
VOD.vod_id = input;
VOD.vod_name = pdfh(kdetail, 'h1&&Text');
VOD.vod_pic = pdfh(khtml, '.dyimg&&img&&src');
VOD.type_name = pdfh(kdetail, 'li:eq(0)&&Text').replace('类型：','');
VOD.vod_remarks =/上映/.test(kdetail) ? kdetail.match(/上映：<span>(.*?)<\\/span>/)[1] : '未知';
VOD.vod_year = pdfh(kdetail, 'li:eq(2)&&Text').replace('年份：','');
VOD.vod_area = pdfh(kdetail, 'li:eq(1)&&Text').replace('地区：','');
VOD.vod_director =/导演/.test(kdetail) ? kdetail.match(/导演：(.*?)<\\/li>/)[1] : '未知';
VOD.vod_actor =/主演/.test(kdetail) ? kdetail.match(/主演：(.*?)<\\/li>/)[1] : '未知';
VOD.vod_content = pdfh(khtml, '.yp_context&&Text');

let ktabs = [];
let i = 1;
pdfa(khtml, '.paly_list_btn').map((it) => { 
    ktabs.push('👶厂长在线' + i);
    i++
});
VOD.vod_play_from = ktabs.join('$$$');

let kplists = [];
pdfa(khtml, '.paly_list_btn').forEach((pl) => {
    let plist = pdfa(pl, 'body&&a').map((it) => { return pdfh(it, 'a&&Text') + '$' + pdfh(it, 'a&&href') });
    plist = plist.join('#');
    kplists.push(plist)
});
VOD.vod_play_url = kplists.join('$$$')
`,
    搜索: `js:
VODS = [];
let klists = request(input).split('$$$');
klists.forEach((it) => {
    let p = it.split('|');
    VODS.push({
        vod_name: p[1],
        vod_pic: p[2],
        vod_remarks: p[3],
        vod_id: p[0]
    })
})
`,

    filter: {
        "movie_bt": [
            { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "1900~2000年代", "v": "/year/19002000nd" }, { "n": "2001~2010年代", "v": "/year/20012010nd" }, { "n": "2011", "v": "/year/2011nd" }, { "n": "2012", "v": "/year/2012" }, { "n": "2013", "v": "/year/2013" }, { "n": "2014", "v": "/year/2014" }, { "n": "2015", "v": "/year/2015" }, { "n": "2016", "v": "/year/2016" }, { "n": "2017", "v": "/year/2017" }, { "n": "2018", "v": "/year/2018" }, { "n": "2019", "v": "/year/2019" }, { "n": "2020", "v": "/year/2020" }, { "n": "2021", "v": "/year/2021" }, { "n": "2022", "v": "/year/2022" }, { "n": "2023", "v": "/year/2023" }, { "n": "2024", "v": "/year/2024" }] },
            { "key": "class", "name": "影片类型", "value": [{ "n": "全部", "v": "" }, { "n": "传记", "v": "/movie_bt_tags/chuanji" }, { "n": "儿童", "v": "/movie_bt_tags/etet" }, { "n": "冒险", "v": "/movie_bt_tags/maoxian" }, { "n": "剧情", "v": "/movie_bt_tags/juqing" }, { "n": "动作", "v": "/movie_bt_tags/dozuo" }, { "n": "动漫", "v": "/movie_bt_tags/doman" }, { "n": "动画", "v": "/movie_bt_tags/dhh" }, { "n": "历史", "v": "/movie_bt_tags/lishi" }, { "n": "古装", "v": "/movie_bt_tags/guzhuang" }, { "n": "同性", "v": "/movie_bt_tags/tongxing" }, { "n": "喜剧", "v": "/movie_bt_tags/xiju" }, { "n": "奇幻", "v": "/movie_bt_tags/qihuan" }, { "n": "家庭", "v": "/movie_bt_tags/jiating" }, { "n": "恐怖", "v": "/movie_bt_tags/kubu" }, { "n": "悬疑", "v": "/movie_bt_tags/xuanyi" }, { "n": "情色", "v": "/movie_bt_tags/qingse" }, { "n": "惊悚", "v": "/movie_bt_tags/kingsong" }, { "n": "战争", "v": "/movie_bt_tags/zhanzheng" }, { "n": "歌舞", "v": "/movie_bt_tags/gw" }, { "n": "武侠", "v": "/movie_bt_tags/wuxia" }, { "n": "灾难", "v": "/movie_bt_tags/zainan" }, { "n": "爱情", "v": "/movie_bt_tags/aiqing" }, { "n": "犯罪", "v": "/movie_bt_tags/fanzui" }, { "n": "真人秀", "v": "/movie_bt_tags/zrx" }, { "n": "短片", "v": "/movie_bt_tags/dp" }, { "n": "科幻", "v": "/movie_bt_tags/kh" }, { "n": "纪录片", "v": "/movie_bt_tags/jlpp" }, { "n": "西部", "v": "/movie_bt_tags/xb" }, { "n": "运动", "v": "/movie_bt_tags/yd" }, { "n": "音乐", "v": "/movie_bt_tags/yy" }, { "n": "鬼怪", "v": "/movie_bt_tags/鬼怪" }] },
            { "key": "zilei", "name": "子类", "value": [{ "n": "全部", "v": "" }, { "n": "会员专区", "v": "/movie_bt_series/huiyuanzhuanqu" }, { "n": "站长推荐", "v": "/movie_bt_series/zhanchangtuijian" }, { "n": "电影", "v": "/movie_bt_series/dyy" }, { "n": "华语电影", "v": "/movie_bt_series/huayudianying" }, { "n": "欧美电影", "v": "/movie_bt_series/meiguodianying" }, { "n": "韩国电影", "v": "/movie_bt_series/hanguodianying" }, { "n": "日本电影", "v": "/movie_bt_series/ribendianying" }, { "n": "印度电影", "v": "/movie_bt_series/yindudianying" }, { "n": "俄罗斯电影", "v": "/movie_bt_series/eluosidianying" }, { "n": "加拿大电影", "v": "/movie_bt_series/jianadadianying" }, { "n": "电视剧", "v": "/movie_bt_series/dianshiju" }, { "n": "国产剧", "v": "/movie_bt_series/guochanju" }, { "n": "美剧", "v": "/movie_bt_series/mj" }, { "n": "韩剧", "v": "/movie_bt_series/hj" }, { "n": "日剧", "v": "/movie_bt_series/rj" }, { "n": "海外剧（其他）", "v": "/movie_bt_series/hwj" }, { "n": "动画", "v": "/movie_bt_series/dohua" }] }
        ],
        "zuixindianying": [
            { "key": "cateId", "name": "类型", "value": [{ "n": "最新电影", "v": "zuixindianying" }, { "n": "豆瓣电影Top250", "v": "dbtop250" }, { "n": "高分影视", "v": "gaofenyingshi" }, { "n": "热映中", "v": "reyingzhong" }, { "n": "会员专区", "v": "movie_bt_series/huiyuanzhuanqu" }, { "n": "站长推荐", "v": "movie_bt_series/zhanchangtuijian" }, { "n": "电影", "v": "movie_bt_series/dyy" }, { "n": "华语电影", "v": "movie_bt_series/huayudianying" }, { "n": "欧美电影", "v": "movie_bt_series/meiguodianying" }, { "n": "韩国电影", "v": "movie_bt_series/hanguodianying" }, { "n": "日本电影", "v": "movie_bt_series/ribendianying" }, { "n": "印度电影", "v": "movie_bt_series/yindudianying" }, { "n": "俄罗斯电影", "v": "movie_bt_series/eluosidianying" }, { "n": "加拿大电影", "v": "movie_bt_series/jianadadianying" }] }
        ],
        "gcj": [
            { "key": "cateId", "name": "类型", "value": [{ "n": "国产剧", "v": "gcj" }, { "n": "美剧", "v": "meijutt" }, { "n": "韩剧", "v": "hanjutv" }, { "n": "电视剧", "v": "movie_bt_series/dianshiju" }, { "n": "日剧", "v": "movie_bt_series/rj" }, { "n": "海外剧", "v": "movie_bt_series/hwj" }] }
        ],
        "fanju": [
            { "key": "cateId", "name": "类型", "value": [{ "n": "番剧", "v": "fanju" }, { "n": "剧场版", "v": "dongmanjuchangban" }, { "n": "动画", "v": "movie_bt_series/dohua" }] }
        ]
    }
}