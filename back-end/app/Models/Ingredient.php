<?php

namespace App\Models;

use App\Models\Meal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ingredient extends Model
{
    use HasFactory;

    // Relations ----------------

    // Get the meal for specific ingredients
    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }
}
