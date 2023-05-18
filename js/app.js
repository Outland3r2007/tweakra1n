var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
    id: 'com.Outlander.tweakra1n',
    root: '#app',
    theme: theme,
    data: function() {
        return {
            user: {
                firstName: 'John',
                lastName: 'Appleseed',
            },
        };
    },
    methods: {
        helloWorld: function() {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    popup: {
        closeOnEscape: true,
         swipeToClose: true,
         closeByBackdropClick: true,
         push: true,
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    },
    card: {
    hideNavbarOnOpen: true,
    closeByBackdropClick: true,
  },
  serviceWorker: {
    path: 'service-worker.js',
  },
});
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});
//Preloader
var preloaderDialog = app.dialog.preloader('Reloading data...');

preloaderDialog.open();

setTimeout(function() {
  preloaderDialog.close();
}, 3300);
//Reset function
function reset() {

  const confirmed = confirm("Are you sure you want to reset tweakra1n?");

  if (confirmed) {
    var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "home.html";
    }
  }
}
//Dark theme
function toggleDarkMode() {
                                                                const htmlElement = document.querySelector('html');
                                                                const isDarkModeEnabled = htmlElement.classList.contains('dark');

                                                                if (isDarkModeEnabled) {
                                                                    htmlElement.classList.remove('dark');
                                                                    updateLampColor('light');
                                                                    document.cookie = 'darkModeEnabled=0; expires=Fri, 31 Dec 9999 23:59:59 GMT';
                                                                } else {
                                                                    htmlElement.classList.add('dark');
                                                                    updateLampColor('dark');
                                                                    document.cookie = 'darkModeEnabled=1; expires=Fri, 31 Dec 9999 23:59:59 GMT';
                                                                }
                                                            }
                                                            function applyDarkModeSetting() {
                                                                const htmlElement = document.querySelector('html');
                                                                const cookie = document.cookie;
                                                                const isDarkModeEnabled = cookie.split(';')
                                                                    .find(c => c.trim().startsWith('darkModeEnabled='))
                                                                    ?.split('=')[1] === '1';

                                                                if (isDarkModeEnabled) {
                                                                    htmlElement.classList.add('dark');
                                                                    updateLampColor('dark');
                                                                    toggleDarkMode_checkbox.checked = true
                                                                } else {
                                                                    htmlElement.classList.remove('dark');
                                                                    updateLampColor('light');
                                                                    toggleDarkMode_checkbox.checked = false
                                                                }
                                                            }
                                                            function updateLampColor(mode) {
                                                                const lampLinks = document.querySelectorAll('.tab-link');
                                                                const lamptabbar = document.querySelectorAll('.tabbar');
                                                                const color = mode === 'dark' ? '#fff' : '#000';

                                                                lampLinks.forEach(link => {
                                                                    link.style.setProperty('--lamp-color', color);
                                                                });
                                                                lamptabbar.forEach(link => {
                                                                    link.style.setProperty('--active-lamp-color', color);
                                                                });
                                                            }

                                                            applyDarkModeSetting();
                                           
