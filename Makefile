deploy: website
	./sftp_dir.sh
	git add *
	git commit
	git push
website: clean
	hugo --theme=hugo-cactus-theme
clean:
	rm -rf public
