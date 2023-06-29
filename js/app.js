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

var $ = Dom7;

var theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

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
    hideStatusbarOnOpen: true,
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
  app.actions.create({
    buttons: [
      
      [
        {
          text: 'Reset Accent Color',
          onClick: function() {
            
            document.documentElement.style.setProperty('--f7-ios-primary', '#3E84F6');
            document.documentElement.style.setProperty('--f7-ios-primary-shade', '#3E84F6');
            document.documentElement.style.setProperty('--f7-ios-primary-tint', '#3E84F6');

            const defaultColor = '#3E84F6';
            colorPicker.value = defaultColor;
            updateAccentColor(defaultColor);

            localStorage.setItem('accentColor', '#3E84F6');
          }
        },
        {
          text: 'Reset All Preferences',
          onClick: function() {
            
            app.dialog.confirm(
              "Are you sure you want to reset tweakra1n?",
              "Reset",
              () => {
                app.dialog.progress('Resetting', 'infinite');
                setTimeout(() => {
                  var cookies = document.cookie.split(";");
                  for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                  }

                  localStorage.clear();

                  hideInfiniteProgress();

                  window.location.href = "app.html";
                }, 3000);
              }
            );
          }
        }
      ],
      
      [
        {
          text: 'Cancel',
          onClick: function() {
       
          }
        }
      ]
    ]
  }).open();
}

document.addEventListener('DOMContentLoaded', function() {
  var savedAccentColor = localStorage.getItem('accentColor');

  if (savedAccentColor) {
    document.documentElement.style.setProperty('--f7-ios-primary', savedAccentColor);
    document.documentElement.style.setProperty('--f7-ios-primary-shade', savedAccentColor);
    document.documentElement.style.setProperty('--f7-ios-primary-tint', savedAccentColor);
  }
});

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
const colorPicker = document.getElementById('colorPicker');

 
  const defaultColor = '#3E84F6';
  colorPicker.value = defaultColor;
  updateAccentColor(defaultColor);

  
  const savedColor = localStorage.getItem('accentColor');
  if (savedColor) {
    colorPicker.value = savedColor;
    updateAccentColor(savedColor);
  }

  
  colorPicker.addEventListener('change', function(event) {
    const selectedColor = event.target.value;
    updateAccentColor(selectedColor);
    localStorage.setItem('accentColor', selectedColor); 
  });

 
  function updateAccentColor(color) {
    document.documentElement.style.setProperty('--f7-ios-primary', color);
    document.documentElement.style.setProperty('--f7-ios-primary-shade', color);
    document.documentElement.style.setProperty('--f7-ios-primary-tint', color);
    document.querySelector('.color-picker-indicator').style.backgroundColor = color;
  }


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
//Add to HS required
if(window.navigator&&window.navigator.standalone){var preloaderDialog=app.dialog.preloader('Reloading data');preloaderDialog.open();setTimeout(function(){preloaderDialog.close();},2000);}else{var popupHTML = `
  <div class="popup" id="hs" style="margin-top:0px;border-radius:0px;">                                                                                                    <div class="page">                                                                                                          <div class="page-content animated fadeIn">                                                                                   <div class="block block-strong inset">
               <div class="block-title block-title-large animated zoomIn">Add to HomeScreen</div>                                                                                                                                         
                  <p class="animated bounceIn">To use tweakra1n you need to add it to your HomeScreen.</p>
                </div>
            <div class="list list-strong inset">
              <ul class="animated flipInY">
                <li>
                  <div class="item-content">
                    <div class="item-media">
                      <i style="font-size: 35px" class="f7-icons">compass</i>
                    </div>
                    <div class="item-inner">Open this webpage in Safari</div>
                  </div>
                </li>
                </ul>
                <p>
                <ul class="animated flipInY">
                <li>
                  <div class="item-content">
                    <div class="item-media">
                      <i style="font-size: 35px" class="f7-icons">square_arrow_up</i>
                    </div>
                    <div class="item-inner">Click the "Share" button</div>
                  </div>
                </li>
                </ul>
                <p>
                 <ul class="animated flipInY">
                <li>
                  <div class="item-content">
                    <div class="item-media">
                      <i style="font-size: 35px" class="f7-icons">plus_app</i>
                    </div>
                    <div class="item-inner">
                      and tap "Add to Home Screen"
                    </div>
                  </div>
                </li>
              </ul>
              <p>
            <a href="javascript:hs()" class="button button-raised button-fill">Use in web</a>                                                                </center>                                                            </div>                                                        </div>                                                    </div>                                                </div>                                            </div> 
`;


var popup = app.popup.create({
  content: popupHTML
});

popup.open();
}

