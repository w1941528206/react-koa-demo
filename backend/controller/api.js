class Api {
  static handleResponseData(res) {
    const { text, body, resType } = res;
    let parseData;
    if (resType.indexOf('text') !== 1) {
      try {
        parseData = JSON.parse(text);
      } catch (e) {
        return text;
      }
      return parseData;
    }
    return body;
  }
}

module.exports = new Api();