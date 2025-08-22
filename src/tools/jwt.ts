import { jwtDecode as jwtD } from 'jwt-decode';

export const jwtDecode = <T>(token: string) => jwtD<T>(token);
