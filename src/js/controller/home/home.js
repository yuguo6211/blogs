$(document).ready(function() {
  //导航前端高亮
  $('.header-list').find('li').eq(0).addClass('active');
  //实例化vue对象
  var vueMvvm = new Vue({
    el: '#container',
    data: {
      
    }
  });
});
