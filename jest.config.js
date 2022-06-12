module.exports = {
    testEnvironment: 'node',
    reporters: ["default", "jest-junit"],
    setupFilesAfterEnv: ['<rootDir>/test/testSetup.js'],
};