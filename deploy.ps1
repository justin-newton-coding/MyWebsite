ng build --configuration production --base-href /StreamLight/

scp -i "C:\Users\Owner\Downloads\JustinSSH.pem" -r ".\dist\StreamLight\browser\*" "ubuntu@18.118.37.175:~"

# sudo mv ~/* /var/www/html