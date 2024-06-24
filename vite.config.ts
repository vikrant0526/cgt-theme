import { resolve } from "path";
import { UserConfig, defineConfig } from "vite";
import viteBanner from "vite-plugin-banner";
import pkg from "./package.json";

const banner = `${pkg.name} v${pkg.version} | ${
  pkg.description
} | CopyRight (c) Cogitanda DataProtect AG ${new Date().getFullYear()}} | ${pkg.license} License `;

let config: UserConfig = {};
if (process.env.NODE_ENV === "production") {
  config = {
    plugins: [viteBanner(banner)],
    build: {
      lib: {
        entry: resolve(__dirname, "/src/main.ts"),
        name: "CGT",
        fileName: () => "index.js",
        formats: ["iife"],
      },
    },
  };
}

export default defineConfig(config);