//Newsfeed
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
        const imageUrl = imageElement ? imageElement.getAttribute('src') : '#';

        
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'card-raised');
        cardElement.innerHTML = `
          <div class="card-content card-content-padding">
            <div class="card-header">${title}</div>
            <div class="card-image animated fadeIn" style="text-align: center;">
              <img class="newsimg" style="border-radius: 20px;margin-right:2px;" src="${imageUrl}" alt="${title}">
            </div>
            <div class="card-footer">
              <a href="${link}" class="external">Read More</a>
            </div>
          </div>
        `;

        
        newsElement.appendChild(cardElement);
      }
    });
    //iNoBounce
    (function(global) {
	
	var startY = 0;

	
	var enabled = false;

	var supportsPassiveOption = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				supportsPassiveOption = true;
			}
		});
		window.addEventListener('test', null, opts);
	} catch (e) {}

	var handleTouchmove = function(evt) {
	
		var el = evt.target;

		
		var zoom = window.innerWidth / window.document.documentElement.clientWidth;
		if (evt.touches.length > 1 || zoom !== 1) {
			return;
		}

		
		while (el !== document.body && el !== document) {
			
			var style = window.getComputedStyle(el);

			if (!style) {
			
				break;
			}

			
			if (el.nodeName === 'INPUT' && el.getAttribute('type') === 'range') {
				return;
			}

			var scrolling = style.getPropertyValue('-webkit-overflow-scrolling');
			var overflowY = style.getPropertyValue('overflow-y');
			var height = parseInt(style.getPropertyValue('height'), 10);

			
			var isScrollable = scrolling === 'touch' && (overflowY === 'auto' || overflowY === 'scroll');
			var canScroll = el.scrollHeight > el.offsetHeight;

			if (isScrollable && canScroll) {
			
				var curY = evt.touches ? evt.touches[0].screenY : evt.screenY;

			
				var isAtTop = (startY <= curY && el.scrollTop === 0);
				var isAtBottom = (startY >= curY && el.scrollHeight - el.scrollTop === height);

				
				if (isAtTop || isAtBottom) {
					evt.preventDefault();
				}

			
				return;
			}

			
			el = el.parentNode;
		}

		
		evt.preventDefault();
	};

	var handleTouchstart = function(evt) {
		
		startY = evt.touches ? evt.touches[0].screenY : evt.screenY;
	};

	var enable = function() {
		
		window.addEventListener('touchstart', handleTouchstart, supportsPassiveOption ? { passive : false } : false);
		window.addEventListener('touchmove', handleTouchmove, supportsPassiveOption ? { passive : false } : false);
		enabled = true;
	};

	var disable = function() {
		
		window.removeEventListener('touchstart', handleTouchstart, false);
		window.removeEventListener('touchmove', handleTouchmove, false);
		enabled = false;
	};

	var isEnabled = function() {
		return enabled;
	};

	
	var testDiv = document.createElement('div');
	document.documentElement.appendChild(testDiv);
	testDiv.style.WebkitOverflowScrolling = 'touch';
	var scrollSupport = 'getComputedStyle' in window && window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
	document.documentElement.removeChild(testDiv);

	if (scrollSupport) {
		enable();
	}

	var iNoBounce = {
		enable: enable,
		disable: disable,
		isEnabled: isEnabled
	};

	if (typeof module !== 'undefined' && module.exports) {
		
		module.exports = iNoBounce;
	}
	if (typeof global.define === 'function') {
		
		(function(define) {
			define('iNoBounce', [], function() { return iNoBounce; });
		}(global.define));
	}
	else {
	
		global.iNoBounce = iNoBounce;
	}
}(this));

;
//Pull-to-refresh
document.addEventListener('DOMContentLoaded', function () {
  var ptrContents = document.querySelectorAll('.ptr-content');

  ptrContents.forEach(function (ptrContent) {
    ptrContent.addEventListener('ptr:refresh', function (event) {
      
      window.location.reload();
    });
  });
});
//hs pop-up
var popupHs = app.popup.get('#hs');
if (popupHs) {
  popupHs.params.swipeToClose = false;
}

var myDate = new Date();
                                                    var hrs = myDate.getHours();

                                                    var greet;

                                                    if (hrs < 12)
                                                        greet = 'Good Morning ☀️';
                                                    else if (hrs >= 12 && hrs <= 17)
                                                        greet = 'Good Afternoon 🥱';
                                                    else if (hrs >= 17 && hrs <= 24)
                                                        greet = 'Good Evening 🌙';

                                                    document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';
