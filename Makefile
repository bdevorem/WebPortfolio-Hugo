website: 
	hugo --theme=modified_allegiant
webfromgit: git website
local:
	hugo serve --theme=modified_allegiant
git:
	git pull
deploy:
	git add *
	git commit
	git push
