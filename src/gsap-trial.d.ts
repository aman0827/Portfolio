// gsap-trial is deprecated — GSAP is now 100% free.
// SplitText and ScrollSmoother are now included in the standard 'gsap' package.
// These declarations are kept for any remaining legacy references.

declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: gsap.DOMTarget, vars?: object);
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    static get(): ScrollSmoother;
    scrollTop(position?: number): number;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTo(target: gsap.DOMTarget | number, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}
