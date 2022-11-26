<?php

namespace App\Models;

use App\Models\User;
use App\Models\Subscription;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;

    // Relations
    // Get the user that made the payment
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Get the subscription that the payment was made for
    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
