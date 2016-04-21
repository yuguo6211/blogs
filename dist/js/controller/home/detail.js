'use strict';

$(document).ready(function () {
  //实例化vue对象
  var vueMvvm = new Vue({
    el: '#container',
    data: {
      header: HeaderJosn,
      weblist: WebJosn
    }
  });
});