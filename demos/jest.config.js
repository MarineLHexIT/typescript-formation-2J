module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    roots: ['<rootDir>/packages'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
