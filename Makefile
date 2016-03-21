deploy: website
	./sftp_dir.sh
website:
	hugo --theme=allegiant
