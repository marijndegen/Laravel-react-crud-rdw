<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Car;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('brand', 20);
            $table->string('model', 25);
            $table->enum('body_type', Car::$bodyTypes);
            $table->string('plate_number', 8)->unique();
            $table->datetime('ascription_date');
            $table->enum('fuel', Car::$allFuels);
            $table->unsignedTinyInteger('number_of_cylinders')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
