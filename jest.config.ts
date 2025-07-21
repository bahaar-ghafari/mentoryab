// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "babel-jest",
      { presets: ["@babel/preset-typescript", "@babel/preset-react"] },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
