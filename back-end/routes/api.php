<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

// Protected routes---------------------------------------
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Endpoint for logout api
    Route::get('/logout', [AuthController::class, 'logout']);
    // Endpoint for getting user
    Route::get('/user', [AuthController::class, 'user']);
});
