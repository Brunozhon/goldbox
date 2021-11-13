class Place {
  constructor(name, background_URL, props, props_URLs, backgroundGetterMethod) {
    this.name = name;
    this.backgroundURL = background_URL;
    this.propsURLs = props_URLs;
    this.props = props;
    this.backgroundGetterMethod = backgroundGetterMethod;
  }
  switchBackgroundURL(url) {
    this.backgroundURL = url;
  }
  get background() {
    return this.backgroundGetterMethod(this.backgroundURL);
  }
}
export { Place };
