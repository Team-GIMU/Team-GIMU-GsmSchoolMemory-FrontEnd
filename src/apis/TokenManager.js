import { accessToken, refreshToken, accessExp, refreshExp } from "../lib/token";

class TokenManager {
  constructor() {
    this._accessToken = null;
    this._refreshToken = null;
    this._accessExp = null;
    this._refreshExp = null;
    this.initToken();
  }

  validateToken(expiredString, token) {
    if (!expiredString || !token) return false;

    return this.calculateMinutes(expiredString, 1) >= new Date();
  }

  calculateMinutes(currentDate, addMinute) {
    const expiredAt = currentDate ? new Date(currentDate) : new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute);

    return expiredAt;
  }

  initToken() {
    if (typeof window === "undefined") return;
    this._accessToken = localStorage.getItem(accessToken);
    this._refreshToken = localStorage.getItem(refreshToken);
    
    const storedAccessExp = localStorage.getItem(accessExp);
    const storedRefreshExp = localStorage.getItem(refreshExp);
    
    this._accessExp = storedAccessExp ? new Date(storedAccessExp) : null;
    this._refreshExp = storedRefreshExp ? new Date(storedRefreshExp) : null;
  }

  setTokens(tokens) {
    const now = new Date();
    const accessExpTime = new Date(now.getTime() + (tokens.accessTokenExpiresIn || 0));
    const refreshExpTime = new Date(now.getTime() + (tokens.refreshTokenExpiresIn || 0));
    
    this._accessToken = tokens.accessToken;
    this._refreshToken = tokens.refreshToken;
    this._accessExp = accessExpTime;
    this._refreshExp = refreshExpTime;

    console.log(accessExpTime, refreshExpTime);
    console.log(tokens.accessTokenExpiresIn, tokens.refreshTokenExpiresIn);
    console.log(this._accessExp, this._refreshExp);
    
    localStorage.setItem(accessToken, tokens.accessToken);
    localStorage.setItem(refreshToken, tokens.refreshToken);
    localStorage.setItem(accessExp, accessExpTime.toISOString());
    localStorage.setItem(refreshExp, refreshExpTime.toISOString());
  }

  removeTokens() {
    if (typeof window === "undefined") return;
    this._accessToken = null;
    this._refreshToken = null;
    this._accessExp = null;
    this._refreshExp = null;

    localStorage.removeItem(accessToken);
    localStorage.removeItem(refreshToken);
    localStorage.removeItem(accessExp);
    localStorage.removeItem(refreshExp);
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get accessExp() {
    return this._accessExp;
  }

  get refreshExp() {
    return this._refreshExp;
  }
}

export default TokenManager;
