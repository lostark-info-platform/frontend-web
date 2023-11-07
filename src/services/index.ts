import ApiService from './api/ApiService/ApiService.service';
import TokenService from './api/TokenService/TokenService.service';
import CookieService from './cookie/cookieService.service';

export const cookieService = new CookieService();
export const tokenService = new TokenService();
export const apiService = new ApiService();
