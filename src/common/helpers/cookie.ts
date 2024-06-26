export const writingToken = (token: string) => {
  let date = new Date((Date.now() + 86400e3) * 7);
  setCookie("token", token, { "max-age": +date, "secure": true, "samesite": "strict", "path": "/" });
};

export function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface ICookies {
  "expires": Date;
  "path": string;
  "max-age": number;
  "secure": boolean;
  "samesite": "strict";
}

export function setCookie(name: string, value: string, options: Partial<ICookies>) {
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey as keyof typeof options];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, "", {
    "max-age": -1,
  });
}
