#!/bin/sh
#deploy sh
set -e

sudo apt-get install -y lftp
mkdir deployment

# deployment via ftp upload, using ftps
lftp -c "set ftps:initial-prot '';set ssl:verify-certificate no;
        open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST:21; mirror -eRv deployment .; quit;"