/*
锦鲤红包互助
create:2.28
入口：京东App>我的>锦鲤红包
https://t.me/proenv
export JD_KOI_CODE="xxxxxxxx"  助力指定的分享码,不会自动开红包，助力满则退出运行。
*/
const $ = new Env("锦鲤红包互助");
const JD_API_HOST = 'https://api.m.jd.com/client.action';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe2283=["","\x72\x61\x6E\x64\x6F\x6D\x4E\x75\x6D","\x6A\x6C\x4C\x6F\x67","\x63\x6F\x64\x65","\x61\x75\x74\x68\x6F\x72\x43\x6F\x64\x65","\x72\x65\x74\x75\x72\x6E\x46\x6C\x61\x67","\x62\x72\x65\x61\x6B\x46\x6C\x61\x67","\x63\x6F\x6E\x74\x69\x6E\x75\x65\x46\x6C\x61\x67","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x4A\x44\x5F\x4B\x4F\x49\x5F\x43\x4F\x44\x45","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\u4F60\u4E0D\u5728\x69\x70\u767D\u540D\u5355\u4E2D\uFF01","\x6C\x65\x6E\x67\x74\x68","\x63\x65\x69\x6C","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x69\x73\x4C\x6F\x67\x69\x6E","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\u672A\u8BBE\u7F6E\x4A\x44\x5F\x4B\x4F\x49\x5F\x43\x4F\x44\x45\x2C\u9ED8\u8BA4\u52A9\u529B\u7B2C\u4E00\u4E2A\u53F7\x2C\u52A9\u529B\u6EE1\u5219\u81EA\u52A8\u5207\u6362\u4E0B\u4E00\u4E2A","\u5DF2\u8BBE\u7F6E\x4A\x44\x5F\x4B\x4F\x49\x5F\x43\x4F\x44\x45\x2C\u52A9\u529B\u6EE1\u5219\u505C\u6B62","\x31\x38\x38\x36\x32\x39\x38\x38\x30\x32\x31\x5F\x70","\x6A\x69\x6E\x6C\x69\x5F\x68\x35\x61\x73\x73\x69\x73\x74","\x4A\x4C\x48\x42\x68\x50\x61\x67\x65\x68\x35","\x73\x74\x61\x74\x75\x73\x44\x65\x73\x63","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\u8D26\u53F7\u3010","\u3011\x20\u52A9\u529B\x3A\x20","\x20\x2D\x20","\u554A\u5076\uFF0C\x54\x41\u7684\u52A9\u529B\u5DF2\u6EE1\uFF0C\u5F00\u542F\u81EA\u5DF1\u7684\u7EA2\u5305\u6D3B\u52A8\u5427\x7E","\u68C0\u6D4B\u5230\u8BBE\u7F6E\u4E86\x4A\x44\x5F\x4B\x4F\x49\x5F\x43\x4F\x44\x45\x2C\x20\x54\x41\u7684\u52A9\u529B\u5DF2\u6EE1\u81EA\u52A8\u9000\u51FA","\u8BF7\u53BB\u4EAC\u4E1C\u5546\u57CE\x2D\x3E\u6211\u7684\x2D\x3E\u66F4\u591A\u6E38\u620F\x2D\x3E\u9526\u9CA4\u7EA2\u5305\u624B\u52A8\u5F00\u7EA2\u5305","\u7D2F\u79EF\u5230","\u706B\u7206\u503C\x2C\u6B47\u4E00\u6B47\u5C06\u9000\u51FA\u7A0B\u5E8F\x21\x21\x21","\x20\x2D\x20\u706B\u7206\x2C\x20\u4E0D\u8981\u9891\u7E41\u64CD\u4F5C\x21","\x54\x41\u7684\u52A9\u529B\u5DF2\u6EE1\x2C\x20\u81EA\u52A8\u5207\u6362\u4E0B\u4E00\u4E2A\u8D26\u53F7","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x68\x69\x66\x74","\u8BF7\u53BB\u624B\u673A\x61\x70\x70\x2C\x20\u624B\u52A8\u5F00\u7EA2\u5305\uFF01\uFF01\uFF01","\x2F\x61\x70\x69\x3F\x61\x70\x70\x69\x64\x3D\x6A\x69\x6E\x6C\x69\x68\x6F\x6E\x67\x62\x61\x6F\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x26\x6C\x6F\x67\x69\x6E\x54\x79\x70\x65\x3D\x32\x26\x63\x6C\x69\x65\x6E\x74\x3D\x6A\x69\x6E\x6C\x69\x68\x6F\x6E\x67\x62\x61\x6F\x26\x74\x3D","\x6E\x6F\x77","\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x30\x2E\x34\x2E\x34\x26\x6F\x73\x56\x65\x72\x73\x69\x6F\x6E\x3D\x2D\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x61\x70\x70\x79\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x61\x70\x70\x79\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C","\x55\x41","\x62\x6F\x64\x79\x3D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\u8BF7\u6C42","\u5931\u8D25\uFF0C\x72\x65\x73\x70\x3D","\uFF0C\x64\x61\x74\x61\x3D","\x2C\x20\x65\x3D","\x77\x61\x72\x6E","\x70\x6F\x73\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x67\x65\x74\x2F\x74\x6F\x6B\x65\x6E\x3F\x66\x6C\x61\x67\x3D\x6B\x6F\x69","\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x67\x65\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x67\x65\x74\x2F\x6B\x6F\x69\x6C\x6F\x67\x73","\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x73\x75\x62\x6D\x69\x74\x2F\x61\x75\x74\x68\x6F\x72\x3F\x63\x6F\x64\x65\x3D","\x26\x75\x73\x65\x72\x3D","\x26\x66\x6C\x61\x67\x3D\x6B\x6F\x69","\x20\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x67\x65\x74\x2F\x61\x75\x74\x68\x6F\x72\x3F\x66\x6C\x61\x67\x3D\x6B\x6F\x69","\x68\x35\x6C\x61\x75\x6E\x63\x68","\x73\x74\x61\x74\x75\x73","\u8D26\u53F7","\u706B\u7206\x20\x2D\x20\u542F\u52A8\u5931\u8D25","\u3011","\x68\x35\x61\x63\x74\x69\x76\x69\x74\x79\x49\x6E\x64\x65\x78","\u4E92\u52A9\u7801\x3A\x20","\x69\x64","\x72\x65\x64\x70\x61\x63\x6B\x65\x74\x49\x6E\x66\x6F","\u8D26\u53F7\u4E00\x20\x2D\x20\u706B\u7206\x20\x2D\x20\u83B7\u53D6\u4E0D\u5230\u52A9\u529B\u7801\x20\x2D\x20\u9000\u51FA","\u706B\u7206\x20\x2D\x20\u83B7\u53D6\u4E0D\u5230\u52A9\u529B\u7801","\u5DF2\u8FBE\u5230\u62C6\u7EA2\u5305\u6570\u91CF\u4E0A\u9650","\x6F\x62\x6A\x65\x63\x74","\x76\x61\x6C\x75\x65\x73","\x69\x73\x57\x68\x69\x74\x65","\u68C0\u6D4B\u5230\x4A\x44\x5F\x4B\x4F\x49\x5F\x43\x4F\x44\x45\x2C\x20\u8BF7\u53BB\u4EAC\u4E1C\u5546\u57CE\x2D\x3E\u6211\u7684\x2D\x3E\u66F4\u591A\u6E38\u620F\x2D\x3E\u9526\u9CA4\u7EA2\u5305\u624B\u52A8\u5F00\u7EA2\u5305","\u5185\u90E8\u4ECE\u524D\u5230\u540E\u4F9D\u6B21\u5F00\u7EA2\u5305","\u62C6\u7EA2\u5305","\x68\x35\x72\x65\x63\x65\x69\x76\x65\x52\x65\x64\x70\x61\x63\x6B\x65\x74\x41\x6C\x6C","\x62\x69\x7A\x5F\x63\x6F\x64\x65","\u9886\u53D6\u5230\x20","\x64\x69\x73\x63\x6F\x75\x6E\x74","\x20\u5143\u7EA2\u5305","\x69\x6E\x66\x6F","\u9886\u53D6\u7EA2\u5305\u5931\u8D25\uFF0C\u7ED3\u679C\u4E3A\x20","\x65\x72\x72\x6F\x72","\u5F02\u5E38\x3A\x20\u53BB\u4EAC\u4E1C\u5546\u57CE\x2D\x3E\u6211\u7684\x2D\x3E\u66F4\u591A\u6E38\u620F\x2D\x3E\u9526\u9CA4\u7EA2\u5305\u624B\u52A8\u5F00\u7EA2\u5305","\u4E0D\u7BA1\u6210\u529F\u8FD8\u662F\u4E0D\u6210\u529F\uFF0C\u4E0D\u8981\u9891\u7E41\u8FD0\u884C\u811A\u672C\x21\x21\x21","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x73\x75\x62\x6D\x69\x74\x2F\x6B\x6F\x69\x6C\x6F\x67\x73\x3F\x6C\x6F\x67\x3D","\x26\x6E\x75\x6D\x3D","\x67\x65\x74\x54\x69\x6D\x65","\x66\x6C\x6F\x6F\x72","\x31\x32\x2E\x30","\x31\x32\x2E\x31","\x31\x32\x2E\x32","\x31\x32\x2E\x33","\x31\x32\x2E\x34","\x31\x32\x2E\x35","\x31\x33\x2E\x30","\x31\x33\x2E\x31","\x31\x33\x2E\x32","\x31\x33\x2E\x33","\x31\x33\x2E\x34","\x31\x33\x2E\x35","\x31\x33\x2E\x36","\x31\x33\x2E\x37","\x31\x34\x2E\x30","\x31\x34\x2E\x31","\x31\x34\x2E\x32","\x31\x34\x2E\x33","\x31\x34\x2E\x34","\x31\x34\x2E\x35","\x31\x34\x2E\x36","\x31\x34\x2E\x37","\x31\x34\x2E\x38","\x31\x35\x2E\x30","\x31\x35\x2E\x31","\x31\x35\x2E\x32","\x31\x35\x2E\x33","\x2E","\x5F","\x72\x65\x70\x6C\x61\x63\x65","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20","\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x3B\x20\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x62\x63\x64\x65\x66\x68\x69\x6A\x6B\x6D\x6E\x70\x72\x73\x74\x77\x78\x79\x7A\x32\x33\x34\x35\x36\x37\x38","\x63\x68\x61\x72\x41\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x5F\x6E\x65\x77\x2F\x69\x6E\x66\x6F\x2F\x47\x65\x74\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x55\x6E\x69\x6F\x6E","\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D","\x2A\x2F\x2A","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x34\x2E\x30\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31","\x7A\x68\x2D\x63\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x75\x66\x63\x3D\x26","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x6C\x6F\x67\x45\x72\x72","\x72\x65\x74\x63\x6F\x64\x65","\x31\x30\x30\x31","\x30","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x62\x61\x73\x65\x49\x6E\x66\x6F","\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxe2283[0x0];let ckLength=0;let errNum=0;let openNum=11;let errNumMax=50;let showCodeNum=3;let shareCodes=[];let shareCodess=[];let koilogs=__Oxe2283[0x0];let fullCodes=[];let openReds=[];let isKoiCode=false;$[__Oxe2283[0x1]]= __Oxe2283[0x0];$[__Oxe2283[0x2]]= __Oxe2283[0x0];$[__Oxe2283[0x3]]= __Oxe2283[0x0];$[__Oxe2283[0x4]]= __Oxe2283[0x0];$[__Oxe2283[0x5]]= false;$[__Oxe2283[0x6]]= false;$[__Oxe2283[0x7]]= false;if($[__Oxe2283[0x8]]()){Object[__Oxe2283[0xb]](jdCookieNode)[__Oxe2283[0xa]]((_0xea53xe)=>{if(jdCookieNode[_0xea53xe]){cookiesArr[__Oxe2283[0x9]](jdCookieNode[_0xea53xe])}});if(process[__Oxe2283[0xd]][__Oxe2283[0xc]]&& process[__Oxe2283[0xd]][__Oxe2283[0xc]]=== __Oxe2283[0xe]){console[__Oxe2283[0xf]]= ()=>{}};if(process[__Oxe2283[0xd]][__Oxe2283[0x10]]){$[__Oxe2283[0x3]]= process[__Oxe2283[0xd]][__Oxe2283[0x10]];isKoiCode= true}};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxe2283[0x1a]]($[__Oxe2283[0x14]],__Oxe2283[0x18],__Oxe2283[0x19],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe2283[0x19]});return};let _0xea53x10= await rw();if(!_0xea53x10|| _0xea53x10[__Oxe2283[0x3]]!= 0){console[__Oxe2283[0xf]](`${__Oxe2283[0x1b]}`);return};ckLength= cookiesArr[__Oxe2283[0x1c]];showCodeNum= ckLength<= 120?1:Math[__Oxe2283[0x1d]](ckLength/ 120);if(showCodeNum>= 6){showCodeNum= 6};for(let _0xea53x11=0;_0xea53x11< cookiesArr[__Oxe2283[0x1c]];_0xea53x11++){$[__Oxe2283[0x6]]= false;$[__Oxe2283[0x7]]= false;cookie= cookiesArr[_0xea53x11];$[__Oxe2283[0x1e]]= decodeURIComponent(cookie[__Oxe2283[0x1f]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxe2283[0x1f]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxe2283[0x20]]= _0xea53x11+ 1;$[__Oxe2283[0x21]]= __Oxe2283[0x0];$[__Oxe2283[0x22]]= true; await checkCookie();if(!$[__Oxe2283[0x22]]){$[__Oxe2283[0x1a]]($[__Oxe2283[0x14]],`${__Oxe2283[0x23]}`,`${__Oxe2283[0x24]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x25]}${$[__Oxe2283[0x21]]|| $[__Oxe2283[0x1e]]}${__Oxe2283[0x26]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe2283[0x19]});if($[__Oxe2283[0x8]]()){};continue}; await getIphoneUA(); await geth5activityIndex();if($[__Oxe2283[0x6]]){break};if($[__Oxe2283[0x7]]){}};if($[__Oxe2283[0x5]]=== true){return}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 1000+ 2500,10));try{if(process[__Oxe2283[0xd]][__Oxe2283[0x10]]){$[__Oxe2283[0x3]]= process[__Oxe2283[0xd]][__Oxe2283[0x10]]}else {if(shareCodes[0x0]){$[__Oxe2283[0x3]]= shareCodes[0x0]}else {$[__Oxe2283[0x3]]= __Oxe2283[0x0]}}}catch(e){$[__Oxe2283[0x3]]= __Oxe2283[0x0]};if(!process[__Oxe2283[0xd]][__Oxe2283[0x10]]){console[__Oxe2283[0xf]](`${__Oxe2283[0x29]}`); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 3000,10))}else {console[__Oxe2283[0xf]](`${__Oxe2283[0x2a]}`); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 3000,10))};$[__Oxe2283[0x4]]=  await rc();for(let _0xea53x12=0;_0xea53x12< cookiesArr[__Oxe2283[0x1c]];_0xea53x12++){$[__Oxe2283[0x5]]= false;cookie= cookiesArr[_0xea53x12];$[__Oxe2283[0x1e]]= decodeURIComponent(cookie[__Oxe2283[0x1f]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxe2283[0x1f]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxe2283[0x20]]= _0xea53x12+ 1;$[__Oxe2283[0x21]]= __Oxe2283[0x0];$[__Oxe2283[0x22]]= true; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 2000,10)); await checkCookie();if(!$[__Oxe2283[0x22]]){$[__Oxe2283[0x1a]]($[__Oxe2283[0x14]],`${__Oxe2283[0x23]}`,`${__Oxe2283[0x24]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x25]}${$[__Oxe2283[0x21]]|| $[__Oxe2283[0x1e]]}${__Oxe2283[0x26]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe2283[0x19]});if($[__Oxe2283[0x8]]()){};continue}; await getIphoneUA(); await getrl();if(isKoiCode&& $[__Oxe2283[0x3]]){try{if($[__Oxe2283[0x4]]&& $[__Oxe2283[0x1]]){if(($[__Oxe2283[0x20]]== 1|| $[__Oxe2283[0x20]]== 2|| $[__Oxe2283[0x20]]== 3)&& $[__Oxe2283[0x1e]]!= __Oxe2283[0x2b]){let _0xea53x13= await api(__Oxe2283[0x2c],{"\x72\x65\x64\x50\x61\x63\x6B\x65\x74\x49\x64":$[__Oxe2283[0x4]],"\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70":0,"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]){ await sl(); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 20000+ 35000,10))};continue}else {if($[__Oxe2283[0x20]]== 1|| $[__Oxe2283[0x20]]== 2|| $[__Oxe2283[0x20]]== 3){continue}}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2500+ 2500,10))}}catch(e){ await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2500+ 2500,10));continue};try{if($[__Oxe2283[0x1]]){let _0xea53x13= await api(__Oxe2283[0x2c],{"\x72\x65\x64\x50\x61\x63\x6B\x65\x74\x49\x64":$[__Oxe2283[0x3]],"\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70":0,"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]){console[__Oxe2283[0xf]](`${__Oxe2283[0x31]}${$[__Oxe2283[0x1e]]}${__Oxe2283[0x32]}${$[__Oxe2283[0x3]]}${__Oxe2283[0x33]}${_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]}${__Oxe2283[0x0]}`); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 20000+ 35000,10));if(_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]== __Oxe2283[0x34]){console[__Oxe2283[0xf]](__Oxe2283[0x35]);console[__Oxe2283[0xf]](__Oxe2283[0x36]);$[__Oxe2283[0x5]]= true;break}}}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 2500,10))}catch(e){if(errNum>= errNumMax){console[__Oxe2283[0xf]](`${__Oxe2283[0x37]}${errNumMax}${__Oxe2283[0x38]}`);$[__Oxe2283[0x5]]= true;break};console[__Oxe2283[0xf]](`${__Oxe2283[0x31]}${$[__Oxe2283[0x1e]]}${__Oxe2283[0x32]}${$[__Oxe2283[0x3]]}${__Oxe2283[0x39]}`);errNum++; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 10000+ 15000,10))}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2500+ 2500,10))}else {if(!isKoiCode&& $[__Oxe2283[0x3]]){try{if($[__Oxe2283[0x4]]&& $[__Oxe2283[0x1]]){if(($[__Oxe2283[0x20]]== 1|| $[__Oxe2283[0x20]]== 2|| $[__Oxe2283[0x20]]== 3)&& $[__Oxe2283[0x1e]]!= __Oxe2283[0x2b]){let _0xea53x13= await api(__Oxe2283[0x2c],{"\x72\x65\x64\x50\x61\x63\x6B\x65\x74\x49\x64":$[__Oxe2283[0x4]],"\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70":0,"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]){ await sl(); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 20000+ 35000,10))};continue}else {if($[__Oxe2283[0x20]]== 1|| $[__Oxe2283[0x20]]== 2|| $[__Oxe2283[0x20]]== 3){continue}}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 2500,10))}}catch(e){ await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 2500,10));continue};try{if($[__Oxe2283[0x1]]){let _0xea53x13= await api(__Oxe2283[0x2c],{"\x72\x65\x64\x50\x61\x63\x6B\x65\x74\x49\x64":$[__Oxe2283[0x3]],"\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70":0,"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]){console[__Oxe2283[0xf]](`${__Oxe2283[0x31]}${$[__Oxe2283[0x1e]]}${__Oxe2283[0x32]}${$[__Oxe2283[0x3]]}${__Oxe2283[0x33]}${_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]}${__Oxe2283[0x0]}`); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 20000+ 35000,10));if(_0xea53x13[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x2e]]== __Oxe2283[0x34]){console[__Oxe2283[0xf]](__Oxe2283[0x3a]);if(!fullCodes[__Oxe2283[0x3b]]($[__Oxe2283[0x3]])){fullCodes[__Oxe2283[0x9]]($[__Oxe2283[0x3]])};shareCodes[__Oxe2283[0x3c]]();$[__Oxe2283[0x3]]= shareCodes[0x0]}}}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 2500,10))}catch(e){if(errNum>= errNumMax){console[__Oxe2283[0xf]](`${__Oxe2283[0x37]}${errNumMax}${__Oxe2283[0x38]}`);$[__Oxe2283[0x5]]= true;break};console[__Oxe2283[0xf]](`${__Oxe2283[0x31]}${$[__Oxe2283[0x1e]]}${__Oxe2283[0x32]}${$[__Oxe2283[0x3]]}${__Oxe2283[0x39]}`);errNum++; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 10000+ 15000,10))}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2500+ 2500,10))}}};if($[__Oxe2283[0x5]]=== true){return}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 3000,10));console[__Oxe2283[0xf]](`${__Oxe2283[0x3d]}`);console[__Oxe2283[0xf]](`${__Oxe2283[0x3d]}`);console[__Oxe2283[0xf]](`${__Oxe2283[0x3d]}`)})()[__Oxe2283[0x17]]((_0xea53xf)=>{$[__Oxe2283[0xf]](__Oxe2283[0x0],`${__Oxe2283[0x13]}${$[__Oxe2283[0x14]]}${__Oxe2283[0x15]}${_0xea53xf}${__Oxe2283[0x16]}`,__Oxe2283[0x0])})[__Oxe2283[0x12]](()=>{$[__Oxe2283[0x11]]()});async function api(_0xea53x15,_0xea53x16= {}){let _0xea53x17=`${__Oxe2283[0x0]}${JD_API_HOST}${__Oxe2283[0x3e]}${_0xea53x15}${__Oxe2283[0x3f]}${Date[__Oxe2283[0x40]]()}${__Oxe2283[0x41]}`; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 1000+ 1000,10));return  new Promise(async (_0xea53x18)=>{ await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 1000+ 1000,10));$[__Oxe2283[0x4f]]({url:_0xea53x17,headers:{"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x6F\x72\x69\x67\x69\x6E":__Oxe2283[0x42],"\x72\x65\x66\x65\x72\x65\x72":__Oxe2283[0x43],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe2283[0x44],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxe2283[0x45],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxe2283[0x46]]},body:`${__Oxe2283[0x47]}${encodeURIComponent(JSON[__Oxe2283[0x48]](_0xea53x16))}${__Oxe2283[0x0]}`},(_0xea53x19,_0xea53x1a,_0xea53x1b)=>{try{_0xea53x1b= JSON[__Oxe2283[0x49]](_0xea53x1b)}catch(e){console[__Oxe2283[0x4e]](`${__Oxe2283[0x4a]}${_0xea53x15}${__Oxe2283[0x4b]}${JSON[__Oxe2283[0x48]](_0xea53x1a)}${__Oxe2283[0x4c]}${JSON[__Oxe2283[0x48]](_0xea53x1b)}${__Oxe2283[0x4d]}${JSON[__Oxe2283[0x48]](e)}${__Oxe2283[0x0]}`)}finally{_0xea53x18(_0xea53x1b)}})})}function rw(){return  new Promise(async (_0xea53x18)=>{$[__Oxe2283[0x52]]({url:`${__Oxe2283[0x50]}`,timeout:20000},(_0xea53x1d,_0xea53x1a,_0xea53x1b)=>{try{if(_0xea53x1d){console[__Oxe2283[0xf]](`${__Oxe2283[0x51]}`)}else {if(_0xea53x1b&& safeGet(_0xea53x1b)){_0xea53x1b= JSON[__Oxe2283[0x49]](_0xea53x1b)}else {_0xea53x1b= _0xea53x1b}}}catch(e){_0xea53x1b= __Oxe2283[0x0]}finally{_0xea53x18(_0xea53x1b)}})})}function rl(){return  new Promise(async (_0xea53x18)=>{$[__Oxe2283[0x52]]({url:`${__Oxe2283[0x53]}`,timeout:30000},(_0xea53x1d,_0xea53x1a,_0xea53x1b)=>{try{if(_0xea53x1d){console[__Oxe2283[0xf]](`${__Oxe2283[0x54]}`)}else {if(_0xea53x1b&& safeGet(_0xea53x1b)){_0xea53x1b= JSON[__Oxe2283[0x49]](_0xea53x1b)}else {_0xea53x1b= _0xea53x1b}}}catch(e){_0xea53x1b= __Oxe2283[0x0]}finally{_0xea53x18(_0xea53x1b)}})})}function sc(_0xea53x20,_0xea53x21){return  new Promise(async (_0xea53x18)=>{$[__Oxe2283[0x52]]({url:`${__Oxe2283[0x55]}${_0xea53x20}${__Oxe2283[0x56]}${_0xea53x21}${__Oxe2283[0x57]}`,timeout:20000},(_0xea53x1d,_0xea53x1a,_0xea53x1b)=>{try{if(_0xea53x1d){console[__Oxe2283[0xf]](`${__Oxe2283[0x0]}${$[__Oxe2283[0x14]]}${__Oxe2283[0x58]}`)}else {}}catch(e){}finally{_0xea53x18()}})})}function rc(){return  new Promise(async (_0xea53x18)=>{$[__Oxe2283[0x52]]({url:`${__Oxe2283[0x59]}`,timeout:20000},(_0xea53x1d,_0xea53x1a,_0xea53x1b)=>{try{if(_0xea53x1d){console[__Oxe2283[0xf]](`${__Oxe2283[0x0]}${$[__Oxe2283[0x14]]}${__Oxe2283[0x58]}`)}else {if(_0xea53x1b&& safeGet(_0xea53x1b)){_0xea53x1b= JSON[__Oxe2283[0x49]](_0xea53x1b)}else {_0xea53x1b= _0xea53x1b}}}catch(e){_0xea53x1b= __Oxe2283[0x0]}finally{_0xea53x18(_0xea53x1b)}})})}async function getLauch(){ await getrl();return  new Promise(async (_0xea53x18)=>{try{if($[__Oxe2283[0x1]]){let _0xea53x1b= await api(__Oxe2283[0x5a],{"\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70":1,"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x1b[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x5b]]== 1){console[__Oxe2283[0xf]](`${__Oxe2283[0x5c]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x0]}`,__Oxe2283[0x5d])}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 5000,10))}}catch(e){console[__Oxe2283[0xf]](`${__Oxe2283[0x5c]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x0]}`,__Oxe2283[0x5d]); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 5000,10))};_0xea53x18()})}async function geth5activityIndex(){$[__Oxe2283[0x6]]= false;$[__Oxe2283[0x7]]= false; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 1000+ 500,10));return  new Promise(async (_0xea53x18)=>{try{console[__Oxe2283[0xf]](`${__Oxe2283[0x31]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x5e]}${$[__Oxe2283[0x1e]]}${__Oxe2283[0x0]}`);data=  await api(__Oxe2283[0x5f],{"\x69\x73\x6A\x64\x61\x70\x70":1}); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 1000+ 4500,10));if(data[__Oxe2283[0x30]][__Oxe2283[0x3]]== 20001){console[__Oxe2283[0xf]](`${__Oxe2283[0x60]}${data[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x62]][__Oxe2283[0x61]]}${__Oxe2283[0x0]}`);shareCodes[__Oxe2283[0x9]](data[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x62]][__Oxe2283[0x61]]);shareCodess[$[__Oxe2283[0x20]]- 1]= data[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x62]][__Oxe2283[0x61]];if(data[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x62]][__Oxe2283[0x61]]&& $[__Oxe2283[0x20]]- 1== 0){let _0xea53x20=data[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x62]][__Oxe2283[0x61]];let _0xea53x21=$[__Oxe2283[0x1e]];if(_0xea53x21== __Oxe2283[0x2b]){ await sc(_0xea53x20,_0xea53x21)}}}else {if(data[__Oxe2283[0x30]][__Oxe2283[0x3]]== 10002){if($[__Oxe2283[0x20]]- 1== 0){console[__Oxe2283[0xf]](`${__Oxe2283[0x5c]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x0]}`,__Oxe2283[0x63]);$[__Oxe2283[0x5]]= true;$[__Oxe2283[0x7]]= true}else {console[__Oxe2283[0xf]](`${__Oxe2283[0x5c]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x0]}`,__Oxe2283[0x64]);$[__Oxe2283[0x7]]= true}}else {if(data[__Oxe2283[0x30]][__Oxe2283[0x3]]== 20002){console[__Oxe2283[0xf]](`${__Oxe2283[0x5c]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x0]}`,__Oxe2283[0x65]);$[__Oxe2283[0x7]]= true}}}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2500+ 2500,10));if($[__Oxe2283[0x20]]>= showCodeNum){$[__Oxe2283[0x6]]= true}}catch(e){console[__Oxe2283[0xf]](`${__Oxe2283[0x5c]}${$[__Oxe2283[0x20]]}${__Oxe2283[0x0]}`,__Oxe2283[0x64]); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 3500,10))};_0xea53x18()})}function safeGet(_0xea53x1b){try{if( typeof JSON[__Oxe2283[0x49]](_0xea53x1b)== __Oxe2283[0x66]){return true}}catch(e){return false}}async function getrl(){ await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 3500+ 600,10));return  new Promise(async (_0xea53x18)=>{koilogs=  await rl();if(koilogs&& koilogs[__Oxe2283[0x3]]== 0){$[__Oxe2283[0x1]]= String(Object[__Oxe2283[0xb]](koilogs[__Oxe2283[0x30]])[0x0]);$[__Oxe2283[0x2]]= String(Object[__Oxe2283[0x67]](koilogs[__Oxe2283[0x30]])[0x0]);$[__Oxe2283[0x68]]= false}else { await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2500+ 2500,10))};_0xea53x18()})}async function autoOpenRed(){return  new Promise(async (_0xea53x18)=>{try{if(isKoiCode){console[__Oxe2283[0xf]](__Oxe2283[0x69])}else {console[__Oxe2283[0xf]](__Oxe2283[0x6a]);if(fullCodes[__Oxe2283[0x1c]]>= 1){if(!fullCodes[__Oxe2283[0x3b]]($[__Oxe2283[0x3]])){fullCodes[__Oxe2283[0x9]]($[__Oxe2283[0x3]])};for(let _0xea53x28 in shareCodess){for(let _0xea53x29=0;_0xea53x29< fullCodes[__Oxe2283[0x1c]];_0xea53x29++){if(shareCodess[_0xea53x28]== fullCodes[_0xea53x29]){openReds[__Oxe2283[0x9]](_0xea53x28)}}};for(let _0xea53x2a of openReds){console[__Oxe2283[0xf]](__Oxe2283[0x6b]);cookie= cookiesArr[_0xea53x2a]; await getIphoneUA();for(let _0xea53x2b=0;_0xea53x2b< openNum;_0xea53x2b++){try{ await getrl();if($[__Oxe2283[0x1]]){let _0xea53x1a= await api(__Oxe2283[0x6c],{"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x1a[__Oxe2283[0x30]][__Oxe2283[0x6d]]== 0){console[__Oxe2283[0x71]](`${__Oxe2283[0x6e]}${_0xea53x1a[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x6f]]}${__Oxe2283[0x70]}`)}else {console[__Oxe2283[0x73]](`${__Oxe2283[0x72]}${JSON[__Oxe2283[0x48]](_0xea53x1a)}${__Oxe2283[0x0]}`);break}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 20000+ 35000,10))}}catch(e){console[__Oxe2283[0xf]](__Oxe2283[0x74]); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 3000+ 3500,10))}};console[__Oxe2283[0xf]](__Oxe2283[0x75])}}else {console[__Oxe2283[0xf]](__Oxe2283[0x6b]);cookie= cookiesArr[0x0]; await getIphoneUA();for(let _0xea53x2b=0;_0xea53x2b< openNum;_0xea53x2b++){try{ await getrl();if($[__Oxe2283[0x1]]){let _0xea53x1a= await api(__Oxe2283[0x6c],{"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe2283[0x1]],"\x6C\x6F\x67":$[__Oxe2283[0x2]],"\x73\x63\x65\x6E\x65\x69\x64":__Oxe2283[0x2d]});if(_0xea53x1a[__Oxe2283[0x30]][__Oxe2283[0x6d]]== 0){console[__Oxe2283[0x71]](`${__Oxe2283[0x6e]}${_0xea53x1a[__Oxe2283[0x30]][__Oxe2283[0x2f]][__Oxe2283[0x6f]]}${__Oxe2283[0x70]}`)}else {console[__Oxe2283[0x73]](`${__Oxe2283[0x72]}${JSON[__Oxe2283[0x48]](_0xea53x1a)}${__Oxe2283[0x0]}`);break}; await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 20000+ 35000,10))}}catch(e){console[__Oxe2283[0xf]](__Oxe2283[0x74]); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 3000+ 3500,10))}};console[__Oxe2283[0xf]](__Oxe2283[0x75])}}}catch(e){console[__Oxe2283[0xf]](__Oxe2283[0x74]); await $[__Oxe2283[0x28]](parseInt(Math[__Oxe2283[0x27]]()* 2000+ 3000,10))};_0xea53x18()})}function sl(){return  new Promise(async (_0xea53x18)=>{$[__Oxe2283[0x52]]({url:`${__Oxe2283[0x76]}${$[__Oxe2283[0x2]]}${__Oxe2283[0x77]}${$[__Oxe2283[0x1]]}${__Oxe2283[0x0]}`,timeout:20000},(_0xea53x1d,_0xea53x1a,_0xea53x1b)=>{try{if(_0xea53x1d){}else {}}catch(e){}finally{_0xea53x18()}})})}function gettimestamp(){let _0xea53x2e= new Date()[__Oxe2283[0x78]]();return `${__Oxe2283[0x0]}${_0xea53x2e}${__Oxe2283[0x0]}`}function random(_0xea53x30,_0xea53x31){let _0xea53x32=Math[__Oxe2283[0x79]](Math[__Oxe2283[0x27]]()* (_0xea53x31- _0xea53x30))+ _0xea53x30;return `${__Oxe2283[0x0]}${_0xea53x32}${__Oxe2283[0x0]}`}function getIphoneVersion(){let _0xea53x34=[__Oxe2283[0x7a],__Oxe2283[0x7b],__Oxe2283[0x7c],__Oxe2283[0x7d],__Oxe2283[0x7e],__Oxe2283[0x7f],__Oxe2283[0x80],__Oxe2283[0x81],__Oxe2283[0x82],__Oxe2283[0x83],__Oxe2283[0x84],__Oxe2283[0x85],__Oxe2283[0x86],__Oxe2283[0x87],__Oxe2283[0x88],__Oxe2283[0x89],__Oxe2283[0x8a],__Oxe2283[0x8b],__Oxe2283[0x8c],__Oxe2283[0x8d],__Oxe2283[0x8e],__Oxe2283[0x8f],__Oxe2283[0x90],__Oxe2283[0x91],__Oxe2283[0x92],__Oxe2283[0x93],__Oxe2283[0x94]];return _0xea53x34[random(0,_0xea53x34[__Oxe2283[0x1c]])]}function getIphoneUA(){getVersion= getIphoneVersion();getVersion1= getVersion[__Oxe2283[0x97]](__Oxe2283[0x95],__Oxe2283[0x96]);$[__Oxe2283[0x46]]= `${__Oxe2283[0x98]}${getVersion1}${__Oxe2283[0x99]}`}function randomString(_0xea53xf){_0xea53xf= _0xea53xf|| 32;let _0xea53x37=__Oxe2283[0x9a],_0xea53x38=_0xea53x37[__Oxe2283[0x1c]],_0xea53x39=__Oxe2283[0x0];for(i= 0;i< _0xea53xf;i++){_0xea53x39+= _0xea53x37[__Oxe2283[0x9b]](Math[__Oxe2283[0x79]](Math[__Oxe2283[0x27]]()* _0xea53x38))};return _0xea53x39}function checkCookie(){const _0xea53x3b={url:__Oxe2283[0x9c],headers:{"\x48\x6F\x73\x74":__Oxe2283[0x9d],"\x41\x63\x63\x65\x70\x74":__Oxe2283[0x9e],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxe2283[0x9f],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxe2283[0xa0],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxe2283[0xa1],"\x52\x65\x66\x65\x72\x65\x72":__Oxe2283[0xa2],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxe2283[0xa3]}};return  new Promise((_0xea53x18)=>{$[__Oxe2283[0x52]](_0xea53x3b,(_0xea53x1d,_0xea53x1a,_0xea53x1b)=>{try{if(_0xea53x1d){$[__Oxe2283[0xa4]](_0xea53x1d)}else {if(_0xea53x1b){_0xea53x1b= JSON[__Oxe2283[0x49]](_0xea53x1b);if(_0xea53x1b[__Oxe2283[0xa5]]== __Oxe2283[0xa6]){$[__Oxe2283[0x22]]= false;return}else {$[__Oxe2283[0x22]]= true;return};if(_0xea53x1b[__Oxe2283[0xa5]]=== __Oxe2283[0xa7]&& _0xea53x1b[__Oxe2283[0x30]][__Oxe2283[0xa9]](__Oxe2283[0xa8])){$[__Oxe2283[0x21]]= _0xea53x1b[__Oxe2283[0x30]][__Oxe2283[0xa8]][__Oxe2283[0xab]][__Oxe2283[0xaa]]}}else {$[__Oxe2283[0xf]](__Oxe2283[0xac])}}}catch(e){$[__Oxe2283[0xa4]](e)}finally{_0xea53x18()}})})}(function(_0xea53x3c,_0xea53x3d,_0xea53x3e,_0xea53x3f,_0xea53x40,_0xea53x12){_0xea53x12= __Oxe2283[0xad];_0xea53x3f= function(_0xea53x41){if( typeof alert!== _0xea53x12){alert(_0xea53x41)};if( typeof console!== _0xea53x12){console[__Oxe2283[0xf]](_0xea53x41)}};_0xea53x3e= function(_0xea53x38,_0xea53x3c){return _0xea53x38+ _0xea53x3c};_0xea53x40= _0xea53x3e(__Oxe2283[0xae],_0xea53x3e(_0xea53x3e(__Oxe2283[0xaf],__Oxe2283[0xb0]),__Oxe2283[0xb1]));try{_0xea53x3c= __encode;if(!( typeof _0xea53x3c!== _0xea53x12&& _0xea53x3c=== _0xea53x3e(__Oxe2283[0xb2],__Oxe2283[0xb3]))){_0xea53x3f(_0xea53x40)}}catch(e){_0xea53x3f(_0xea53x40)}})({})


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}