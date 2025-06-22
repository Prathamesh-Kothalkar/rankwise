// global.d.ts
interface Window {
  ezstandalone?: {
    cmd: {
      push: (fn: () => void) => void;
    };
    showAds: (...ids: number[]) => void;
  };
}
