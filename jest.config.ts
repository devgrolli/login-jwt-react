const config = {
  preset: 'ts-jest',
  coverageDirectory: "coverage",
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: ["<rootDir>/src"],
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  transformIgnorePatterns: ["node_modules/(?!react-native|react-navigation)/"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
}

export default config