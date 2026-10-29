FROM php:8.2-apache
RUN apt-get update \
    && apt-get install -y --no-install-recommends libpng-dev libjpeg62-turbo-dev libfreetype6-dev libzip-dev libxml2-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j"$(nproc)" mysqli pdo_mysql gd mbstring zip xml \
    && a2enmod rewrite headers \
    && rm -rf /var/lib/apt/lists/*
ENV APACHE_DOCUMENT_ROOT=/var/www/html
WORKDIR /var/www/html
COPY . /var/www/html/
RUN printf '%s\n' '<Directory /var/www/html>' '    Options -Indexes +FollowSymLinks' '    AllowOverride All' '    Require all granted' '</Directory>' > /etc/apache2/conf-available/xenoberage.conf \
    && a2enconf xenoberage \
    && chown -R www-data:www-data /var/www/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 CMD php -r '$s=@fsockopen("127.0.0.1",80); if($s){fclose($s);exit(0);} exit(1);'
