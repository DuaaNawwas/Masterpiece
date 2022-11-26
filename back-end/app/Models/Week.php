<?php

namespace App\Models;

use App\Models\Meal;
use App\Models\RemovedIngredient;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Week extends Model
{
    use HasFactory;

    // Relations--------------

    // Get all the removed ingredients for meals in a specific week
    public function removedingredients()
    {
        return $this->hasMany(RemovedIngredient::class);
    }

    // Get the subscription that a specific week/order belongs to
    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }

    // Get meal for specific week/order
    public function meal1()
    {
        return $this->belongsTo(Meal::class, 'meal1_id');
    }
    public function meal2()
    {
        return $this->belongsTo(Meal::class, 'meal2_id');
    }
    public function meal3()
    {
        return $this->belongsTo(Meal::class, 'meal3_id');
    }
    public function meal4()
    {
        return $this->belongsTo(Meal::class, 'meal4_id');
    }
    public function meal5()
    {
        return $this->belongsTo(Meal::class, 'meal5_id');
    }
    public function meal6()
    {
        return $this->belongsTo(Meal::class, 'meal6_id');
    }
}
