<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Car;


class NumberOfCylinder implements Rule
{

    public $fuelType;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($fuelType)
    {
        $this->fuelType = $fuelType;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (!in_array($this->fuelType, Car::$fossilFuels) && $value === null) {
            return true;
        }

        if (in_array($this->fuelType, Car::$fossilFuels) && $value >= 1) {
            return true;
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Number of cylinders should be a number if a fossil fuel is selected.';
    }
}
