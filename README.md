# Laravel-react-crud-rdw
A laravel react application for managing cars

### Versions
- php 7.4.19 -- Laravel 8.83.1, pelmered/fake-car 1.7
- node v14.17.6 -- React 17.0.2, react-router-dom 6.2.1 tailwind 3.0.23

### Noteworthy files and directories
*Backend*
- backend-rdw/app/Http/Controllers/CarController.php
- backend-rdw/app/Http/Requests/StoreCarRequest.php
- backend-rdw/app/Http/Requests/UpdateCarRequest.php
- backend-rdw/app/Models/Car.php
- backend-rdw/app/Rules/NumberOfCylinder.php
- backend-rdw/app/Rules/PlateNumber.php
- backend-rdw/database/factories/CarFactory.php
- backend-rdw/database/migrations/2022_02_18_110424_create_cars_table.php
- backend-rdw/database/seeders/CarSeeder.php
- backend-rdw/routes/api.php

*Frontend*
- frontend-rdw/src/App.js
- frontend-rdw/src/Components/*
- frontend-rdw/src/Pages/*
- frontend-rdw/src/Fetch.js

### Installation
*Backend*
1. git clone https://github.com/marijndegen/Laravel-react-crud-rdw.git
2. cd backend-rdw
3. composer install
4. cp .env.example .env
5. configure the database section in .env
6. php artisan key:generate
7. php artisan migrate
8. php artisan db:seed
9. php artisan serve

*Frontend*
1. cd ../frontend-rdw
2. npm i
3. npm start

#### Files with minor changes or boilerplate code
*Backend*
- backend-rdw/app/Policies/CarPolicy.php
- backend-rdw/app/Providers/AppServiceProvider.php
- backend-rdw/app/Providers/RouteServiceProvider.php
- backend-rdw/database/seeders/DatabaseSeeder.php

*Frontend*
- frontend-rdw/src/index.css