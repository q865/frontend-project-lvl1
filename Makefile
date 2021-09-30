# Makefile
brain-games:	
		node bin/brain-games.js
brain-calc:
		node bin/brain-calc.js
brain-gcd:
		node bin/brain-gcd
brain-progression:
		node bin/brain-progression
brain-prime:
		node bin/brain-prime
brain-even:
		node bin/brain-even
install:
		npm install
publish:
		npm publish --dry-run
lint:
		npx eslint .
fix:
		npx eslint . --fix
