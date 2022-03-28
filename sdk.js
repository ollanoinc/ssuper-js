/**
 *
 *   ______ ________ ________   ___________
 *  /  ___//  ___/  |  \____ \_/ __ \_  __ \
 *  \___ \ \___ \|  |  /  |_> >  ___/|  | \/
 * /____  >____  >____/|   __/ \___  >__|
 *      \/     \/      |__|        \/
 *
 *
 * JS SDK for Wallet-To-Wallet Messenger by Ssuper
 *
 * Questions? Interested in working with us?
 * Email us at gm (at) ssuper (dot) co OR
 * message us at https://app.ssuper.co/message/0x6d96b22376e80c5275c2f8057446535c941afced
 *
 * Inspiration: https://github.com/hueitan/javascript-sdk-design
 */

 /**
  * CSS Utility
  *
  * Inspiration: https://areknawo.com/messing-with-css-through-its-javascript-api/
  */
function createRandomName() {
  const code = Math.random().toString(36).substring(7);
  return `ssuper-css-${code}`;
}

function phraseStyle(style) {
  const keys = Object.keys(style);
  const keyValue = keys.map(key => {
    const kebabCaseKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    const value = `${style[key]}${typeof style[key] === "number" ? "px" : ""}`;
    return `${kebabCaseKey}:${value};`;
  });
  
  return `{${keyValue.join("")}}`;
}

function _createCSS(style, prefix, name) {
  let styleSheet;
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].SsuperCSSInJS) {
      styleSheet = document.styleSheets[i];
      break;
    }
  }
  if (!styleSheet) {
    const style = document.createElement("style");
    document.head.appendChild(style);
    styleSheet = style.sheet;
    styleSheet.SsuperCSSInJS = true;
  }
  styleSheet.insertRule(`${prefix}${name}${phraseStyle(style)}`);
  return name;
}

function createCSSId(style, name) {
  return _createCSS(style, '#', name);
}

function createCSSClass(style) {
  return _createCSS(style, '.', createRandomName())
}

/**
 * CSS IDs
 */
const ssuperId = createCSSId({
  position: 'fixed',
  bottom: 0,
  zIndex: '2147483646',
  backgroundColor: 'transparent',
  transition: 'height .25s ease',
  '-webkit-transition': 'height .25s ease',
  '-moz-transition': 'height .25s ease',
}, 'ssuper');

const ssuperFrameId = createCSSId({
  display: 'flex',
  width: '100%',
  height: 'calc(100% - 50px)',
  borderWidth: 0,
  backgroundColor: 'black'
}, 'ssuper-frame');

const ssuperHeaderId = createCSSId({
  height: 50,
  width: '100%',
  backgroundImage: 'linear-gradient(to right, #EE0979 0%, #FF6A00 100%)',
  backgroundSize: '100% auto',
  cursor: 'pointer',
  transition: '0.5s',
  pointerEvents: 'auto',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  display: 'flex',
}, 'ssuper-header');

const ssuperHeaderImageId = createCSSId({
  marginRight: 10,
  height: 50,
  width: 50,
}, 'ssuper-header-image');

const ssuperHeaderAddressId = createCSSId({
  alignSelf: 'center',
  fontSize: 22,
  fontWeight: '600',
  color: 'white',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginRight: 35,
  display: '-webkit-box',
  lineClamp: '1',
  '-webkit-line-clamp': '1',
  '-webkit-box-orient': 'vertical',
}, 'ssuper-header-address');

const ssuperArrowId = createCSSId({
  position: 'absolute',
  right: 20,
  top: 15,
  color: 'white',
  transition: 'height .25s ease',
  '-webkit-transition': 'height .25s ease',
  '-moz-transition': 'height .25s ease',
}, 'ssuper-arrow');

/**
 * CSS Classes
 */

const ssuperMobileClass = createCSSClass({
  right: 0,
  width: '100%',
});

const ssuperDesktopClass = createCSSClass({
  right: 20,
  width: 400,
});

const ssuperClosedClass = createCSSClass({
  height: 50
});

