module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next/","<rootDir>/cypress/"],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy"
  }
}
