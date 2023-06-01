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

// Initialise App
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
         swipeToClose: 'to-bottom',
    },
    card: {
    hideNavbarOnOpen: true,
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
    path: './service-worker.js',
  },
});
}
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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
function redirectToURL(url) {
  window.location.href = url;
}
//Old navbar
function tabbar() {
	
}

const isChecked = localStorage.getItem('togglePreference') === 'true';

const toggleSwitch = document.getElementById('toggle-switch');

const updateToolbarClass = () => {
  const toolbar = document.querySelector('.toolbar');
  const toolbarInner = document.querySelector('.toolbar-inner');
  if (toggleSwitch.checked) {
    toolbar.classList.remove('lamp-tabbar', 'tabbar-highlight');
    toolbarInner.style.marginLeft = '10px';
  } else {
    toolbar.classList.add('lamp-tabbar', 'tabbar-highlight');
    toolbarInner.style.marginLeft = '';
  }
};


const saveTogglePreference = () => {
  localStorage.setItem('togglePreference', toggleSwitch.checked);
};

toggleSwitch.checked = isChecked;

toggleSwitch.addEventListener('change', updateToolbarClass);
toggleSwitch.addEventListener('change', saveTogglePreference);

updateToolbarClass();

//Reduce Motion
function animated() {
	
}
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

const animationToggle = document.getElementById('animation-toggle');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.css';

animationToggle.addEventListener('change', function() {
  if (animationToggle.checked) {
   
    if (stylesheet.parentNode) {
      stylesheet.parentNode.removeChild(stylesheet);
    }
    setCookie('animationPreference', 'disabled', 30);
  } else {
     document.head.appendChild(stylesheet);
    setCookie('animationPreference', 'enabled', 30);
  }
});

const animationPreference = getCookie('animationPreference');
if (animationPreference === 'disabled') {
  animationToggle.checked = true; 
  if (stylesheet.parentNode) {
    stylesheet.parentNode.removeChild(stylesheet);
  }
} else {
  animationToggle.checked = false; 
  document.head.appendChild(stylesheet);
}
// Reset
function reset() {
  app.dialog.confirm(
    "Are you sure you want to reset tweakra1n?",
    "Reset",
    () => {
      app.dialog.progress('Resetting...', 'infinite'); // Show the infinite progress dialog

      setTimeout(() => {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }

        localStorage.clear();

        hideInfiniteProgress(); // Hide the infinite progress dialog
        window.location.href = "app.html";
      }, 3000);
    }
  );
}

//Use in web
function hs() {
  app.dialog.confirm(
    "Some features will not be available.", 
    "Use in web?", 
    () => { 
      app.popup.close('#hs');
    }
  );
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
                                           
// Accent color
function color() {
	
}
var colors = [
  { name: 'Default', value: '#3E84F6' },
  { name: 'Red', value: '#FF6347' },
  { name: 'Green', value: '#32CD32' },
  { name: 'Orange', value: 'orange' },
  { name: 'Pink', value: 'pink' },
  { name: 'Grey', value: 'grey' }
];

var colorButton = document.querySelector('.open-color-picker');
var colorPicker = null;

function initializeColorPicker() {
  
  colorPicker = app.picker.create({
    openIn: 'auto',
    inputEl: colorButton,
    rotateEffect: true,
    sheetPush: true,
    sheetSwipeToClose: true,
    cols: [
      {
        textAlign: 'center',
        values: colors.map(function (color) {
          return color.name;
        }),
        displayValues: colors.map(function (color) {
          return color.name;
        })
      }
    ],
    on: {
      change: function (picker, values) {
        var selectedColor = colors.find(function (color) {
          return color.name === values[0];
        });

        if (selectedColor) {
          document.documentElement.style.setProperty('--f7-ios-primary', selectedColor.value);
          document.documentElement.style.setProperty('--f7-ios-primary-shade', selectedColor.value);
          document.documentElement.style.setProperty('--f7-ios-primary-tint', selectedColor.value);

          localStorage.setItem('colorPreference', selectedColor.value);
        }
      }
    }
  });

  var savedColor = localStorage.getItem('colorPreference');
  if (savedColor) {
    document.documentElement.style.setProperty('--f7-ios-primary', savedColor);
    document.documentElement.style.setProperty('--f7-ios-primary-shade', savedColor);
    document.documentElement.style.setProperty('--f7-ios-primary-tint', savedColor);
    colorPicker.setValue([colors.find(function (color) { return color.value === savedColor; }).name]);
  }
}

function color() {
  if (colorPicker === null) {
    initializeColorPicker();
  } else {
    colorPicker.open();
  }
}

colorButton.addEventListener('click', color);

initializeColorPicker();

//Font
function font() {

}

var fonts = [
  { name: 'Default', value: 'Default Font' },
  { name: 'Verdana', value: 'Verdana' },
  { name: 'Monospace', value: 'monospace' },
  { name: 'Courier New', value: 'Courier New' },
  { name: 'Cursive', value: 'Cursive' }
];

var fontButton = document.querySelector('.open-font-picker');
var fontPicker = null;

function initializeFontPicker() {
 
  fontPicker = app.picker.create({
    openIn: 'auto',
    inputEl: fontButton,
    rotateEffect: true,
    sheetPush: true,
    sheetSwipeToClose: true,
    cols: [
      {
        textAlign: 'center',
        values: fonts.map(function (font) {
          return font.name;
        }),
        displayValues: fonts.map(function (font) {
          return font.name;
        })
      }
    ],
    on: {
      change: function (picker, values) {
        var selectedFont = values[0];

        if (selectedFont !== 'Default') {
          document.body.style.fontFamily = selectedFont;
          localStorage.setItem('fontPreference', selectedFont);
        } else {
          document.body.style.fontFamily = '';
          localStorage.removeItem('fontPreference');
        }
      }
    }
  });

  var savedFont = localStorage.getItem('fontPreference');
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
    fontPicker.setValue([savedFont]);
  }
}

function handleButtonClick() {
  if (fontPicker === null) {
    initializeFontPicker();
  } else {
    fontPicker.open();
  }
}

fontButton.addEventListener('click', handleButtonClick);

initializeFontPicker();

if (window.navigator && window.navigator.standalone) {
//Preloader
var preloaderDialog = app.dialog.preloader('Reloading data');

preloaderDialog.open();

setTimeout(function() {
  preloaderDialog.close();
}, 3300);

} else {
   app.popup.open('#hs');

}

fetch('https://www.idownloadblog.com/feed/')
    .then(response => response.text())
    .then(data => {
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const items = xmlDoc.getElementsByTagName('item');

     
      const newsElement = document.getElementById('news');

     
      for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('title')[0].textContent;
        const link = items[i].getElementsByTagName('link')[0].textContent;
        const mediaContent = items[i].getElementsByTagName('content:encoded')[0].textContent;
        const parser = new DOMParser();
        const mediaDoc = parser.parseFromString(mediaContent, 'text/html');
        const imageElement = mediaDoc.querySelector('img');
        const imageUrl = imageElement ? imageElement.getAttribute('src') : 'path/to/placeholder-image.png';

        
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'card-raised');
        cardElement.innerHTML = `
          <div class="card-content card-content-padding">
            <div class="card-header">${title}</div>
            <div class="card-image animated fadeIn" style="text-align: center;">
              <img style="width: 300px; border-radius: 20px;margin-right:2px;" src="${imageUrl}" alt="${title}">
            </div>
            <div class="card-footer">
              <a href="${link}" class="external">Read More</a>
            </div>
          </div>
        `;

        
        newsElement.appendChild(cardElement);
      }
    });