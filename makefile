publish:
	npm run build && npm publish --access=public

patch:
	npm version patch 
	@make publish

minor:
	npm version minor 
	@make publish

major:
	npm version major 
	@make publish