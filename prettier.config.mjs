/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type { &
 * import("prettier").Config &
 * import("@ianvs/prettier-plugin-sort-imports").PluginConfig
 * }
 */
// eslint-disable-next-line no-restricted-syntax
export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/",
    "",
    "^\\.",
  ],
};
