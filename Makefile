website: 
	hugo --theme=allegiant
	rm ./public/post/adlib/index.html
	cp ./content/post/adlib.php ./public/post/adlib/index.php
deploy:
	git add *
	git commit
	git push
