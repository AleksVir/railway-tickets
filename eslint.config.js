import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: fixupConfigRules(compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended'
    )),
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': ['error', { allowReferrer: false }]
    }
  }
]);
