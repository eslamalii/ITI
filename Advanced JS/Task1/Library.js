function getCookies() {
  return document.cookie;
}

function setCookies(key, value) {
  document.cookie = `${key}=${value}`;
}

function deleteCookies() {
  document.cookie = "expires=0";
}
