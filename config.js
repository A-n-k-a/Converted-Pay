// 配置文件

const basic = { // 基础设置
    favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>', // 页面图标
    title: '(～￣▽￣)～', // 页面标题
    //avatar: 'https://gravatar.loli.net/avatar/', // 头像 URL
    avatar: 'https://avatars.githubusercontent.com/u/47747022?v=4',
    name: '不死鸟Anka', // 头像下的昵称
    sign: '不知大海之宽阔，却知晓天空之蓝 ( •̀ ω •́ )✧', // 个性签名或提示文字，可使用 HTML 格式
    user_page: 'https://github.com/A-n-k-a', // 非支付软件点击头像或名字时跳转链接。留空或删除则不跳转
    footer: `<script>
function show(){
var date = new Date(); //日期对象
var now = "";
now = date.getFullYear()+"年"; //读英文就行了
now = now + (date.getMonth()+1)+"月"; //取月的时候取的是当前月-1如果想取当前月+1就可以了
now = now + date.getDate()+"日";
now = now + date.getHours()+"时";
now = now + date.getMinutes()+"分";
now = now + date.getSeconds()+"秒";
document.getElementById("nowDiv").innerHTML = now; //div的html是now这个字符串
setTimeout("show()",1000); //设置过1000毫秒就是1秒，调用show方法
}
</script>
<body οnlοad="show()"> <!-- 网页加载时调用一次 以后就自动调用了-->
<div id="nowDiv"></div>
</body>`, // 页脚文字，可使用 HTML 格式
    uri_redirect: true // 若收款码 URL 是网址，是否直接跳转而不显示二维码
}

const theme = { // 主题设置
    page_bg: '#c3d7df', // 网页背景（十六进制，或图片 URL）
    card_bg: '#ffffffcc', // 卡片背景色（十六进制，可带透明度，不能是 URL）
    qrcode_bg: '#eaeffde6', // 二维码背景色（十六进制，可带透明度，不能是 URL）
    qrcode_fg: '#335eea' // 二维码颜色（十六进制，可带透明度，不能是 URL）
}

const tools = { // 右上角小工具设置
    dl_btn: true, // 二维码下载
    badge_generator: true // 徽章生成器
}

const urls = [ // 付款方式列表
    {
        name: '支付宝', // 名称
        ua: 'Alipay', // User-Agent 正则表达式
        addr: 'https://qr.alipay.com/awa' // 收款码 URL
    },
    {
        name: '微信',
        ua: 'MicroMessenger\/',
        img: 'wechat.png' // 使用 img 而非 addr 参数以使用赞赏码
    }
]
