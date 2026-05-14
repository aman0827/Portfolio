declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: gsap.DOMTarget, vars?: object);
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    static getById(id: string): ScrollSmoother | undefined;
    scrollTop(position?: number): number;
    scrollTo(target: gsap.DOMTarget | number, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean | ScrollSmoother;
  }
}
