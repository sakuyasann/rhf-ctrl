publish:
	@make build
	npm publish --access=public

build:
	npm run build 

patch:
	npm version patch 
	@make publish

minor:
	npm version minor 
	@make publish

major:
	npm version major 
	@make publish