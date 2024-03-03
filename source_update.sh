#! /usr/bin/bash

sudo systemctl stop nginx
cd ~
git clone https://github.com/mhamid3d/mhamid3d.com.git
cd mhamid3d.com
npm install
npm run build
sudo rm -rf /var/www/mhamid3d.com/*
sudo mv ./build/* /var/www/mhamid3d.com/
cd ~
rm -rf ./mhamid3d.com
sudo systemctl restart nginx