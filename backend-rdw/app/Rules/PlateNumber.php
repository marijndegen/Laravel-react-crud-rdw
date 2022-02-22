<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class PlateNumber implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
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
        $regex = false;
        $plate_number = strtoupper($value);
        if (strlen($plate_number) == 6) {
            $regex = '/[A-Z0-9]{6}/';
        }

        if (strlen($plate_number) == 8) {
            $regex = '/[A-Z0-9]{1,}-[A-Z0-9]{1,}-[A-Z0-9]{1,}/';
        }

        if ($regex && preg_match($regex, $plate_number)) {
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
        return 'The plate number is incorrect (Use: xx-xx-xx).';
    }
}
