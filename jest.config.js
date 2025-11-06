module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'big.js',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ]
};
