'use strict';

$(document).ready(function () {
  //实例化vue对象
  var vueMvvm = new Vue({
    el: '#header',
    data: {
      header: HeaderJosn
    }
  });
});