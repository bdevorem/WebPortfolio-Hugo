deploy: website
	./sftp_dir.sh
website: clean
	hugo --theme=allegiant
clean:
	rm -rf public
