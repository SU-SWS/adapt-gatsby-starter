module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['./src/components/**/*.{ts,tsx,js,jsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
