deploy: website
	[ `hostname` != 'johnbot.me' ] && ./sftp_dir.sh ; true
	git add *
	git commit
	git push
website: 
	hugo --theme=allegiant
	rm ./public/post/adlib/index.html
