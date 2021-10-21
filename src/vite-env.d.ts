/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_BASEPATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
