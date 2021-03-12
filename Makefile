install:
	npm install

build:
	npm run build

develop:
	npm start

lint:
	npx editorconfig-checker
	npx stylelint './src/**/*{.js,.jsx}'
	npx eslint './src/**/*{.js,.jsx}'

test:
	npm run test -- --watchAll=false

test-watch:
	npm run test

deploy: lint test build
	npx gh-pages -d build

.PHONY: build
