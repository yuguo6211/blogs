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
  let username = $('.username').val();
  let pwd = $('.pwd').val();
  let arr = $.md5(pwd);
  console.log(pwd)
  console.log(arr)
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
