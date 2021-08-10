#! /usr/bin/env bash

if [[ -n "$(which dotnet)"  && -n $(dotnet --info | grep -o "AspNetCore.App 5") ]] ; then
  dotnet --info
else
  sudo apt-get update; \
    sudo apt-get install -y apt-transport-https && \
    sudo apt-get update && \
    sudo apt-get install -y aspnetcore-runtime-5.0 && \
    sudo apt-get install -y dotnet-sdk-5.0
fi


if [[ -n "$(which node)" ]] ; then
  node --version
else
  sudo ~/Debian_node_apt_install.sh
  sudo apt-get install -y nodejs
fi

if [[ -n "$(which git)" ]] ; then
  git --version
else
  sudo apt-get install -y git
fi

