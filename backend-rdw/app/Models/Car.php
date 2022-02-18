<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    const FULL_ELECTRIC = 'FULL ELECTRIC';
    const HYDROGEN = 'HYDROGEN';
    const GASOLINE = 'GASOLINE';
    const DIESEL = 'DIESEL';
    const LPG = 'LPG';

    public static $fossilFuels = [self::GASOLINE, self::DIESEL, self::LPG];
    public static $allFuels = [self::FULL_ELECTRIC, self::HYDROGEN, self::GASOLINE, self::DIESEL, self::LPG];
    public static $bodyTypes = ['SEDAN', 'COUPE', 'SPORTS CAR', 'STATION WAGON', 'HATCHBACK', 'CONVERTIBLE', 'SPORT-UTILITY VEHICLE (SUV)', 'MINIVAN', 'PICKUP TRUCK'];

    protected $fillable = ['brand', 'model', 'body_type', 'plate_number', 'ascription_date', 'fuel', 'number_of_cylinders'];
}
