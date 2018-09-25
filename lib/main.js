const DOMNodeCollection = require('./dom_node_collection.js');


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
};

const fns = [];

window.$l = function (selector) {
  if (selector instanceof Function){
    if (document.readyState === 'complete') {
      selector();
    } else {
      fns.push(selector);
    }
  } else if (selector instanceof HTMLElement){
    return new DOMNodeCollection([selector]);
  } else {
    const collection = document.querySelectorAll(selector);
    return new DOMNodeCollection(Array.from(collection));
  }
};

window.$l.extend = function(...objs) {
  const mainObj = objs.shift();
  objs.forEach(obj => {
    Object.assign(mainObj, obj);
  });
  return mainObj;
};



window.$l.ajax = function(options){

  const defaults = {
    type: "GET",
    url: window.location.href,
    async: true,
  };

  Object.assign(defaults, options);

  xhttp.open(defaults.type, defaults.url, defaults.async);
  xhttp.send();
};


document.addEventListener("DOMContentLoaded", () => {
  fns.forEach(fn => {
    fn();
  });
});
