ng build --configuration production

scp -i "C:\Users\Owner\Downloads\JustinSSH.pem" -r ".\dist\StreamLight\browser\*" "ubuntu@ec2-18-118-37-175.us-east-2.compute.amazonaws.com:~"

# sudo mv ~/* /var/www/html
# ssh -i "C:\Users\Owner\Downloads\JustinSSH.pem" "ubuntu@ec2-18-118-37-175.us-east-2.compute.amazonaws.com"