var vueMvvm = '';
(function() {
  vueMvvm = new Vue({
    el: '#container',
    data: {
      proinfo:{}
    },
    methods: {
      addnew:addnew,
      closemodal:closemodal,
      confirm:confirm,
    }
  });
})()

function addnew() {
  $('#addmodal').fadeIn();
}

function confirm() {
  console.log(vueMvvm.proinfo)
}

function closemodal() {
  $('#addmodal').fadeOut();
}