<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Car;

use Faker\Generator as Faker;

class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $this->faker->addProvider(new \Faker\Provider\Fakecar($this->faker));
        $fakeVehicle = $this->faker->vehicleArray();


        $fuel = $this->faker->randomElement(Car::$allFuels);
        $numberOfCylinders = in_array($fuel, Car::$fossilFuels) ? $this->faker->randomElement([3, 4, 6, 8]) : NULL;

        return [
            'brand' => $fakeVehicle['brand'],
            'model' => $fakeVehicle['model'],
            'body_type' => $this->faker->randomElement(Car::$bodyTypes),
            'plate_number' => $this->faker->vehicleRegistration('[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}'),
            'ascription_date' => $this->faker->dateTimeBetween('-40 years', 'now'),
            'fuel' => $fuel,
            'number_of_cylinders' => $numberOfCylinders
        ];
    }
}
