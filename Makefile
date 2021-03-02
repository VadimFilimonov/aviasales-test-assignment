install:
	npm install

build:
	npm run build

develop:
	npm start

lint:
	npm run lint

test:
	npm run test -- --watchAll=false

test-watch:
	npm run test

.PHONY: build
