
export {} // 使该文件成为外部模块。 注意：至少包含一个 export 或 import，让 TypeScript 识别它是模块化的。

// ts 全局变量
declare global {
  
  type Recordable<T = any> = Record<string, T>;

  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  interface ViteEnv {
    VITE_NAME: string;
  }

}