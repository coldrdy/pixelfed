#!/bin/bash

# Create the storage tree if needed and fix permissions
cp -r storage.skel/* storage/
chown -R www-data:www-data storage/ bootstrap/

# Refresh the environment
php artisan storage:link
php artisan horizon:install
php artisan horizon:publish
php artisan route:clear
php artisan route:cache
php artisan view:clear
php artisan view:cache
#php artisan config:clear
php artisan config:cache
php artisan migrate --force

# apache2-foreground & php artisan horizon

apache2-foreground
