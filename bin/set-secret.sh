echo "💾  $(tput bold)Set secret$(tput sgr0)"

if [ "$#" -lt 2 ]; then
  printf "Secret key: "
  read key
  printf "Secret value: "
  read value
else
  value=$1
  key=$2
fi;

aws ssm put-parameter --name "/sls-boilerplate/"$STAGE"/"$key --value $value --type SecureString --region eu-central-1 --overwrite
