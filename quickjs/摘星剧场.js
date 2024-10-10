globalThis.getAESjiem = function (word, key) {
    var srcs = word;
    if (word.charCodeAt(0) == 65279)
        srcs = word.slice(1);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
}
function fn_getxl() {
    let html = post('http://103.88.35.251:8989/shark/api.php?action=configs',
        {
            headers: {
                'User-Agent': 'Dalvik/1.0.3 (Linux; U; Android 11; Redmi Build/M2012K10C)'
            },
            body: {
                'username': '',
                'token': ''
            }
        });
    let hkey = CryptoJS.enc.Utf8.parse("aassddwwxxllsx1x");
    let htext = getAESjiem(html, hkey);
    return JSON.parse(htext).playerinfos

}
/*
globalThis.getxl = JSON.parse(getAESjiem(fetch('http://103.88.35.251:8989/shark/api.php?action=configs', {
    method: 'POST',
    headers: {
        'User-Agent': 'Dalvik/1.0.3 (Linux; U; Android 11; Redmi Build/M2012K10C)'
    },
    body: {
        'username': '',
        'token': ''
    }
}), CryptoJS.enc.Utf8.parse("aassddwwxxllsx1x"))).playerinfos
*/
globalThis.getxl = fn_getxl();
log('getxl:' + getxl);
globalThis.getxlsz = function (name) {
    let xl = []
    getxl.forEach(it => {
        if (it.playername === name) {
            let data = getAESjiem(it.playerjiekou, CryptoJS.enc.Utf8.parse("aassqdwwssllsm1x")).match(/data=([^&]+)/)[1]
            let jx = getAESjiem(data, CryptoJS.enc.Utf8.parse("aassqdbbssllsmhx"))
            xl.push(jx)
        }
    })
    return xl
}
var rule = {
    title: '摘星剧场',
    host: 'http://103.88.35.251:8989',
    url: '/api.php/v1.classify/content?page=fypage',
    homeUrl: '/api.php/v1.home/data?type_id=25',
    searchUrl: '/api.php/v1.search/data?wd=**&type_id=0&page=fypage',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    },
    searchable: 2,
    quickSearch: 1,
    filterable: 1,
    filter_url: 'fyclass&len=20&style={{fl.类型}}&zone={{fl.地区}}&year={{fl.年份}}&emcee={{fl.明星}}&order={{fl.排序}}&start=fypage&',
    class_name: '电影&电视剧&综艺&动漫&短剧',
    class_url: '21&20&23&22&24',
    filter: {
        "film": [
            {
                "key": "类型",
                "name": "类型",
                "value": [
                    {
                        "n": "喜剧",
                        "v": "喜剧"
                    },
                    {
                        "n": "爱情",
                        "v": "爱情"
                    },
                    {
                        "n": "动作",
                        "v": "动作"
                    },
                    {
                        "n": "恐怖",
                        "v": "恐怖"
                    },
                    {
                        "n": "科幻",
                        "v": "科幻"
                    },
                    {
                        "n": "惊悚",
                        "v": "惊悚"
                    },
                    {
                        "n": "犯罪",
                        "v": "犯罪"
                    },
                    {
                        "n": "奇幻",
                        "v": "奇幻"
                    },
                    {
                        "n": "战争",
                        "v": "战争"
                    },
                    {
                        "n": "悬疑",
                        "v": "悬疑"
                    },
                    {
                        "n": "动画",
                        "v": "动画"
                    },
                    {
                        "n": "文艺",
                        "v": "文艺"
                    },
                    {
                        "n": "传记",
                        "v": "传记"
                    },
                    {
                        "n": "歌舞",
                        "v": "歌舞"
                    },
                    {
                        "n": "古装",
                        "v": "古装"
                    },
                    {
                        "n": "警匪",
                        "v": "警匪"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "地区",
                "name": "地区",
                "value": [
                    {
                        "n": "内地",
                        "v": "内地"
                    },
                    {
                        "n": "香港",
                        "v": "香港"
                    },
                    {
                        "n": "台湾",
                        "v": "台湾"
                    },
                    {
                        "n": "韩国",
                        "v": "韩国"
                    },
                    {
                        "n": "泰国",
                        "v": "泰国"
                    },
                    {
                        "n": "日本",
                        "v": "日本"
                    },
                    {
                        "n": "美国",
                        "v": "美国"
                    },
                    {
                        "n": "英国",
                        "v": "英国"
                    },
                    {
                        "n": "新加坡",
                        "v": "新加坡"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "年份",
                "name": "年份",
                "value": [
                    {
                        "n": "2024",
                        "v": "2024"
                    },
                    {
                        "n": "2023",
                        "v": "2023"
                    },
                    {
                        "n": "2022",
                        "v": "2022"
                    },
                    {
                        "n": "2021",
                        "v": "2021"
                    },
                    {
                        "n": "2020",
                        "v": "2020"
                    },
                    {
                        "n": "2019",
                        "v": "2019"
                    },
                    {
                        "n": "2018",
                        "v": "2018"
                    },
                    {
                        "n": "2017",
                        "v": "2017"
                    },
                    {
                        "n": "2016",
                        "v": "2016"
                    },
                    {
                        "n": "2015",
                        "v": "2015"
                    },
                    {
                        "n": "2014",
                        "v": "2014"
                    },
                    {
                        "n": "2013",
                        "v": "2013"
                    },
                    {
                        "n": "2012",
                        "v": "2012"
                    },
                    {
                        "n": "更早",
                        "v": "更早"
                    }
                ]
            },
            {
                "key": "排序",
                "name": "排序",
                "value": [
                    {
                        "n": "最近热播",
                        "v": ""
                    },
                    {
                        "n": "最近更新",
                        "v": "time"
                    },
                    {
                        "n": "评价最高",
                        "v": "score"
                    }
                ]
            }
        ],
        "teleplay": [
            {
                "key": "类型",
                "name": "类型",
                "value": [
                    {
                        "n": "爱情",
                        "v": "爱情"
                    },
                    {
                        "n": "喜剧",
                        "v": "喜剧"
                    },
                    {
                        "n": "都市",
                        "v": "都市"
                    },
                    {
                        "n": "悬疑",
                        "v": "悬疑"
                    },
                    {
                        "n": "古装",
                        "v": "古装"
                    },
                    {
                        "n": "偶像",
                        "v": "偶像"
                    },
                    {
                        "n": "犯罪",
                        "v": "犯罪"
                    },
                    {
                        "n": "历史",
                        "v": "历史"
                    },
                    {
                        "n": "战争",
                        "v": "战争"
                    },
                    {
                        "n": "武侠",
                        "v": "武侠"
                    },
                    {
                        "n": "警匪",
                        "v": "警匪"
                    },
                    {
                        "n": "科幻",
                        "v": "科幻"
                    },
                    {
                        "n": "奇幻",
                        "v": "奇幻"
                    },
                    {
                        "n": "谍战",
                        "v": "谍战"
                    },
                    {
                        "n": "农村",
                        "v": "农村"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "地区",
                "name": "地区",
                "value": [
                    {
                        "n": "内地",
                        "v": "内地"
                    },
                    {
                        "n": "香港",
                        "v": "香港"
                    },
                    {
                        "n": "台湾",
                        "v": "台湾"
                    },
                    {
                        "n": "韩国",
                        "v": "韩国"
                    },
                    {
                        "n": "泰国",
                        "v": "泰国"
                    },
                    {
                        "n": "日本",
                        "v": "日本"
                    },
                    {
                        "n": "美国",
                        "v": "美国"
                    },
                    {
                        "n": "英国",
                        "v": "英国"
                    },
                    {
                        "n": "新加坡",
                        "v": "新加坡"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "年份",
                "name": "年份",
                "value": [
                    {
                        "n": "2024",
                        "v": "2024"
                    },
                    {
                        "n": "2023",
                        "v": "2023"
                    },
                    {
                        "n": "2022",
                        "v": "2022"
                    },
                    {
                        "n": "2021",
                        "v": "2021"
                    },
                    {
                        "n": "2020",
                        "v": "2020"
                    },
                    {
                        "n": "2019",
                        "v": "2019"
                    },
                    {
                        "n": "2018",
                        "v": "2018"
                    },
                    {
                        "n": "2017",
                        "v": "2017"
                    },
                    {
                        "n": "2016",
                        "v": "2016"
                    },
                    {
                        "n": "2015",
                        "v": "2015"
                    },
                    {
                        "n": "2014",
                        "v": "2014"
                    },
                    {
                        "n": "2013",
                        "v": "2013"
                    },
                    {
                        "n": "2012",
                        "v": "2012"
                    },
                    {
                        "n": "更早",
                        "v": "更早"
                    }
                ]
            },
            {
                "key": "排序",
                "name": "排序",
                "value": [
                    {
                        "n": "最近热播",
                        "v": ""
                    },
                    {
                        "n": "最近更新",
                        "v": "time"
                    },
                    {
                        "n": "评价最高",
                        "v": "score"
                    }
                ]
            }
        ],
        "tvshow": [
            {
                "key": "类型",
                "name": "类型",
                "value": [
                    {
                        "n": "真人秀",
                        "v": "真人秀"
                    },
                    {
                        "n": "生活",
                        "v": "生活"
                    },
                    {
                        "n": "搞笑",
                        "v": "搞笑"
                    },
                    {
                        "n": "访谈",
                        "v": "访谈"
                    },
                    {
                        "n": "时尚",
                        "v": "时尚"
                    },
                    {
                        "n": "音乐",
                        "v": "音乐"
                    },
                    {
                        "n": "选秀",
                        "v": "选秀"
                    },
                    {
                        "n": "美食",
                        "v": "美食"
                    },
                    {
                        "n": "游戏",
                        "v": "游戏"
                    },
                    {
                        "n": "纪实",
                        "v": "纪实"
                    },
                    {
                        "n": "旅游",
                        "v": "旅游"
                    },
                    {
                        "n": "情感",
                        "v": "情感"
                    },
                    {
                        "n": "恶搞",
                        "v": "恶搞"
                    },
                    {
                        "n": "吐槽",
                        "v": "吐槽"
                    },
                    {
                        "n": "原创",
                        "v": "原创"
                    },
                    {
                        "n": "歌舞",
                        "v": "歌舞"
                    },
                    {
                        "n": "播报",
                        "v": "播报"
                    },
                    {
                        "n": "曲艺",
                        "v": "曲艺"
                    },
                    {
                        "n": "科教",
                        "v": "科教"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "地区",
                "name": "地区",
                "value": [
                    {
                        "n": "内地",
                        "v": "内地"
                    },
                    {
                        "n": "台湾",
                        "v": "台湾"
                    },
                    {
                        "n": "日韩",
                        "v": "日韩"
                    },
                    {
                        "n": "欧美",
                        "v": "欧美"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "明星",
                "name": "明星",
                "value": [
                    {
                        "n": "何炅",
                        "v": "何炅"
                    },
                    {
                        "n": "王筱磊",
                        "v": "王筱磊"
                    },
                    {
                        "n": "撒贝宁",
                        "v": "撒贝宁"
                    },
                    {
                        "n": "张绍刚",
                        "v": "张绍刚"
                    },
                    {
                        "n": "倪萍",
                        "v": "倪萍"
                    },
                    {
                        "n": "章亭",
                        "v": "章亭"
                    },
                    {
                        "n": "赵川",
                        "v": "赵川"
                    },
                    {
                        "n": "舒冬",
                        "v": "舒冬"
                    },
                    {
                        "n": "汪涵",
                        "v": "汪涵"
                    },
                    {
                        "n": "李红",
                        "v": "李红"
                    },
                    {
                        "n": "桑晨",
                        "v": "桑晨"
                    },
                    {
                        "n": "曲洪禹",
                        "v": "曲洪禹"
                    },
                    {
                        "n": "鲁健",
                        "v": "鲁健"
                    },
                    {
                        "n": "王世林",
                        "v": "王世林"
                    },
                    {
                        "n": "冀玉华",
                        "v": "冀玉华"
                    },
                    {
                        "n": "尼格买提",
                        "v": "尼格买提"
                    },
                    {
                        "n": "白岩松",
                        "v": "白岩松"
                    },
                    {
                        "n": "李晨",
                        "v": "李晨"
                    },
                    {
                        "n": "康辉",
                        "v": "康辉"
                    },
                    {
                        "n": "刘洪悦",
                        "v": "刘洪悦"
                    }
                ]
            },
            {
                "key": "排序",
                "name": "排序",
                "value": [
                    {
                        "n": "最近热播",
                        "v": ""
                    },
                    {
                        "n": "最近更新",
                        "v": "time"
                    },
                    {
                        "n": "评价最高",
                        "v": "score"
                    }
                ]
            }
        ],
        "cartoon": [
            {
                "key": "类型",
                "name": "类型",
                "value": [
                    {
                        "n": "搞笑",
                        "v": "搞笑"
                    },
                    {
                        "n": "热血",
                        "v": "热血"
                    },
                    {
                        "n": "冒险",
                        "v": "冒险"
                    },
                    {
                        "n": "美少女",
                        "v": "美少女"
                    },
                    {
                        "n": "科幻",
                        "v": "科幻"
                    },
                    {
                        "n": "校园",
                        "v": "校园"
                    },
                    {
                        "n": "恋爱",
                        "v": "恋爱"
                    },
                    {
                        "n": "神魔",
                        "v": "神魔"
                    },
                    {
                        "n": "机战",
                        "v": "机战"
                    },
                    {
                        "n": "益智",
                        "v": "益智"
                    },
                    {
                        "n": "亲子",
                        "v": "亲子"
                    },
                    {
                        "n": "励志",
                        "v": "励志"
                    },
                    {
                        "n": "童话",
                        "v": "童话"
                    },
                    {
                        "n": "青春",
                        "v": "青春"
                    },
                    {
                        "n": "原创",
                        "v": "原创"
                    },
                    {
                        "n": "动作",
                        "v": "动作"
                    },
                    {
                        "n": "耽美",
                        "v": "耽美"
                    },
                    {
                        "n": "魔幻",
                        "v": "魔幻"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "地区",
                "name": "地区",
                "value": [
                    {
                        "n": "日本",
                        "v": "日本"
                    },
                    {
                        "n": "欧美",
                        "v": "欧美"
                    },
                    {
                        "n": "国产",
                        "v": "国产"
                    },
                    {
                        "n": "其他",
                        "v": "其他"
                    }
                ]
            },
            {
                "key": "年份",
                "name": "年份",
                "value": [
                    {
                        "n": "2024",
                        "v": "2024"
                    },
                    {
                        "n": "2023",
                        "v": "2023"
                    },
                    {
                        "n": "2022",
                        "v": "2022"
                    },
                    {
                        "n": "2021",
                        "v": "2021"
                    },
                    {
                        "n": "2020",
                        "v": "2020"
                    },
                    {
                        "n": "2019",
                        "v": "2019"
                    },
                    {
                        "n": "2018",
                        "v": "2018"
                    },
                    {
                        "n": "2017",
                        "v": "2017"
                    },
                    {
                        "n": "2016",
                        "v": "2016"
                    },
                    {
                        "n": "2015",
                        "v": "2015"
                    },
                    {
                        "n": "2014",
                        "v": "2014"
                    },
                    {
                        "n": "2013",
                        "v": "2013"
                    },
                    {
                        "n": "2012",
                        "v": "2012"
                    },
                    {
                        "n": "更早",
                        "v": "更早"
                    }
                ]
            },
            {
                "key": "排序",
                "name": "排序",
                "value": [
                    {
                        "n": "最近热播",
                        "v": ""
                    },
                    {
                        "n": "最近更新",
                        "v": "time"
                    },
                    {
                        "n": "评价最高",
                        "v": "score"
                    }
                ]
            }
        ]
    },
    // limit: 6,
    //double: false,
    play_parse: true,
    lazy: $js.toString(() => {
        let fg = input.split('?')
        input = fg[0]
        let jx = getxlsz(fg[1])
        var key = CryptoJS.enc.Utf8.parse("aasshjwwcbllsm1x");
        let data = getAESjiem(input, key).match(/data=([^&]+)/)[1]
        var key1 = CryptoJS.enc.Utf8.parse("bbssqdbbssll25sx");
        let data1 = getAESjiem(data, key1)
        let url
        for (let i = 0; i < jx.length; i++) {
            try {
                const response = fetch(jx[i] + data1);
                const url1 = JSON.parse(response).url;
                if (url1) {
                    url = url1;
                    break;
                }
            } catch (error) {

            }
        }
        input = {
            url: url,
            parse: 0,
            header: rule.headers
        }
    }),
    推荐: $js.toString(() => {
        let d = [];
        let data = fetch(input, {
            method: 'GET'
        })
        var key = CryptoJS.enc.Utf8.parse("aassddwwxxllsx1x");
        let data1 = JSON.parse(getAESjiem(data, key)).data
        let data2 = data1.banners
        data1.verLandList.forEach(it => {
            Array.prototype.push.apply(data2, it.vertical_lands)
        })
        data2.forEach(it => {
            let id = `http://103.88.35.251:8989/api.php/v1.player/details?vod_id=${it.vod_id}`;
            d.push({
                url: id,
                title: it.vod_name,
                img: it.vod_pic,
                desc: it.vod_remarks ? it.vod_remarks : it.vod_score,
            })
        });
        setResult(d)
    }),
    一级: $js.toString(() => {
        let d = [];
        let body = { "area": "全部地区", "rank": "按上新", "type": "全部类型", "type_id": parseInt(MY_CATE), "year": "全部年代" }
        let data = fetch(`http://103.88.35.251:8989/api.php/v1.classify/content?page=${MY_PAGE}`, {
            method: 'POST',
            body: body
        })
        var key = CryptoJS.enc.Utf8.parse("aassddwwxxllsx1x");
        let data1 = JSON.parse(getAESjiem(data, key)).data.video_list
        data1.forEach(it => {
            let id = `http://103.88.35.251:8989/api.php/v1.player/details?vod_id=${it.vod_id}`;
            d.push({
                url: id,
                title: it.vod_name,
                img: it.vod_pic,
                desc: it.vod_remarks ? it.vod_remarks : it.vod_score,
            })
        });
        setResult(d)
    }),
    二级: $js.toString(() => {
        var key = CryptoJS.enc.Utf8.parse("aassddwwxxllsx1x");
        let data = JSON.parse(getAESjiem(request(input), key)).data.detail
        log(JSON.stringify(data))
        let data1 = data.play_url_list
        let xianlu = []
        let result = []
        data1.forEach(it => {
            xianlu.push(it.show.replace("（广告误信）", ""))
            let lieb = []
            let xlname = it.from
            it.urls.forEach(itt => {
                lieb.push(`${itt.name}$${itt.url}?${xlname}`)
            })
            lieb = lieb.join('#')
            result.push(lieb)
        })
        VOD = {
            vod_name: data.vod_name,
            type_name: data.typeName,
            vod_year: data.vod_year,
            vod_area: data.vod_area,
            vod_remarks: data.vod_remarks,
            vod_actor: data.vod_actor,
            vod_director: data.vod_director,
            vod_content: data.vod_content.replace(/<p[^>]*?>|<\/p>/g, ''),
            vod_play_from: xianlu.join('$$$'),
            vod_play_url: result.join('$$$')
        }

    }),
    搜索: $js.toString(() => {
        let d = [];
        let data = fetch(input, {
            method: 'GET'
        })
        var key = CryptoJS.enc.Utf8.parse("aassddwwxxllsx1x");
        let data1 = JSON.parse(getAESjiem(data, key)).data.search_data
        data1.forEach(it => {
            let id = `http://103.88.35.251:8989/api.php/v1.player/details?vod_id=${it.vod_id}`;
            d.push({
                url: id,
                title: it.vod_name,
                img: it.vod_pic,
                desc: it.vod_remarks ? it.vod_remarks : it.vod_score,
            })
        });
        setResult(d)
    }),
}