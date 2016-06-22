(function() {
  let vueMvvm = new Vue({
    el: '#container',
    data: {
      itemdata: ItemData
    },
    methods: {
      subMenu:subMenu,
    }
  });

  function subMenu(event) {
    let obj = $(event.target).siblings('.two-item');
    let par = $(event.target).closest('li');
    par.siblings('li').find('.two-item').addClass('hidden');
    if(obj.hasClass('hidden')) {
      obj.removeClass('hidden');
    } else {
      obj.addClass('hidden');
    }
  }
})()
