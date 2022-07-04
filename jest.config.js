module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFiles: ['./setupJest.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff2|svg)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|lodash-es|rc-.+?|@babel/runtime).+(js|jsx)$'],
};
