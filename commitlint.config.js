const HEADER_MAX_LENGTH = 72;

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
      ],
    ],

    "header-max-length": [2, "always", HEADER_MAX_LENGTH],
    "subject-case": [0, "never"],
  },
};
