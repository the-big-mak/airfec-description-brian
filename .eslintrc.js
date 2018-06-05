module.exports = {
  parser: "babel-eslint",
  plugins: ["react", "import", "jsx-a11y"],
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  rules: {
    "react/prop-types": [2]
  },
  extends: "airbnb-base"
};
