<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pending extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'people_num', 'meals_per_week', 'categories', 'day_of_delivery'];

    // Get the user that owns the pending data
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
