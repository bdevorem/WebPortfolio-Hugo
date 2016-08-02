website: 
	hugo --theme=allegiant
	rm ./public/post/adlib/index.html
	cp ./content/post/adlib.php ./public/post/adlib/index.php
deploy: website
	[ `hostname` != 'johnbot.me' ] && ./sftp_dir.sh ; true
	git add *
	git commit
	git push
