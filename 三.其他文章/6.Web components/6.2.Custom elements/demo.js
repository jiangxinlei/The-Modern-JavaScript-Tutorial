class TimeFormatted extends HTMLElement {
  constructor() {
    super();
    // 元素在这里创建
  }

  render() {
    let date = new Date(this.getAttribute('datetime') || Date.now());

    this.innerHTML = new Intl.DateTimeFormat('default', {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    }).format(date);
  }

  // 在元素被添加到文档后，浏览器会调用这个方法
  // 在这里渲染元素，而不是在 constructor 里？因为在 constructor 被调用太早了，虽然元素实例被创建了，但还插入到页面里；
  // 浏览器还没有处理创建元素属性，调用 getAttribute 方法会得到 null
  connectedCallback() {
    if (!this.rendered) {
      this.render();

      this.rendered = true;
    }

    // this.innerHTML = 'hello world'
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
    return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name']
  }

  // 当上面数组里面的属性变化时，这个方法会被调用
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  // 在元素被移动到新的文档时，这个方法会被调用
  adoptedCallback() {

  }
}

customElements.define('time-formatted', TimeFormatted);