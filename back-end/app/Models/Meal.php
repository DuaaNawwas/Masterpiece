<?php

namespace App\Models;

use App\Models\Week;
use App\Models\Category;
use App\Models\Nutrient;
use App\Models\Ingredient;
use App\Models\RemovedIngredient;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Meal extends Model
{
    use HasFactory;

    // Relations ---------------------

    // Get nutrients for a specific meal
    public function nutrients()
    {
        return $this->hasOne(Nutrient::class);
    }

    // Get ingredients for a specific meal
    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    // Get the category of a specific meal
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Get removed ingredients for a specific meal
    public function removedingredients()
    {
        return $this->hasMany(RemovedIngredient::class);
    }

    // Get weeks that has meal???????????? not sure if it works? should i add one to every id?
    public function weeks()
    {
        return $this->hasMany(Week::class);
    }
}
