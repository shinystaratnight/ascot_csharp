#! /usr/bin/env bash

user=ascotjobtracker
sudo useradd $user
sudo mkdir "/home/$user"
sudo mkdir "/home/$user/blue"
sudo mkdir "/home/$user/green"
sudo chown -R "$user":"$user" "/home/$user"

origin="https://bitbucket.org/ChrisFCarroll/ascot.git"

grep -q "alias cdblue" ~/.bashrc \
	|| echo "
alias cdblue='cd /home/$user/blue/Web'
alias cdgreen='cd /home/$user/green/Web'
export githubpass=''
" >> ~/.bashrc

cd "/home/$user/green"
git status || git clone $origin .

cd "/home/$user/blue"
git status || git clone $origin .

sudo chown -R "$user":"$user" "/home/$user"
sudo usermod -a -G ascotjobtracker $(whoami)
sudo chmod -R g+rw "/home/$user"
