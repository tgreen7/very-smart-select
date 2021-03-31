module.exports = {
  "src/**/*.ts": [
    () => "tsc --skipLibCheck --noEmit",
    "prettier --write",
    "eslint --fix --max-warnings=0",
  ],
  "*.js": "eslint --cache --fix",
  "*.{js,css,md}": "prettier --write",
};
