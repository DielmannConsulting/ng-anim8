import type { Config } from 'jest';

const isCI = process.env['CI'] === 'true';

const config: Config = {
  displayName: 'ng-anim8',
  setupFilesAfterEnv: [
    '<rootDir>/projects/ng-anim8/setup-jest.ts',
  ],
  roots: ['<rootDir>/projects/ng-anim8/src'],
  collectCoverage: false,
  coverageReporters: ['cobertura'],
  coverageDirectory: '<rootDir>/coverage/ng-anim8',
};

export default config;
