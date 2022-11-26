<?php

namespace App\Models;

use App\Models\Meal;
use App\Models\Week;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RemovedIngredient extends Model
{
    use HasFactory;

    // Relations ------------

    // Get the week/order for which removed ingredients belong to
    public function week()
    {
        return $this->belongsTo(Week::class);
    }

    // Get meal that the removed ingredients belong to
    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }
}
