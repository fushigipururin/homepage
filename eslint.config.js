// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
            eslintConfigPrettier,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "app",
                    style: "kebab-case",
                },
            ],
            "@angular-eslint/prefer-on-push-component-change-detection": "error",
            "@angular-eslint/sort-lifecycle-methods": "error",
            "@angular-eslint/no-async-lifecycle-method": "error",
            "@angular-eslint/no-lifecycle-call": "error",
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            '@angular-eslint/template/attributes-order': [
                'error',
                {
                    alphabetical: true,
                    order: [
                        'STRUCTURAL_DIRECTIVE', // deprecated, use @if and @for instead
                        'TEMPLATE_REFERENCE', // e.g. `<input #inputRef>`
                        'ATTRIBUTE_BINDING', // e.g. `<input required>`, `id="3"`
                        'INPUT_BINDING', // e.g. `[id]="3"`, `[attr.colspan]="colspan"`,
                        'TWO_WAY_BINDING', // e.g. `[(id)]="id"`,
                        'OUTPUT_BINDING', // e.g. `(idChange)="handleChange()"`,
                    ],
                },
            ],
            '@angular-eslint/template/button-has-type': 'warn',
            '@angular-eslint/template/eqeqeq': 'error',
            '@angular-eslint/template/prefer-control-flow': 'error',
            '@angular-eslint/template/prefer-ngsrc': 'warn',
            '@angular-eslint/template/use-track-by-function': 'warn',
            "@angular-eslint/template/prefer-self-closing-tags": "warn",
            "@angular-eslint/template/no-duplicate-attributes": "error",
        },
    }
);
