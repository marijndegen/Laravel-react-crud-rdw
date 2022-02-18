<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Car;
use App\Rules\NumberOfCylinder;

class UpdateCarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'brand' => 'required|min:2|max:20',
            'model' => 'required|min:1|max:25',
            'body_type' => 'required|in:' . implode(',', Car::$bodyTypes),
            'ascription_date' => 'required|date|before_or_equal:now',
            'fuel' => 'required|in:' . implode(',', Car::$allFuels),
            'number_of_cylinders' => [
                'required_if:fuel,in:' . implode(',', Car::$fossilFuels),
                new NumberOfCylinder($this->fuel)
            ],
        ];
    }
}
