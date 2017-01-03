website: 
	hugo --theme=modified_allegiant
webfromgit: git website
git:
	git pull
deploy:
	git add *
	git commit
	git push
