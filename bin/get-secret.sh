echo "🔍  $(tput bold)Get secret$(tput sgr0)"

if [ "$#" -lt 1 ]; then
  printf "Secret key: "
  read key
else
  key=$1
fi;

aws ssm get-parameter --name "/sls-boilerplate/"$STAGE"/"$key --region $REGION --with-decryption
