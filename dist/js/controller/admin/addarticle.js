'use strict';

(function () {
  var vueMvvm = new Vue({
    el: '#container',
    data: {},
    methods: {
      subMenu: subMenu
    }
  });

  function subMenu(event) {
    var obj = $(event.target).siblings('.two-item');
    var par = $(event.target).closest('li');
    par.siblings('li').find('.two-item').addClass('hidden');
    if (obj.hasClass('hidden')) {
      obj.removeClass('hidden');
    } else {
      obj.addClass('hidden');
    }
  }
})();