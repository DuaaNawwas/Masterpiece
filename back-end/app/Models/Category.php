<?php

namespace App\Models;

use App\Models\Meal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    // Relations --------------
    // Get meals in a specific category
    public function meals()
    {
        return $this->hasMany(Meal::class);
    }
}
