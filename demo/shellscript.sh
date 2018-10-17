# Demo Shell Script file.

####.#### —————————————————— ALIASES —————————————————— ####.####

# Easier directory navigation.
alias ~="cd ~"
alias .="cd .."
alias ..="cd ../.."
alias ...="cd ../../.."
alias ....="cd ../../../.."
alias cd..="cd .." # Typo addressed.

# Recursively delete all `.DS_Store` files in the pwd.
alias rmds="find . -type f -name '*.DS_Store' -ls -delete"

