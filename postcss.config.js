import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssInport from "postcss-import";
import cssnano from "cssnano";

export default {
  plugins: [
    autoprefixer,
    postcssPresetEnv({ stage: 1 }),
    postcssInport,
    cssnano({ preset: "default" }),
  ],
};
