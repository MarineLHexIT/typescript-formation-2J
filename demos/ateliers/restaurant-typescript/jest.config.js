module.exports = {
    // Utilise ts-jest pour la transpilation TypeScript
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Fichiers de test ciblés avec une extension .test.ts
    testMatch: ['**/*.test.ts'],
  };