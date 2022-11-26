<?php

namespace App\Models;

use App\Models\Meal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Nutrient extends Model
{
    use HasFactory;

    // Relations ----------------

    // With meals
    // Get the meal that has the nutrients
    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }
}
