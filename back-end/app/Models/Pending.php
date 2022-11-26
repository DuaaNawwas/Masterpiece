<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pending extends Model
{
    use HasFactory;

    // Get the user that owns the pending data
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
