declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface Performance {
  memory: any;
}
