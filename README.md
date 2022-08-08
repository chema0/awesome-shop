The project organization follows the [Bulletproof React](https://github.com/alan2207/bulletproof-react) simple, scalable, and powerful architecture for building production ready React applications.

## 🌐 Deployment

## ⚙️ Configuration and tools

### Vite

`vite.config.ts`: configuration file.

### ESLint

`.eslintrc.js`: configuration file.

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/features/*/*'],
          },
        ],
        'linebreak-style': ['error', 'unix'],
        'react/prop-types': 'off',

        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',

        'react/react-in-jsx-scope': 'off',

        '@typescript-eslint/no-unused-vars': ['error'],

        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
```

Linter functionality extended by the following plugins:

- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import): rules that help validate proper imports.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): plugin for Prettier formatting.
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react): React-specific linting rules.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): rules for React hooks.
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library): plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library. 
- [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom): rules for use with jest-dom.

In order to install all the plugins using **yarn**:

```bash
yarn add --exact --dev eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library eslint-plugin-jest-dom 
```

### Prettier

`.prettierrc`: configuration file.

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5"
}
```

### Absolute imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as ../../../Component. Wherever you move the file, all the imports will remain intact.

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
 	}
 }
```

Configuration file: `tsconfig.json` (TypeScript).

When working with Vite, [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) simplifies the configuration process.

## 🗄️ Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

A feature folder could also contain other features (if used only within the parent feature) or be kept separated, it's a matter of preference.

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using:

`import {AwesomeComponent} from "@/features/awesome-feature"`

and not

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`

This can also be configured in the ESLint configuration to disallow the later import by the following rule:

```js
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```

This was inspired by how [NX](https://nx.dev/) handles libraries that are isolated but available to be used by the other modules. Think of a feature as a library or a module that is self-contained but can expose different parts to other features via its entry point.

## 👁️ Style Guide

## 🧪 Testing

##  📚 Storybook

## ✨ Dependencies
