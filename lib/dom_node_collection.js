class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }

  each(cb){
    this.nodes.forEach(cb);
  }

  html(string) {
    if (string === undefined){
      return this.nodes[0].innerHTML;
    } else {
      this.each(node => {
        node.innerHTML = string;
      });
    }
  }

  empty() {
    this.nodes = this.nodes.map(el => {
      el.innerHTML = "";
    });
  }

  append(children) {
    if (!(children instanceof DOMNodeCollection)) {
      children = $l(children);
    }
    this.each(node => {
      children.nodes.forEach(child => {
        node.innerHTML(child.html());
      });
    });
  }

  attr(string) {
    return this.nodes[0].style[string];
  }

  addClass(string) {
    this.each(node => {
      node.classList.add(string);
    });
  }

  removeClass(string) {
    this.each(node => {
      node.classList.remove(string);
    });
  }

  children() {
    const allChildrens = [];
    this.each(node => {
      allChildrens.push(node.children);
    });
    return allChildrens.filter(child => child.length > 0);
  }

  parent() {
    const allParents = [];
    this.each(node => {
      allParents.push(node.parentElement);
    });
    const uniqParent = Array.from(new Set(allParents));
    return new DOMNodeCollection(uniqParent);
  }

  find(string) {
    const elements = Array.from(this.nodes[0].querySelectorAll(string));
    return new DOMNodeCollection(elements);

  }


  remove(badNode) {
    this.each(node => {
      badNode.node.forEach(child => {
        node.parentNode.removeChild(child);
      });
    });
  }

  on(string, cb){
    this.each(node => {
      node.addEventListener(string, cb);
    });
  }

  off(string, cb){
    this.each(node => {
      node.removeEventListener(string, cb);
    });
  }
}

module.exports = DOMNodeCollection;
