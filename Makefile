deploy: website
	./sftp_dir.sh
	git add *
	git commit
	git push
website: clean
	hugo --theme=allegiant
clean:
	rm -rf public
