module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
