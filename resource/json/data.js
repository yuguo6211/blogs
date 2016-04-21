'use strict';

//导航
let HeaderJosn = [
  {'name':'首页','url':'/'},
  {'name':'前端开发','url':'/home/web'},
  {'name':'后端开发','url':'/home/admin'},
  {'name':'移动开发','url':'/home/mobile'},
  {'name':'数据处理','url':'/home/data'},
  {'name':'图片处理','url':'/home/picture'}
];
//前端开发
let WebJosn = [
  {'name':'HTML/CSS','url':'javascript:;','icon':'fa-cubes','active':'active'},
  {'name':'JavaScript','url':'javascript:;','icon':'fa-magic','active':''},
  {'name':'CSS3','url':'javascript:;','icon':'fa-css3','active':''},
  {'name':'Html5','url':'javascript:;','icon':'fa-html5','active':''},
  {'name':'JQuery','url':'javascript:;','icon':'fa-rocket','active':''},
  {'name':'AngularJS','url':'javascript:;','icon':'fa-map-signs','active':''},
  {'name':'NodeJs','url':'javascript:;','icon':'fa-object-group','active':''},
  {'name':'Bootstrap','url':'javascript:;','icon':'fa-paper-plane','active':''},
  {'name':'WebApp','url':'javascript:;','icon':'fa-gavel','active':''},
  {'name':'前端工具','url':'javascript:;','icon':'fa-wrench','active':''}
];
//后端开发
let Admin = [
  {'name':'PHP','url':'javascript:;','icon':'fa-paypal','active':'active'},
  {'name':'JAVA','url':'javascript:;','icon':'fa-fire','active':''},
  {'name':'Linux','url':'javascript:;','icon':'fa-linux','active':''},
  {'name':'Python','url':'javascript:;','icon':'fa-gg','active':''},
  {'name':'C','url':'javascript:;','icon':'fa-cc','active':''},
  {'name':'C++','url':'javascript:;','icon':'fa-eur','active':''},
  {'name':'Go','url':'javascript:;','icon':'fa-google','active':''},
  {'name':'C#','url':'javascript:;','icon':'fa-slack','active':''},
  {'name':'数据结构','url':'javascript:;','icon':'fa-puzzle-piece','active':''}
];
//移动开发
let Mobile = [
  {'name':'Android','url':'javascript:;','icon':'fa-android','active':'active'},
  {'name':'IOS','url':'javascript:;','icon':'fa-apple','active':''},
  {'name':'Unity 3D','url':'javascript:;','icon':'fa-cube','active':''},
  {'name':'Cocos2d-x','url':'javascript:;','icon':'fa-odnoklassniki','active':''}
];
//数据处理
let DataOperate = [
  {'name':'MySQL','url':'javascript:;','icon':'fa-houzz','active':'active'},
  {'name':'MongoDB','url':'javascript:;','icon':'fa-leaf','active':''},
  {'name':'云计算','url':'javascript:;','icon':'fa-cloud','active':''},
  {'name':'Oracle','url':'javascript:;','icon':'fa-stumbleupon','active':''},
  {'name':'大数据','url':'javascript:;','icon':'fa-hourglass-half','active':''},
  {'name':'SQL Server','url':'javascript:;','icon':'fa-object-ungroup','active':''}
];
//图像处理
let PictureOperate = [
  {'name':'Photoshop','url':'javascript:;','icon':'fa-picture-o','active':'active'},
  {'name':'Maya','url':'javascript:;','icon':'fa-scissors','active':''},
  {'name':'Premiere','url':'javascript:;','icon':'fa-file-image-o','active':''},
  {'name':'ZBrush','url':'javascript:;','icon':'fa-crop','active':''}
]
//首页数据
let ItemData = [
  {'name':'HTML','logo_url':'/src/images/home/html_logo.png','time':'2016-04-09','intro':'HTML：超文本标记语言，标准通用标记语言下的一个应用。','version':'html5'},
  {'name':'JQuery','logo_url':'/src/images/home/jquery_logo.png','time':'2016-04-19','intro':'JQuery是继prototype之后又一个优秀的Javascript库。它是轻量级的js库 ，它兼容CSS3，还兼容各种浏览器（IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+）。','version':'1.0.9.0'}
]

