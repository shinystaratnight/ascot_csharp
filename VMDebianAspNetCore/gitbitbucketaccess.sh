#! /usr/bin/env bash
#
# bitbucket access
git config --global credential.https://bitbucket.org.username $GIT_USERNAME
git config --global core.askPass /home/admin/gitbitbucketpassword.sh
git config --global user.email USEREMAILHERE
git config --global user.name USERNAMEHERE