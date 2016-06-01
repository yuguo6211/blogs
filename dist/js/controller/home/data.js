'use strict';

$(document).ready(function () {
  //导航前端高亮
  $('.header-list').find('li').eq(4).addClass('active');
  //实例化vue对象
  var vueMvvm = new Vue({
    el: '#container',
    data: {
      weblist: DataOperate,
      itemdata: ItemData
    }
  });
});