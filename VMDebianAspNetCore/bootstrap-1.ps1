#! /usr/bin/env sh
` # \
# PowerShell Param statement : every line must end in #\ except the last line must with <#\
# And, you ___can't use backticks___ in this section                                     #\
param( [string]$target,                                      #\
       [string]$id_certificate_path = (Resolve-Path ~/.ssh/LightsailDefaultKey-eu-west-2.pem).Path #\
     )                                                                                  <#\
#^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
# Bash Start ------------------------------------------------------------

if [ -z "$1" ] ; then
  echo "
  Usage: 

  $0 <target> <id_certificate_path>

  to initialize basic setup on remote machine <target>. nb: <target> should be user@machine
  "
  exit
fi

target=$1
id_certificate_path=${2:-"~/.ssh/LightsailDefaultKey-eu-west-2.pem"}
andinstall=${3:-1}
set -x
scp -i $id_certificate_path bootstrap-2.sh *.sh $target:

# Bash End --------------------------------------------------------------
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
echo > /dev/null <<"out-null" ###
'@ | out-null
#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
# Powershell Start ----------------------------------------------------#>

if( -not $target -or -not $id_certificate_path){
  "
  Usage: 

  $PSCommandPath <target> <id_certificate_path>

  to initialize basic setup on remote machine <target>. nb: <target> should be user@machine
  "
  exit
}
if(-not (test-path $id_certificate_path))
  { throw "$id_certificate_path not found" }
if(-not ($target -match "^[A-Za-z0-9\.-]+@[A-Za-z0-9\.-]+$") )
  { throw "$target doesn't look like a valid user@host" }


gci bootstrap-2.sh *.sh | %{
  "Copying $_ ..."
  cat $_ | ssh -i $id_certificate_path $target "cat -> $($_.BaseName)$($_.Extension) ; chmod g+rx $($_.BaseName)$($_.Extension) ; sed -i 's/\r//' *.sh" 
}

# Powershell End -------------------------------------------------------
# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
out-null
#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
# Both:

echo "Continuing other installs...

  NB: this process may stall for several minutes waiting for apt-get updates to complete.
  
  "
echo "apt-get update and install tmux ..."
ssh -i $id_certificate_path $target "sudo apt-get update && sudo apt-get -y upgrade apt && sudo apt-get install -y tmux"

echo "tmux bootstrap-2.sh and run installers ..." 
ssh -ti $id_certificate_path $target "tmux new-session -s bootstrap 'bash ./bootstrap-2.sh'"

Echo "Done."