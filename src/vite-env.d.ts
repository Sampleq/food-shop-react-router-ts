/// <reference types="vite/client" />

// for variables from .env
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // другие переменные...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
