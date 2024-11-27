# PM2 config
First of all, create a file ```ecosystem.config.js``` in the project root directory
```
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
```
# Build and Serve the App
```
npm run build
pm2 start
```

# Enable required models 
```
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
```


go to the Apache config directory.

Note: you have to change domain names and ports depending on the production
```/etc/apache2/sites-available```

- update ```000-default.conf``` file
- remove or comment this config
```
<VirtualHost 184.168.125.53:443>
    ServerName curenearme.in
    ServerAlias www.curenearme.in
    SSLEngine on
    SSLCertificateFile /etc/httpd/ssl/curenearme.in.crt
    SSLCertificateKeyFile /etc/httpd/ssl/curenearme.in_key.txt
    SSLCertificateChainFile /etc/httpd/ssl/curenearme.in.ca-bundle
    DocumentRoot /var/www/html

    # Rest of your site config
    # ...
</VirtualHost>
<VirtualHost 184.168.125.53:443>
    ServerName plus.curenearme.in
    ServerAlias www.plus.curenearme.in
    SSLEngine on
    SSLCertificateFile /etc/httpd/ssl_plus/plus.curenearme.in.crt
    SSLCertificateKeyFile /etc/httpd/ssl_plus/plus.curenearme.in_key.txt
    SSLCertificateChainFile /etc/httpd/ssl_plus/plus.curenearme.in.ca-bundle
    DocumentRoot /var/www/html/plus.curenearme.in

    # Rest of your site config
    # ...
</VirtualHost>
```
- update ```plus.curenearme.in.conf```
- add this config
```
<VirtualHost *:443>
    ServerName plus.curenearme.in
    ServerAlias www.plus.curenearme.in
    SSLEngine on
    SSLCertificateFile /etc/httpd/ssl_plus/plus.curenearme.in.crt
    SSLCertificateKeyFile /etc/httpd/ssl_plus/plus.curenearme.in_key.txt
    SSLCertificateChainFile /etc/httpd/ssl_plus/plus.curenearme.in.ca-bundle
    DocumentRoot /var/www/html/plus.curenearme.in

    # Rest of your site config
    # ...
</VirtualHost>
```

- create or update file ```curenearme.in.conf``` with this config
```
<VirtualHost *:80>
    ServerName www.curenearme.in
    ServerAdmin contact@curenearme.in
    ProxyPreserveHost On
    #Write Your own Port
    ProxyPass / http://127.0.0.1:3001/
    ProxyPassReverse / http://127.0.0.1:3001/
    <Directory "/var/www/html">
        AllowOverride All
    </Directory>
</VirtualHost>

<VirtualHost *:443>
    ServerName www.curenearme.in
    ServerAdmin contact@curenearme.in

    SSLEngine on
    SSLCertificateFile /etc/httpd/ssl/curenearme.in.crt
    SSLCertificateKeyFile /etc/httpd/ssl/curenearme.in_key.txt
    SSLCertificateChainFile /etc/httpd/ssl/curenearme.in.ca-bundle

    ProxyPreserveHost On
    #Write Your own Port
    ProxyPass / http://127.0.0.1:3001/
    ProxyPassReverse / http://127.0.0.1:3001/
    <Directory "/var/www/html">
        AllowOverride All
    </Directory>
</VirtualHost>
```

# Enbale vhost

```
a2ensite curenearme.in.conf
a2ensite plus.curenearme.in.conf
```
# Reload service apache 
```shell
systemctl reload apache2
```