var ssuperOpenClass = createCSSClass({
  height: 'min(635px, 100%)'
});

const ssuperArrowDownClass = createCSSClass({
  background: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTUgN0wxIDNIOUw1IDdaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==") no-repeat scroll 0 0 transparent',
});

const ssuperArrowUpClass = createCSSClass({
  background: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTUgN0wxIDNIOUw1IDdaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==") no-repeat scroll 0 0 transparent',
  transform: 'rotate(180deg)'
});


/**
 * JS Utility
 */

function _createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

/**
 * JS
 */

function getConfigValue(key, defaultValue) {
  if (window.ssuper && window.ssuper.config) {
    if (key in window.ssuper.config) {
      return window.ssuper.config[key];
    }
  }
  return defaultValue;
}

function _uninstallSsuper() {
  if (document.getElementById(ssuperId)) {
    document.getElementById(ssuperId).remove();
  }
}

function _installSsuper() {

  // parent wrapper div
  let ssuper = document.createElement('div');
  ssuper.id = ssuperId;
  ssuper.classList.add(ssuperClosedClass);

  // set config width
  if (getConfigValue('width')) {
    header.style.setProperty('width', getConfigValue('width'));
  }

  // set config height
  if (getConfigValue('height')) {
    ssuperOpenClass = createCSSClass({
      height: getConfigValue('height')
    });
  }

  // header
  let header = document.createElement('div');
  header.id = ssuperHeaderId;
  header.addEventListener('click', function(e) {
      let ssuper = document.getElementById(ssuperId);
      let arrow = document.getElementById(ssuperArrowId);
      if (ssuper.classList.contains(ssuperClosedClass)) {
          ssuper.classList.replace(ssuperClosedClass, ssuperOpenClass);
          arrow.classList.replace(ssuperArrowUpClass, ssuperArrowDownClass);
      } else {
          ssuper.classList.replace(ssuperOpenClass, ssuperClosedClass);
          arrow.classList.replace(ssuperArrowDownClass, ssuperArrowUpClass);
      }
  });

  // set config header image or color
  if (getConfigValue('backgroundImage')) {
    header.style.setProperty('background-image', getConfigValue('backgroundImage'));
  } else if (getConfigValue('backgroundColor')) {
    header.style.setProperty('background-color', getConfigValue('backgroundColor'));
    header.style.setProperty('background-image', 'unset');
  }

  // header image
  let headerImage = document.createElement('img');
  headerImage.id = ssuperHeaderImageId;
  headerImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmAxYVLTrC0MJqAAACN3pUWHRSYXcgcHJvZmlsZSB0eXBlIHhtcAAAOI2VlVsS2zAIRf9ZRZcgg4Sk5bi2/NeZfnb5vaAkfkRO2niiODZw4KIH/fn1m37Yp6ZAsuQicy665qCrphx14mD/ddGWxd7JyqyTRt2UNcncn7+sN2YOtIfBw5/mkkpcU+AQRbcMRw6i3CT4l6WFmYNdSIERXGVOHCNFvfD7S8uh5IgryAzmlv3DLcOImyMybzJJtYs3kiCMB4xx7UHwK7kiLNLOhVcD2Os9l2tGMWqiLCp4UL20ChUaMnwYQBcGG0pYhhDiFOh45UJHUU2p96I8o7aLjXuopyvKLcg5WIHcUJqp/om1o9ClgqwHCmqjO9rTqfO+446lmUY65t0W9/Cxrr141668etO1m6M1JUGVaM1PFnTTRVp0ADkhpKBFNzcRv7MQ1vMmEeEwRZGPaJ8UbsNVFpf7AaEx5UtuK6y8qFxjdO9E0kA2+sQr5mnAGCSniHvoJlgnPsqJPw70z8qkp9MJDixGJmGnG1ckY2S5VD8K9A4no78m2gzRK+6TLtgDLHlsFdb8vniQyeSZREOdveiT27joPYBtNJiF1iZ0LXhjk9NOnKPZbnUXnAZF1f8rqnvR2O2mk89FhD0RwTxj22TMi7QlhEDc6E1d9vUzMj9an2E0oJVRAGAExYUL6mVLZ+OvJdU7CA0oN8afIYQ224lQXew+c/c+nQB3dh1Ae2zejqfC+6FwPNF2WzvTokqjMPeVdT1tzY3+ArfVv6thURwkAAAAAW9yTlQBz6J3mgAAANplWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAKAAAAcgEyAAIAAAAUAAAAfIdpAAQAAAABAAAAkAAAAAAAAAEsAAAAAQAAASwAAAABZXpnaWYuY29tADIwMjE6MTA6MDcgMTM6NDY6NDMAAASQBAACAAAAFAAAAMagAQADAAAAAQABAACgAgAEAAAAAQAABACgAwAEAAAAAQAABAAAAAAAMjAyMTowNzoyMiAxNjozNzoyOQDFWRvmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTIyVDIxOjQ1OjQ5KzAwOjAwqdxyuAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0yMlQyMTo0NTo0OSswMDowMNiBygQAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAACF0RVh0ZXhpZjpEYXRlVGltZQAyMDIxOjEwOjA3IDEzOjQ2OjQznHy+JwAAACp0RVh0ZXhpZjpEYXRlVGltZURpZ2l0aXplZAAyMDIxOjA3OjIyIDE2OjM3OjI5pnl3wAAAABN0RVh0ZXhpZjpFeGlmT2Zmc2V0ADE2OMXNZz8AAAAZdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADEwMjTyxVYfAAAAGXRFWHRleGlmOlBpeGVsWURpbWVuc2lvbgAxMDI0Sz6N9wAAAC50RVh0ZXhpZjpTb2Z0d2FyZQBBZG9iZSBQaG90b3Nob3AgMjIuNCAoTWFjaW50b3NoKV07fC8AAAASdEVYdHRpZmY6T3JpZW50YXRpb24AMber/DsAAAAVdEVYdHRpZmY6UmVzb2x1dGlvblVuaXQAMpwqT6MAAAAUdEVYdHRpZmY6WFJlc29sdXRpb24AMzAwXDgyoQAAABR0RVh0dGlmZjpZUmVzb2x1dGlvbgAzMDDlw+lJAAAAEHRFWHR4bXA6Q29sb3JTcGFjZQAxBQ7I0QAAACJ0RVh0eG1wOkNyZWF0ZURhdGUAMjAyMS0wNy0yMlQxNjozNzoyORM9mcYAAAAwdEVYdHhtcDpDcmVhdG9yVG9vbABBZG9iZSBQaG90b3Nob3AgMjIuNCAoTWFjaW50b3NoKRzFaVgAAAAidEVYdHhtcDpNb2RpZnlEYXRlADIwMjEtMTAtMDdUMTM6NDY6NDP96LTmAAAAGHRFWHR4bXA6UGl4ZWxYRGltZW5zaW9uADEwMjRh1qbPAAAAGHRFWHR4bXA6UGl4ZWxZRGltZW5zaW9uADEwMjTYLX0nAAAAL3RFWHRDb21tZW50AEdJRiByZXNpemVkIG9uIGh0dHBzOi8vZXpnaWYuY29tL3Jlc2l6ZaI7uLIAAAASdEVYdFNvZnR3YXJlAGV6Z2lmLmNvbaDDs1gAAAciSURBVGjevZlrjJRXGcd/z3nfd3b2MntloWWhC5Uul90dWKQtIU3ENIa0BNJPaE39QPtFbQqK2KYaFRONStpgmxYEUzUSb/jBxmojVYq1amiKVe7YAgUWluuywy47s/tezuOHWVwuYead3aHPJPPhnPM8/3/+5zmX57xC2W0GQi05DAbYW2S0W274LnKcQcTgIlp8vCkvfBsWyxQR6hRVijMoM4GFQAUOSc0isTyccsLP4xwhiKrFYASU80V8ypgDnVgcjKhCRIRoiFfUq2wE2rFYQklqRIhBRNWj76MikMYSYWnQ76JMZxkGBzhT1LMsSdiJYvBkJluJEsbdhxLix/ItA4E0oETSrBupTLUva6q4AyNGIYjhPe4pSAOCSKVuoddrfSa6kB6sZzI+Rz8KBWZjUay4/IQ3TeuX3MfCnee5A1WPmbEijEuBeQREGFzdzBxaHk98O/pT96FakFCFD243gXYgJIHyPAvIrEj8gEr/1c7gE7g42JhRxjwFM+gjxEV4kQfpW5LYYBrtkeG3LjIsrnpcut0EEtShiEznAXoXVbxkJkO0Y+5JhxwhUdEteJwEOlBA+LT+ikw6ucnMAB0KXjuqDyEYErEjjSkHurAowrMso/9j1ZucNIA9mNs1yBCiEcdjxxqDAjPwMcDDPER2cvXL7qJ8e/j6lN5WVAICBm4fgTQuVxgmzVcZbKre4C7Jt9uM//olunC0MsYZOGYCXQgV1DCV5xmsqfu+u+Jqj/1XZu8lkCQuE0uIWFIOzCHCYGWCbqGvYuq3vMdH+4Lf3zN4PxGK4a+3R4E5wCA+1fpTjjota93Vo972tP/GWXKoRiWKGnv0fFySJMTlFdbL/C8kvibXTHX09sEjF0AEYXdJBGLaPLq4i7TM5T8omc9lMzkd/WWD3kdzLGIuHbSXGDmWAm1k6aYBo1uZS99y7zmpu7bfHh36Wy/9hCgNMU/BqxYrCevIMRGVn2knlxYnXzQ3pHn0xuTToIIqF/FIo0QI0MoeTo+XwHwGGcbIRp1N74LkJtN6fb9mgz/0swJB5f/3fFUEw3HqqQUOjZ1AJwEuyhN6LwOzKzc5s24akuOcYRu+RtRRSUe+VfJ/imih+qgIgfxl2+ERnqC/tWajs+DmMdKYXBdttafMOc10D2oY4BPiay+b+TOCK1EBBgXrp06UCCvz9CWCSakt7vJbjdSQQTJ6jtN6Qo/rCXs6Ot/Xkwg+hYtgOTgWBdpRBJUG3cBwQ91zt4YHcamjTq5mR6hDwWt80WaGqEQK3o4KEBDAiqtbOOPdvcZZQXxztcffMDmzkCqGishcmICgQhWR2m3+LnOXTJNpMoVJ0kiNFDjy7NmhVY3vGiIMQo4JYyOgiFoc+jGh7nP2JUiwy2mtTNQ7zaZFWqVV0maxVNzkNxA807j9HVYiEmmKOv5dgEABdWajIB6KqCECLnKGM7h4uCRIcLimZav3yA3wgf/NHes77WfwOcEUEuwpPFuFuUUjazj/P1E6ATQEhJd5M/v04I1e4Y8u/PA+u4Ih8XQqA3RT2AouwzRZHDxkJJN7acJgCVEJ9B/I3am/mOnXwW+7/PlE32P0IIAUfaIqshHd6N6Fn18beFrPBAY+KdOug3/rytpk35fpEasgHCgKX+KNKJ9Ms3Cw8oruqWhbLtcoGO3PPZXq/h7viqNKxPuxYpZ8LW/DQ0W0GZ3tLBxtt6eyqxr2ecwSUaEi9uNTyQSGGaSGgIlkloweyzYzvLZ559/pIFAFshyLGa/EW3ETVdSibOdYyl16tVWHg3WNvznAkwiVGExs+JIJtGBQKrSJ1MfNvBF4679wcuMxVqKyjxwaK/muWolToBgi2avQv9Sk8m3hLy5+Z0LwKFfE03YiDpcUscS6QAGPk8ikxpGKKNx++enaga/QI6jilghf8hQ4WKnQRqoWmZkA0XvZ1amzm9mNVYvP/hLhSyRgCIFf8muTWC4JsB8OPZX6L/wWFw8poSQdE4EuHBw8rWbpdLMYtNdf0/TPd3gAsEQkuXB7CST5kEiquJPkg840zQ1/vf7V/awm4j5cWsYgf4nWQSdp2c+e5MAfs5pZt9M5wr10yALSJddDoxZ7FbQhKOhEtN3cH77Su/6e6LP44ugwpqSVP0YC+Rfws9pM5mG7q//ZmuwqLolVgxS5cpSFQA1VgPIepxqr6nNrqi98gwNiFPyYp96tLGYStiAgRn0yqcs/dt//gB2CgjNO+NgEvPybMLvY3T398O9YKapKlmic8DEJdOATEGpEMwn7c14g0DaSVJZh6cX6tDWBKqpQoIc7EVxp0fPYGDe+MinQTApXPA7TSgLDkHZjygIfS4EWavN7AC4GxKpPxJGywMdSQDiEjnwJlvxuVDb4WB8up9AM4jKEAyhSoNi+LQrkH1ssCbEMI9QVdykvAUaqQ9UnSbGXt8tK4H/ekruFAoM1pgAAAABJRU5ErkJggg==';
  header.appendChild(headerImage);

  // header address
  let headerAddress = document.createElement('p');
  headerAddress.id = ssuperHeaderAddressId;
  if (getConfigValue('text') !== undefined) {
    headerAddress.innerHTML = getConfigValue('text');
  } else if (window.ssuper.config.address !== undefined) {
    let _address = window.ssuper.config.address;
    headerAddress.innerHTML = 'Message ' + _address.slice(0, 6) + '...' + _address.split('').reverse().join('').slice(0, 4).split('').reverse().join('');
  } else {
    headerAddress.innerHTML = 'Message';
  }
  header.appendChild(headerAddress);

  // header arrow
  let headerArrow = _createElementFromHTML('<svg width="20" height="20" viewBox="0 0 10 10" fill="none"><path d="M5 7L1 3H9L5 7Z" fill="currentColor"/></svg>');
  headerArrow.id = ssuperArrowId;
  headerArrow.classList.add(ssuperArrowUpClass);
  header.appendChild(headerArrow);

  // set config text color
  if (getConfigValue('accentColor') == 'black') {
    headerAddress.style.setProperty('color', 'black');
    headerArrow.style.setProperty('color', 'black');
    headerImage.style.setProperty('filter', 'invert(1)');
  }

  // iframe for messenger
  let iframe = document.createElement('iframe');
  iframe.id = ssuperFrameId;
  iframe.src = 'https://app.ssuper.co/message/' + (window.ssuper.config.address === undefined ? '' : window.ssuper.config.address);

  // media changes
  let mobile = window.matchMedia("(max-width: 700px)");
  function _mobileMedia(mobile) {
    if (mobile.matches) {
      ssuper.classList.remove(ssuperDesktopClass);
      ssuper.classList.add(ssuperMobileClass);
    } else {
      ssuper.classList.remove(ssuperMobileClass);
      ssuper.classList.add(ssuperDesktopClass);
    }
  }
  _mobileMedia(mobile);
  mobile.addListener(_mobileMedia);


  // build it
  ssuper.appendChild(header);
  ssuper.appendChild(iframe);

  // ensure removal of previous
  _uninstallSsuper();

  // add to document
  document.body.appendChild(ssuper);
}

/**
 * Global install
 */
function _ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', fn);
  } else {
    window.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
          fn();
      });
  }
}

_ready(function () {
  window.ssuper = {};
  window.ssuper.config = {};
  window.ssuper.init = function(config) {
    window.ssuper.config = config;
    _uninstallSsuper();
    _installSsuper();
  }
  window.ssuper.install = function() {
    _installSsuper();
  };
  window.ssuper.uninstall = function() {
    _uninstallSsuper();
  }
  window.ssuper.reload = function () {
    _uninstallSsuper();
    _installSsuper();
  }

  if (window.ssuperAsyncInit instanceof Function) {
    window.ssuperAsyncInit.call();
  } else {
    window.ssuper.install();
  }
});
