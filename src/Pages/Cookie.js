import Cookies from "js-cookie";

const ACCESS_TOKEN_COOKIE_NAME = 'access_token';

export const storeAccessToken = (accessToken) => {
    Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, { expires: 1 });
  };
export const getAccessToken = () => {
    return Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
  };
export const removeAccessToken = () => {
    Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
  };