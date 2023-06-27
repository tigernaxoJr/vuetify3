export const GetSearchParams = () => {
  const href = window.location.href;
  const idx = href.indexOf('?');
  const querystring = href.substring(idx);
  const urlParams = new URLSearchParams(querystring);
  return urlParams;
};

export class URL {
  // constructor() { }
  static get URLSearchParams(): URLSearchParams {
    const href = window.location.href;
    const idx = href.indexOf('?');
    const querystring = href.substring(idx);
    const urlParams = new URLSearchParams(querystring);
    return urlParams;
  }
}
