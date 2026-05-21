declare global {
  interface Window {
    cookieUtils: {
      setCookie: (name: string, value: string, days?: number) => void;
      getCookie: (name: string) => string;
      deleteCookie: (name: string) => void;
    };
  }
}

export {};
