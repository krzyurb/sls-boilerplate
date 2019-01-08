echo "🔍  $(tput bold)List secrets$(tput sgr0)"

aws ssm get-parameters-by-path --path "/sls-boilerplate/"$STAGE --region eu-central-1 --with-decryption
