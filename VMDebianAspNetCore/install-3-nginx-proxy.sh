#! /usr/bin/env bash

if [[ ! -d /etc/nginx/sites-available/ ]] ; then
	"no nginx found."
	exit
fi

if [[ ! -f /etc/nginx/sites-available/default.original.orig ]] ; then
	if [[ -f /etc/nginx/sites-available/default ]] ; then
		echo "backing up /etc/nginx/sites-available/default to /etc/nginx/sites-available/default.original.orig"
		sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.original.orig
	fi
fi

if grep -q "; # managed by Certbot" /etc/nginx/sites-enabled/default ; then 
    echo "Not changing nginx sites-available/default because it says managed by Certbot"
    exit
fi

echo "writing nginx default site for jobtracker.ascotdoors.co.uk --> http://127.0.0.1:5000"

sudo cat > /etc/nginx/sites-available/default <<"EOF"
server {
    listen        80;
    server_name   jobtracker.ascotdoors.co.uk *.jobtracker.ascotdoors.co.uk 18.169.32.140;
    location / {
        proxy_pass         http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}

server {
    listen   80 default_server;
    # listen [::]:80 default_server deferred;
    return   444;
}
EOF
