#! /usr/bin/env bash

export TMP=/tmp/$(whoami)
mkdir -p $TMP
rm -rf $TMP/*
cd /home/ascotjobtracker/$1/Web

echo 'restoring ---------------------------------------------'
dotnet restore

echo 'building ---------------------------------------------'
dotnet build

echo 'npm ----------------------------------------------'
cd /home/ascotjobtracker/$1/Web/ClientApp
npm ci
npm run build
cd /home/ascotjobtracker/$1/Web

echo 'running ----------------------------------------------'
dotnet run --urls 'http://*:8000' --launch-profile Staging
