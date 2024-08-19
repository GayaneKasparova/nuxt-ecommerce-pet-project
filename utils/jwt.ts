import type { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

// Define a custom interface if your JWT has specific fields
export interface CustomJwtPayload extends JwtPayload {
  userId?: string;
  username?: string;
  role?: string;
  exp: number;
}

export function decodeToken(token: string): CustomJwtPayload | null {
  try {
    const decodedToken = jwtDecode<CustomJwtPayload>(token);
    return decodedToken;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}

export function isTokenExpired(decodedToken: JwtPayload | null): boolean {
  if (!decodedToken || !decodedToken.exp) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime;
}
