module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'], // Look for tests in the 'tests' folder
  transform: {
    '^.+\\.ts$': [
      'ts-jest', // Use ts-jest to handle .ts files
      {
        'ts-jest': {
          useESM: true,  // Enable ESM support in ts-jest
        }
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js'],
  extensionsToTreatAsEsm: ['.ts'], // Treat TypeScript files as ESM
};

