const path = require("path");

const eslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const prettierCommand = (filenames) =>
  `prettier ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((p) => !p.includes("[...nextauth]"))
    .join(" ")} --write`;

module.exports = {
  "*.{html,css,md,json}": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": [eslintCommand, prettierCommand],
};
