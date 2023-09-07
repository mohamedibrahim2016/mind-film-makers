import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {

  constructor() { }

  static async hash(text: string) {
    try {
      const utf8 = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    } catch (error: any) {
      return new Error(error);
    }
  }

  static generateToken() {
    return  crypto.randomUUID();
  }

  static encodeCompositeId(firstKey: string, secondKey: string) {
    return btoa(`${firstKey}:${secondKey}`);
  }

  static decodeCompositeKey(encodedKey: string) {
    if (!encodedKey || encodedKey === '') return null;
    const decodedString = atob(encodedKey);
    return decodedString.split(':');
  }
}
