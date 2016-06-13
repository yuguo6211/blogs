'use strict';

//let obj = require('basic');
//实例化vue对象
let vueMvvm = new Vue({
  el: '#container',
  data: {
  },
  methods: {
    comfirm:comfirm,
  }
});

//提交登录信息
function comfirm() {
  let username = $('.username').val().trim();
  let pwd = $('.pwd').val().trim();
  if(!username) {
    alert('用户名不能为空');
    $('.username').focus();
    return ;
  }
  if(!pwd) {
    alert('密码不能为空');
    $('.pwd').focus();
    return ;
  }
  let data =  {
    username:username,
    pwd: $.md5(pwd),
  };
  $.ajax({
    type:'post',
    url:'/login',
    data:data,
    success: function(e) {
      if(e.state) {
        setTimeout(()=> {
          location.href = '/admin/index';
        },1000)
      } else {
        alert(e.msg)
      }
    }
  })
}


particlesJS('bgWraper', {
  particles: {
    color: '#ccc',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#ccc',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
