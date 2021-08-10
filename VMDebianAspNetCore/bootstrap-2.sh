#! /usr/bin/env bash
#
# ------------------------------------------------------
# WHEN EDITING THIS FILE ENSURE LINE-ENDINGS=UNIX IS SET
# ------------------------------------------------------
#
echo "=================================================="
echo "$BASH_SOURCE : Bootstrapping commandline preferences and basic security on $HOSTNAME"
echo '
	Assumptions: 
	- This is a Cloudy VM with 
	   - ssh already installed
	   - network & firewall security largely handled by the cloud

	Basic security = apt-get updates
'
echo "=================================================="

function pausemax { 
	read -t $1 -p "$2 Wait $1 seconds, or press any key to continue ..."
}

echo "bash preferences ..."

	[ -f .bashrc ] || touch .bashrc

	if [ ! -f ~/bashrc_personal_preferences ] ; then
	  printf '
# Avoid darkblue because some of us use darkblue background for powershell shells
LS_COLORS=$LS_COLORS:"di=0;32:" ; export LS_COLORS
alias nw="tmux new-window"
alias ll="ls -l"
export PS1="\w]"
set bashrc_personal_preferences
		' > ~/bashrc_personal_preferences
	fi
	grep -q "set bashrc_personal_preferences" .bashrc \
		|| cat bashrc_personal_preferences >> .bashrc \
		&& rm bashrc_personal_preferences

echo "Command line tools..."
 	sudo apt-get -y install vim zip unzip
	echo 'syntax on
colorscheme blue
' > ~/.vimrc

echo "sshd keepalive..."
  sed -i \
      -e 's/^#*ClientAliveInterval *$/ClientAliveInterval 120/' \
      -e 's/^#*ClientAliveCountMax *$/ClientAliveCountMax 1000/' \
      /etc/ssh/sshd_config


echo "Other installs ..."
	cd ~
	ls -l *install*
	for f in *install*.sh *install*.ps1 ; do sudo ./$f ; done 

echo "----------------------------------------------------------------------------"
echo "Bootstrapped: apt-get, cli preferences, tmux vim zip sshd keepalive"
echo "----------------------------------------------------------------------------"

