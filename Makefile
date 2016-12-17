website: 
	hugo --theme=allegiant
	rm ./public/post/adlib/index.html
	cp ./content/post/adlib.php ./public/post/adlib/index.php
webfromgit: git website
git:
	git pull
deploy:
	git add *
	git commit
	git push
