SRC=index.js

default:
	@echo "Default task is not set."

test:
	@./node_modules/.bin/mocha --harmony test

include node_modules/make-lint/index.mk

