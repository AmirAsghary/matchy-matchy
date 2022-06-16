module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    reporters: ["default", "jest-junit"],
    setupFilesAfterEnv: ['<rootDir>/test/testSetup.js'],
    testEnvironmentOptions: { "resources": "usable" }
};