//Sidebar
var sidebarLinks = document.querySelectorAll('.menu-list a.item-link');
sidebarLinks.forEach(function(link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    
    sidebarLinks.forEach(function(otherLink) {
      otherLink.classList.remove('item-selected');
    });

    
    link.classList.add('item-selected');

   
    var tabId = link.getAttribute('href');

    
    var tabContent = document.querySelector(tabId);
    if (tabContent) {
      
      var allTabs = document.querySelectorAll('.tab');
      allTabs.forEach(function(tab) {
        tab.classList.remove('tab-active');
      });

      
      tabContent.classList.add('tab-active');
    }

    var sidebar = document.querySelector('.panel-left');
    if (sidebar && sidebar.classList.contains('panel-visible')) {
      sidebar.classList.remove('panel-visible');
    }
  });
});
// Signer
function sign() {
app.dialog.prompt('Enter a direct link to the .ipa file', 'Sign app', function (url) {
  app.dialog.create({
        title: 'Sign app',
        buttons: [
          {
            text: 'Install',
            onClick: function () {
           var finalUrl = 'https://cococloud-signing.online/free-plist?url=' + encodeURIComponent(url);
  window.open(finalUrl, '_blank');
  app.dialog.alert('Go to your homescreen to check the installation progress', 'Installing');
        },
          },
          {
            text: 'Download',
            onClick: function () {
            var finalUrl = 'https://cococloud-signing.online/free-signing?url=' + encodeURIComponent(url);
  window.open(finalUrl, '_blank');
        },
          },
          {
            text: 'Cancel',
          },
        ],
        verticalButtons: true,
      }).open();
});

}
    var isAlertShown = false;

    
    function checkInternetConnection() {
      return navigator.onLine;
    }

    
    function displayNoInternetAlert() {
      app.dialog.alert('Some features will not be available', 'No connection <i style="font-size:20px;" class="f7-icons">wifi_slash</i>');
      isAlertShown = true;
    }

   
    function checkNetworkStatus() {
      if (!checkInternetConnection() && !isAlertShown) {
        displayNoInternetAlert();
      }
    }

    
    checkNetworkStatus();

   
    setInterval(checkNetworkStatus, 1000);
    
    
   // Send feedback
var feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', function (e) {
  e.preventDefault();

 
  var emailInput = feedbackForm.elements.email;
  var feedbackTypeInput = feedbackForm.elements['feedback-type'];
  var feedbackInput = feedbackForm.elements.feedback;

  if (
    emailInput.value === '' ||
    feedbackTypeInput.value === '' ||
    feedbackInput.value === ''
  ) {
    
    app.dialog.alert('Please fill in all the required fields.', 'Cannot submit');
    return;
  }

  var mailtoURL =
    'mailto:baloggabriel76@outlook.com' +
    '?subject=' + encodeURIComponent('New Feedback') +
    '&body=' + encodeURIComponent('Email: ' + emailInput.value + '\n' +
      'Feedback Type: ' + feedbackTypeInput.value + '\n' +
      'Feedback: ' + feedbackInput.value
    );

 
  window.location.href = mailtoURL;

  feedbackForm.reset();

  app.popup.close('#feedback');

  app.dialog.alert('Thanks for sending feedback.This will help us improve tweakra1n better.', 'Thank you!');
});

// Submit app
var appSubmitForm = document.getElementById('appsubmit-form');
appSubmitForm.addEventListener('submit', function (e) {
  e.preventDefault();

  
  var emailInput = appSubmitForm.elements.email;
  var appNameInput = appSubmitForm.elements['app-name'];
  var appUrlInput = appSubmitForm.elements['app-url'];
  var descriptionInput = appSubmitForm.elements.description;

  if (
    emailInput.value === '' ||
    appNameInput.value === '' ||
    appUrlInput.value === '' ||
    descriptionInput.value === ''
  ) {
    
    app.dialog.alert('Please fill in all the required fields.', 'Cannot submit');
    return;
  }


  var mailtoURL =
    'mailto:baloggabriel76@outlook' +
    '?subject=' + encodeURIComponent('New App Submission') +
    '&body=' + encodeURIComponent('Email: ' + emailInput.value + '\n' +
      'App Name: ' + appNameInput.value + '\n' +
      'App URL: ' + appUrlInput.value + '\n' +
      'Description: ' + descriptionInput.value + '\n' +
      'Additional Content: ' + appSubmitForm.elements['additional-content'].value
    );

  
  window.location.href = mailtoURL;

 
  appSubmitForm.reset();

  
  app.popup.close('#appsubmit');
  
   app.dialog.alert('We will review your app soon.', 'Thank you!');
});
