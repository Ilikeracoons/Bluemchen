import globals from 'globals';

import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import regexpPlugin from 'eslint-plugin-regexp';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import unicornPlugin from 'eslint-plugin-unicorn';

const tsLintConfigRecommendedTypeChecked = tslint.configs.recommendedTypeChecked;
for (const config of tsLintConfigRecommendedTypeChecked) config.files = ['*.ts'];

/** @type { import('eslint').Linter.Config[] }*/
export default [
  {
    ignores: ['Templates/*'],
  },
  {
    name: 'eslint-config:config',
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: '.',
        warnOnUnsupportedTypeScriptVersion: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.builtin,
        ...globals.node,
        ...globals.es2024,
        NodeJS: 'readonly',
        command: 'writable'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  ...tsLintConfigRecommendedTypeChecked,
  jsdocPlugin.configs['flat/recommended'],
  regexpPlugin.configs['flat/recommended'],
  sonarjsPlugin.configs.recommended,
  unicornPlugin.configs['flat/recommended'],
  {
    name: 'elsint-config:rules',
    rules: {
      "jsdoc/require-returns": "off",
      "jsdoc/require-returns-description": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/no-multi-asterisks": [
        "warn",
        {
          "preventAtEnd": false
        }
      ],
      "jsdoc/multiline-blocks": [
        "error",
        {
          "noFinalLineText": false
        }
      ],
      "jsdoc/require-jsdoc": "off",
      "unicorn/catch-error-name": [
        "warn",
        {
          "ignore": [
            String.raw`^err(or)?\d*$`
          ]
        }
      ],
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": [
        "error",
        {
          "case": "camelCase"
        }
      ],
      "unicorn/import-style": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/switch-case-braces": [
        "error",
        "avoid"
      ],
      "unicorn/empty-brace-spaces": "off", // Handled by `no-empty`",
      "@typescript-eslint/no-require-imports": "off",
      "sonarjs/sonar-no-fallthrough": "off", // Errors in userinfo.js:44 for an unknown reason
      "sonarjs/void-use": "off" 
    }
  }
];