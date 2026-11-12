ng build --configuration production --base-href /StreamLight/

# ssh -i "C:\Users\Owner\Downloads\ssh-key-2026-11-11.key" ubuntu@152.70.143.34 "sudo rm -rf /var/www/html/*"
# scp -i "C:\Users\Owner\Downloads\ssh-key-2026-11-11.key" -r ubuntu@152.70.143.34:/tmp
# scp -r "C:\Users\Owner\Downloads\ssh-key-2026-11-11.key" "C:\Users\Owner\Documents\Computer Things\Programs (and their Files)\Visual Studio Code\StreamLight\dist\StreamLight" ubuntu@152.70.143.34:/var/www/html/


# ssh -i "C:\Users\Owner\Downloads\ssh-key-2026-11-11.key" ubuntu@152.70.143.34 "sudo mv /tmp/* /var/www/html/"