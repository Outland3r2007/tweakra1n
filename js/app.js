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
var preloaderDialog = app.dialog.preloader('Reloading data...');

preloaderDialog.open();

setTimeout(function() {
  preloaderDialog.close();
}, 3300);
function preventBackSwipe(event) {
  // Check if the swipe is from the left edge of the screen
  if (event.touches && event.touches.length && event.touches[0].clientX < 10) {
    event.preventDefault();
  }
}

// Attach event listeners to the document
document.addEventListener('touchstart', preventBackSwipe, { passive: false });
document.addEventListener('touchmove', preventBackSwipe, { passive: false });
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

