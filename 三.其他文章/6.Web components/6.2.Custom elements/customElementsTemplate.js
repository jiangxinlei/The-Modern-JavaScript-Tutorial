class MyElement extends HtmlElement {
  constructor() {
    super();
    // 元素在这里创建
  }

  // 在元素被添加到文档后，浏览器会调用这个方法
  connectedCallback() {
    
  }

  // 在元素从文档移除时，浏览器会调用这个方法
  disconnectCallback() {

  }

  /**
   * 返回属性数组，这些属性的变化会被监视
   *
   * @readonly
   * @static
   * @memberof MyElement
   */
  static get observedAttributes() {
    return []
  }

  // 当上面数组里面的属性变化时，这个方法会被调用
  attributeChangedCallback(name, oldValue, newValue) {

  }

  // 在元素被移动到新的文档时，这个方法会被调用
  adoptedCallback() {

  }
}