<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weeks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subscription_id')->constrained()->onDelete('cascade');
            $table->integer('week_num');
            $table->unsignedBigInteger('meal_id_1')->nullable();
            $table->unsignedBigInteger('meal_id_2')->nullable();
            $table->unsignedBigInteger('meal_id_3')->nullable();
            $table->unsignedBigInteger('meal_id_4')->nullable();
            $table->unsignedBigInteger('meal_id_5')->nullable();
            $table->unsignedBigInteger('meal_id_6')->nullable();
            $table->foreign('meal_id_1')->references('id')->on('meals');
            $table->foreign('meal_id_2')->references('id')->on('meals');
            $table->foreign('meal_id_3')->references('id')->on('meals');
            $table->foreign('meal_id_4')->references('id')->on('meals');
            $table->foreign('meal_id_5')->references('id')->on('meals');
            $table->foreign('meal_id_6')->references('id')->on('meals');
            $table->string('day_of_delivery');
            $table->date('starting_date');
            $table->date('ending_date');
            $table->boolean('is_delivered')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weeks');
    }
};
