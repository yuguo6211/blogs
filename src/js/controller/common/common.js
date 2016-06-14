$(document).ready(function() {
  //实例化vue对象
  var vueMvvm = new Vue({
    el: '#header',
    data: {
      header: HeaderJosn
    }
  });

  /*particlesJS('particles', {
    particles: {
      color: '#000',
      shape: 'circle',
      opacity: 1,
      size: 4,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#000',
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
        distance: 300
      },
      detect_on: 'canvas', 
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });*/
});
