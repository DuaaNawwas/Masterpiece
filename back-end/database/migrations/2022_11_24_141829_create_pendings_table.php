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
        Schema::create('pendings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->integer('people_num')->nullable();
            $table->integer('meals_per_week')->nullable();
            $table->boolean('category_1')->nullable();
            $table->boolean('category_2')->nullable();
            $table->boolean('category_3')->nullable();
            $table->boolean('category_4')->nullable();
            $table->boolean('category_5')->nullable();
            $table->boolean('category_6')->nullable();
            $table->string('day_of_delivery')->nullable();
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
        Schema::dropIfExists('pendings');
    }
};