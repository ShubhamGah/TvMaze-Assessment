module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
    },
  },
};
