declare global {
  interface Window {
    cookieUtils: {
      setCookie: (name: string, value: string, days?: number) => void;
      getCookie: (name: string) => string;
      deleteCookie: (name: string) => void;
    };
    storageUtils: {
      setLocal: (name: string, value: string) => void;
      getLocal: (name: string) => string;
      deleteLocal: (name: string) => void;
      setJSON: (name: string, value: unknown) => void;
      getJSON: (name: string) => unknown | null;
    };
  }
}

export {};
