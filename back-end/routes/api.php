<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PendingController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use App\Models\Subscription;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public routes-------------------------------------

// Endpoint for login api
Route::post('/login', [AuthController::class, 'login']);
// Endpoint for registration api
Route::post('/register', [AuthController::class, 'register']);
// Endpoint for login with google api
Route::post('/googleLogin', [AuthController::class, 'googleLogin']);
// Endpoint for login with facebook api
Route::post('/facebookLogin', [AuthController::class, 'facebookLogin']);
// Endpoints for categories
Route::resource('/categories', CategoryController::class);
// Endpoints for meals
Route::resource('/meals', MealController::class);

// Endpoint for getting pricings
Route::get('/pricing', [SubscriptionController::class, 'pricings']);


// Protected routes---------------------------------------
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Endpoint for logout api
    Route::get('/logout', [AuthController::class, 'logout']);
    // Endpoint for getting user
    Route::get('/user', [AuthController::class, 'user']);
    // Endpoint for getting recommended meals for a user
    Route::get('/recommendedMeals', [MealController::class, 'recommendedMeals']);
    // Endpoints for user
    Route::resource('/users', UserController::class);
    Route::put('/adddetails/{user}', [UserController::class, 'addDetails']);
    // Endpoint for changing password
    Route::put('/changepassword', [UserController::class, 'updatePassword']);
    // Endpoint to get payment history for a user
    Route::get('/paymenthistory', [UserController::class, 'paymentHistory']);
    // Endpoint to get active subscription for a user
    Route::get('/activesubscription', [UserController::class, 'activeSubscription']);
    // Endpoint for pendings
    Route::resource('/pending', PendingController::class);
});
