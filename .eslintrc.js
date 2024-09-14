module.exports = {
	// ESLint docs -- Configuring ESLint:      https://eslint.org/docs/user-guide/configuring
	// ESLint docs -- List of available rules: https://eslint.org/docs/rules/

	'env': {
		'amd': false,                           // Defines require() and define() as global variables as per the amd spec
		'applescript': false,                   // AppleScript global variables.
		'atomtest': false,                      // Atom test helper globals.
		'browser': false,                       // Browser global variables
		'commonjs': false,                      // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
		'embertest': false,                     // Ember test helper globals.
		'es6': false,                           // Enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
		'greasemonkey': false,                  // GreaseMonkey globals.
		'jasmine': false,                       // Adds all of the Jasmine testing global variables for version 1.3 and 2.0
		'jest': false,                          // Jest global variables.
		'jquery': false,                        // JQuery global variables
		'meteor': false,                        // Meteor global variables.
		'mocha': false,                         // Adds all of the Mocha testing global variables
		'mongo': false,                         // MongoDB global variables.
		'nashorn': false,                       // Java 8 Nashorn global variables.
		'node': false,                          // Node.js global variables and Node.js scoping.
		'phantomjs': false,                     // PhantomJS global variables
		'prototypejs': false,                   // Prototype.js global variables
		'protractor': false,                    // Protractor global variables
		'qunit': false,                         // QUnit global variables.
		'serviceworker': false,                 // Service Worker global variables.
		'shared-node-browser': false,           // Globals common to both Node and Browser.
		'shelljs': false,                       // ShellJS global variables
		'webextensions': false,                 // WebExtensions globals.
		'worker': false,                        // Web workers global variables.
	},

	'extends': [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier/@typescript-eslint',
	],

	'globals': { /* E.g. 'angular': true */ },

	'ignorePatterns': [
		'.eslintrc.js',
		'*.tsx',
		'!/**/Index.tsx',
		'config/**/*.js',
		'scripts/**/*.js',
		'tools/**/*.js',
		'vendor/**/*.js',
		'public',
		'node_modules/**/*',
		'build/**/*',
	],

	'overrides': [
		{
			'files': ['*.vue'],
			'rules': {
				'indent': 'off',
			}
		},
		{
			'files': [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			'env': {
				'mocha': true,
			},
		},
	],

	'parser': 'vue-eslint-parser',

	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'globalReturn': false,              // Allow return statements in the global scope
			'impliedStrict': false,             // Enable global strict mode (if ecmaVersion is 5 or greater)
			'jsx': false,                       // Enable JSX
		},

		'ecmaVersion': 2020,
	},

	'plugins': [
		// '@typescript-eslint',

		// E.g. 'react' (must run `npm install eslint-plugin-react` first)
	],

	'rules': {

		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/no-unused-vars': 0,

		'for-direction': 0,                     // Enforce “for” loop update clause moving the counter in the right direction.
		'getter-return': 0,                     // Enforce return statements in getters
		'no-await-in-loop': 0,                  // Disallow await inside of loops
		'no-compare-neg-zero': 0,               // Disallow comparing against -0
		'no-cond-assign': 0,                    // Disallow assignment operators in conditional expressions
		'no-console': 0,                        // Disallow the use of console
		'no-constant-condition': 0,             // Disallow constant expressions in conditions
		'no-control-regex': 0,                  // Disallow control characters in regular expressions
		'no-debugger': 0,                       // Disallow the use of debugger
		'no-dupe-args': 0,                      // Disallow duplicate arguments in function definitions
		'no-dupe-keys': 0,                      // Disallow duplicate keys in object literals
		'no-duplicate-case': 0,                 // Disallow duplicate case labels
		'no-empty': 0,                          // Disallow empty block statements
		'no-empty-character-class': 0,          // Disallow empty character classes in regular expressions
		'no-ex-assign': 0,                      // Disallow reassigning exceptions in catch clauses
		'no-extra-boolean-cast': 0,             // Disallow unnecessary boolean casts
		'no-extra-parens': 0,                   // Disallow unnecessary parentheses
		'no-extra-semi': 0,                     // Disallow unnecessary semicolons
		'no-func-assign': 0,                    // Disallow reassigning function declarations
		'no-inner-declarations': 0,             // Disallow variable or function declarations in nested blocks
		'no-invalid-regexp': 0,                 // Disallow invalid regular expression strings in RegExp constructors
		'no-irregular-whitespace': 0,           // Disallow irregular whitespace outside of strings and comments
		'no-obj-calls': 0,                      // Disallow calling global object properties as functions
		'no-prototype-builtins': 0,             // Disallow calling some Object.prototype methods directly on objects
		'no-regex-spaces': 0,                   // Disallow multiple spaces in regular expressions
		'no-sparse-arrays': 0,                  // Disallow sparse arrays
		'no-template-curly-in-string': 0,       // Disallow template literal placeholder syntax in regular strings
		'no-unexpected-multiline': 0,           // Disallow confusing multiline expressions
		'no-unreachable': 0,                    // Disallow unreachable code after return, throw, continue, and break statements
		'no-unsafe-finally': 0,                 // Disallow control flow statements in finally blocks
		'no-unsafe-negation': 0,                // Disallow negating the left operand of relational operators
		'use-isnan': 0,                         // Require calls to isNaN() when checking for NaN
		'valid-jsdoc': 0,                       // Enforce valid JSDoc comments
		'valid-typeof': 0,                      // Enforce comparing typeof expressions against valid strings


		// ////// Best Practices ////////

		'accessor-pairs': 0,                    // Enforce getter and setter pairs in objects
		'array-callback-return': 0,             // Enforce return statements in callbacks of array methods
		'block-scoped-var': 0,                  // Enforce the use of variables within the scope they are defined
		'class-methods-use-this': 0,            // Enforce that class methods utilize this
		'complexity': 0,                        // Enforce a maximum cyclomatic complexity allowed in a program
		'consistent-return': 0,                 // Require return statements to either always or never specify values
		'curly': 0,                             // Enforce consistent brace style for all control statements
		'default-case': 0,                      // Require default cases in switch statements
		'dot-location': 0,                      // Enforce consistent newlines before and after dots
		'dot-notation': 0,                      // Enforce dot notation whenever possible
		'eqeqeq': 0,                            // Require the use of === and !==
		'guard-for-in': 0,                      // Require for-in loops to include an if statement
		'no-alert': 0,                          // Disallow the use of alert, confirm, and prompt
		'no-caller': 0,                         // Disallow the use of arguments.caller or arguments.callee
		'no-case-declarations': 0,              // Disallow lexical declarations in case clauses
		'no-div-regex': 0,                      // Disallow division operators explicitly at the beginning of regular expressions
		'no-else-return': 0,                    // Disallow else blocks after return statements in if statements
		'no-empty-function': 0,                 // Disallow empty functions
		'no-empty-pattern': 0,                  // Disallow empty destructuring patterns
		'no-eq-null': 0,                        // Disallow null comparisons without type-checking operators
		'no-eval': 0,                           // Disallow the use of eval()
		'no-extend-native': 0,                  // Disallow extending native types
		'no-extra-bind': 0,                     // Disallow unnecessary calls to .bind()
		'no-extra-label': 0,                    // Disallow unnecessary labels
		'no-fallthrough': 0,                    // Disallow fallthrough of case statements
		'no-floating-decimal': 0,               // Disallow leading or trailing decimal points in numeric literals
		'no-global-assign': 0,                  // Disallow assignments to native objects or read-only global variables
		'no-implicit-coercion': 0,              // Disallow shorthand type conversions
		'no-implicit-globals': 0,               // Disallow variable and function declarations in the global scope
		'no-implied-eval': 0,                   // Disallow the use of eval()-like methods
		'no-invalid-this': 0,                   // Disallow this keywords outside of classes or class-like objects
		'no-iterator': 0,                       // Disallow the use of the __iterator__ property
		'no-labels': 0,                         // Disallow labeled statements
		'no-lone-blocks': 0,                    // Disallow unnecessary nested blocks
		'no-loop-func': 0,                      // Disallow function declarations and expressions inside loop statements
		'no-magic-numbers': 0,                  // Disallow magic numbers
		'no-multi-spaces': 0,                   // Disallow multiple spaces
		'no-multi-str': 0,                      // Disallow multiline strings
		'no-new': 0,                            // Disallow new operators outside of assignments or comparisons
		'no-new-func': 0,                       // Disallow new operators with the Function object
		'no-new-wrappers': 0,                   // Disallow new operators with the String, Number, and Boolean objects
		'no-octal': 0,                          // Disallow octal literals
		'no-octal-escape': 0,                   // Disallow octal escape sequences in string literals
		'no-param-reassign': 0,                 // Disallow reassigning function parameters
		'no-proto': 0,                          // Disallow the use of the __proto__ property
		'no-redeclare': 0,                      // Disallow variable redeclaration
		'no-restricted-properties': 0,          // Disallow certain properties on certain objects
		'no-return-assign': 0,                  // Disallow assignment operators in return statements
		'no-return-await': 0,                   // Disallow unnecessary return await
		'no-script-url': 0,                     // Disallow javascript: urls
		'no-self-assign': 0,                    // Disallow assignments where both sides are exactly the same
		'no-self-compare': 0,                   // Disallow comparisons where both sides are exactly the same
		'no-sequences': 0,                      // Disallow comma operators
		'no-throw-literal': 0,                  // Disallow throwing literals as exceptions
		'no-unmodified-loop-condition': 0,      // Disallow unmodified loop conditions
		'no-unused-expressions': 0,             // Disallow unused expressions
		'no-unused-labels': 0,                  // Disallow unused labels
		'no-useless-call': 0,                   // Disallow unnecessary calls to .call() and .apply()
		'no-useless-concat': 0,                 // Disallow unnecessary concatenation of literals or template literals
		'no-useless-escape': 0,                 // Disallow unnecessary escape characters
		'no-useless-return': 0,                 // Disallow redundant return statements
		'no-void': 0,                           // Disallow void operators
		'no-warning-comments': 0,               // Disallow specified warning terms in comments
		'no-with': 0,                           // Disallow with statements
		'prefer-promise-reject-errors': 0,      // Require using Error objects as Promise rejection reasons
		'radix': 0,                             // Enforce the consistent use of the radix argument when using parseInt()
		'require-await': 0,                     // Disallow async functions which have no await expression
		'vars-on-top': 0,                       // Require var declarations be placed at the top of their containing scope
		'wrap-iife': 0,                         // Require parentheses around immediate function invocations
		'yoda': 0,                              // Require or disallow “Yoda” conditions


		// ////// Strict Mode ////////

		'strict': 0,                            // Require or disallow strict mode directives


		// ////// Variables ////////

		'init-declarations': 0,                 // Require or disallow initialization in variable declarations
		'no-catch-shadow': 0,                   // Disallow catch clause parameters from shadowing variables in the outer scope
		'no-delete-var': 0,                     // Disallow deleting variables
		'no-label-var': 0,                      // Disallow labels that share a name with a variable
		'no-restricted-globals': 0,             // Disallow specified global variables
		'no-shadow': 0,                         // Disallow variable declarations from shadowing variables declared in the outer scope
		'no-shadow-restricted-names': 0,        // Disallow identifiers from shadowing restricted names
		'no-undef': 0,                          // Disallow the use of undeclared variables unless mentioned in /*global */ comments
		'no-undef-init': 0,                     // Disallow initializing variables to undefined
		'no-undefined': 0,                      // Disallow the use of undefined as an identifier
		'no-unused-vars': 0,                    // Disallow unused variables
		'no-use-before-define': 0,              // Disallow the use of variables before they are defined


		// ////// Node.js and CommonJS ////////

		'callback-return': 0,                   // Require return statements after callbacks
		'global-require': 0,                    // Require require() calls to be placed at top-level module scope
		'handle-callback-err': 0,               // Require error handling in callbacks
		'no-buffer-constructor': 0,             // Disallow use of the Buffer() constructor
		'no-mixed-requires': 0,                 // Disallow require calls to be mixed with regular variable declarations
		'no-new-require': 0,                    // Disallow new operators with calls to require
		'no-path-concat': 0,                    // Disallow string concatenation with __dirname and __filename
		'no-process-env': 0,                    // Disallow the use of process.env
		'no-process-exit': 0,                   // Disallow the use of process.exit()
		'no-restricted-modules': 0,             // Disallow specified modules when loaded by require
		'no-sync': 0,                           // Disallow synchronous methods


		// ////// Stylistic Issues ////////

		'array-bracket-newline': ['error', 'consistent'],                     // Enforce linebreaks after opening and before closing array brackets
		'array-bracket-spacing': ['error', 'never'],                          // Enforce consistent spacing inside array brackets
		'array-element-newline': ['error', 'consistent'],                     // Enforce line breaks after each array element
		'block-spacing': ['error', 'always'],                                 // Disallow or enforce spaces inside of blocks after opening block and before closing block
		'brace-style': 0, // ['error', 'stroustrup'],                               // Enforce consistent brace style for blocks
		'camelcase': 0,                                                       // Enforce camelcase naming convention
		'capitalized-comments': 0,                                            // Enforce or disallow capitalization of the first letter of a comment
		'comma-dangle': ['error', 'only-multiline'],                          // Require or disallow trailing commas
		'comma-spacing': ['error', {
			'after': true,
			'before': false,
		}],       // Enforce consistent spacing before and after commas
		'comma-style': ['error', 'last'],                                     // Enforce consistent comma style
		'computed-property-spacing': ['error', 'never'],                      // Enforce consistent spacing inside computed property brackets
		'consistent-this': ['error', 'self'],                                 // Enforce consistent naming when capturing the current execution context
		'eol-last': ['error', 'always'],                                      // Require or disallow newline at the end of files
		'func-call-spacing': ['error', 'never'],                              // Require or disallow spacing between function identifiers and their invocations
		'func-name-matching': 0,                                              // Require function names to match the name of the variable or property to which they are assigned
		'func-names': 0,                                                      // Require or disallow named function expressions
		'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],  // Enforce the consistent use of either function declarations or expressions
		'function-paren-newline': ['error', 'multiline-arguments'],               // Enforce consistent line breaks inside function parentheses
		'id-blacklist': 0,                                                    // Disallow specified identifiers
		'id-length': 0,                                                       // Enforce minimum and maximum identifier lengths
		'id-match': 0,                                                        // Require identifiers to match a specified regular expression
		'implicit-arrow-linebreak': 0,                                          // Enforce the location of arrow function bodies
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],                      // Enforce consistent indentation
		'jsx-quotes': 0,                                                      // Enforce the consistent use of either double or single quotes in JSX attributes
		'key-spacing': ['error', {
			'afterColon': true,
			'beforeColon': false
		}], // Enforce consistent spacing between keys and values in object literal properties
		'keyword-spacing': ['error', {
			'after': true,
			'before': true
		}],      // Enforce consistent spacing before and after keywords
		'line-comment-position': 0,                                           // Enforce position of line comments
		'linebreak-style': 0,                                                 // Enforce consistent linebreak style
		'lines-around-comment': ['error', {
			'allowArrayStart': true,
			'allowBlockStart': true,
			'allowClassStart': true,
			'allowObjectStart': true,
			'beforeBlockComment': true,
			'beforeLineComment': true,
		}],              // Require empty lines around comments
		'lines-between-class-members': 0,       // Require or disallow an empty line between class members
		'max-depth': ['error', 4],              // Enforce a maximum depth that blocks can be nested
		'max-len': 0,              // Enforce a maximum line length
		'max-lines': ['error', 2000],           // Enforce a maximum number of lines per file
		'max-nested-callbacks': ['error', 3],   // Enforce a maximum depth that callbacks can be nested
		'max-params': ['error', 6],             // Enforce a maximum number of parameters in function definitions
		'max-statements': 0,                    // Enforce a maximum number of statements allowed in function blocks
		'max-statements-per-line': ['error', { 'max': 2 }], // Enforce a maximum number of statements allowed per line
		'multiline-comment-style': 0,           // Enforce a particular style for multiline comments
		'multiline-ternary': ['error', 'always-multiline'], // Enforce newlines between operands of ternary expressions
		'new-cap': 0,                           // Require constructor names to begin with a capital letter
		'new-parens': 0,                        // Require parentheses when invoking a constructor with no arguments
		'newline-per-chained-call': 0,
		'no-array-constructor': 0,              // Disallow Array constructors
		'no-bitwise': 0,                        // Disallow bitwise operators
		'no-continue': 0,                       // Disallow continue statements
		'no-inline-comments': 0,                // Disallow inline comments after code
		'no-lonely-if': 0,                      // Disallow if statements as the only statement in else blocks
		'no-mixed-operators': 0,                // Disallow mixed binary operators
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // Disallow mixed spaces and tabs for indentation
		'no-multi-assign': 0,                   // Disallow use of chained assignment expressions
		'no-multiple-empty-lines': 0,           // Disallow multiple empty lines
		'no-negated-condition': 0,              // Disallow negated conditions
		'no-nested-ternary': 0,                 // Disallow nested ternary expressions
		'no-new-object': 0,                     // Disallow Object constructors
		'no-plusplus': 0,                       // Disallow the unary operators ++ and --
		'no-restricted-syntax': 0,              // Disallow specified syntax
		'no-tabs': 0,                           // Disallow all tabs
		'no-ternary': 0,                        // Disallow ternary operators
		'no-trailing-spaces': ['error', { 'skipBlankLines': true }], // Disallow trailing whitespace at the end of lines
		'no-underscore-dangle': 0,              // Disallow dangling underscores in identifiers
		'no-unneeded-ternary': 2,               // Disallow ternary operators when simpler alternatives exist
		'no-whitespace-before-property': 2,     // Disallow whitespace before properties
		'nonblock-statement-body-position': 0,  // Enforce the location of single-line statements
		'object-curly-newline': ['error', {
			'ObjectExpression': { 'consistent': true },
			'ObjectPattern': { 'multiline': true },
			'ImportDeclaration': 'never',
			'ExportDeclaration': {
				'multiline': true,
				'minProperties': 3
			}
		}],              // Enforce consistent line breaks inside braces
		'object-curly-spacing': ['error', 'always', {
			'arraysInObjects': true,
			'objectsInObjects': true
		}], // Enforce consistent spacing inside braces
		'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],           // Enforce placing object properties on separate lines
		'one-var': 0,                           // Enforce variables to be declared either together or separately in functions
		'one-var-declaration-per-line': 0,      // Require or disallow newlines around variable declarations
		'operator-assignment': 0,               // Require or disallow assignment operator shorthand where possible
		'operator-linebreak': ['error', 'before'], // Enforce consistent linebreak style for operators
		'padded-blocks': ['error', 'never'],    // Require or disallow padding within blocks
		'padding-line-between-statements': 0,   // Require or disallow padding lines between statements (@todo)
		'quote-props': ['error', 'consistent'], // Require quotes around object literal property names
		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // Enforce the consistent use of either backticks, double, or single quotes
		'require-jsdoc': ['error', {
			'require': {
				'ArrowFunctionExpression': false,
				'ClassDeclaration': false,
				'FunctionDeclaration': true,
				'FunctionExpression': true,
				'MethodDefinition': true,
			}
		}],                     // Require JSDoc comments
		'semi': 2,                              // Require or disallow semicolons instead of ASI
		'semi-spacing': ['error', {
			'after': true,
			'before': false,
		}], // Enforce consistent spacing before and after semicolons
		'semi-style': 0,                        // Enforce location of semicolons
		'sort-keys': ['error', 'asc', { caseSensitive: true }],                         // Require object keys to be sorted
		'sort-vars': 0,                         // Require variables within the same declaration block to be sorted
		'space-before-blocks': 0,               // Enforce consistent spacing before blocks
		'space-before-function-paren': 0,
		'space-in-parens': ['error', 'never'],                   // Enforce consistent spacing inside parentheses
		'space-infix-ops': 2,                   // Require spacing around infix operators
		'space-unary-ops': ['error', {
			'nonwords': false,
			'words': true,
		}],                   // Enforce consistent spacing before or after unary operators
		'spaced-comment': ['error', 'always', { 'markers': ['/'] }],                    // Enforce consistent spacing after the // or /* in a comment
		'switch-colon-spacing': 2,              // Enforce spacing around colons of switch statements
		'template-tag-spacing': ['error', 'always'],              // Require or disallow spacing between template tags and their literals
		'unicode-bom': 0,                       // Require or disallow Unicode byte order mark (BOM)
		'wrap-regex': 0,                        // Require parenthesis around regex literals


		// ////// ECMAScript 6 ////////

		'arrow-body-style': 0,
		'arrow-parens': ['error', 'always'],              // Require parentheses around arrow function arguments
		'arrow-spacing': ['error', {
			'after': true,
			'before': true,
		}],                     // Enforce consistent spacing before and after the arrow in arrow functions
		'constructor-super': 2,                 // Require super() calls in constructors
		'generator-star-spacing': 0,            // Enforce consistent spacing around * operators in generator functions
		'no-class-assign': 2,                   // Disallow reassigning class members
		'no-confusing-arrow': 0,                // Disallow arrow functions where they could be confused with comparisons
		'no-const-assign': 2,                   // Disallow reassigning const variables
		'no-dupe-class-members': 2,             // Disallow duplicate class members
		'no-duplicate-imports': 2,              // Disallow duplicate module imports
		'no-new-symbol': 2,                     // Disallow new operators with the Symbol object
		'no-restricted-imports': 0,             // Disallow specified modules when loaded by import
		'no-this-before-super': 0,              // Disallow this/super before calling super() in constructors
		'no-useless-computed-key': 0,           // Disallow unnecessary computed property keys in object literals
		'no-useless-constructor': 2,            // Disallow unnecessary constructors
		'no-useless-rename': 2,                 // Disallow renaming import, export, and destructured assignments to the same name
		'no-var': 2,                            // Require let or const instead of var
		'object-shorthand': ['error', 'consistent'],   // Require or disallow method and property shorthand syntax for object literals
		'prefer-arrow-callback': 0,             // Require using arrow functions for callbacks
		'prefer-const': 0,                      // Require const declarations for variables that are never reassigned after declared
		'prefer-destructuring': 0,              // Require destructuring from arrays and/or objects
		'prefer-numeric-literals': 0,           // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
		'prefer-rest-params': 0,                // Require rest parameters instead of arguments
		'prefer-spread': 2,                     // Require spread operators instead of .apply()
		'prefer-template': 0,                   // Require template literals instead of string concatenation
		'require-yield': 0,                     // Require generator functions to contain yield
		'rest-spread-spacing': 2,               // Enforce spacing between rest and spread operators and their expressions
		'sort-imports': 0,                      // Enforce sorted import declarations within modules
		'symbol-description': 0,                // Require symbol descriptions
		'template-curly-spacing': 0,            // Require or disallow spacing around embedded expressions of template strings
		'yield-star-spacing': 0,                // Require or disallow spacing around the * in yield* expressions

		'vue/script-indent': 0,
		'vue/html-indent': ['error', 'tab', {
			'alignAttributesVertically': true,
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'ignores': [],
		}],
	},
};
