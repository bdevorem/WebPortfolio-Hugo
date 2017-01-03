website: 
	hugo --theme=modified_allegiant
	rm ./public/post/adlib/adlib/index.html
	cp ./content/post/adlib/adlib.php ./public/post/adlib/adlib/index.php
webfromgit: git website
git:
	git pull
deploy:
	git add *
	git commit
	git push
