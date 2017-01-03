#!/bin/sh
# usage: sftp_dir.sh [Destination Directory] [Source Directory] [Destination Server]
# with defaults set up for my NetFile space for the University of Notre Dame

# This script was created because the NetFile space did not allow for scp or rsync
# It allows for a recursive upload of a directory over sftp, and is a complete bandaid fix
DEST_DIR=${1:-'NetFile/www'}
SRC_DIR=${2:-'public'}
DEST_SERVER=${3:-'jwesthof@webfile.nd.edu'}
files=`find $SRC_DIR`
tmp=`mktemp`
echo "cd $DEST_DIR" >> $tmp
echo "rm -r *" >> $tmp
for f in $files; do
    if [ -d $f ] ; then
        echo "mkdir `echo $f | sed 's|'$SRC_DIR'/||'`" >> $tmp
    elif [ -e $f ] ; then
        fp=`echo $f | sed 's|/[^/]*$||;s|'^$SRC_DIR'||'`/`basename $f`
        fp=`echo $fp | sed 's|^/||'`
        echo "put $f $fp"  >> $tmp
    fi
done
sftp $DEST_SERVER < $tmp
rm $tmp
