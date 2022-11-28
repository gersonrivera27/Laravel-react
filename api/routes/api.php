<?php
use App\HTTP\ControllerS\Api\GymController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::controller(GymController::class) -> group(function(){
    Route::get('/gyms', [GymController::class, 'index']);
    Route::post('/gym', [GymController::class, 'store']);
    Route::get('/gym/{id}', [GymController::class, 'show']);
    Route::put('/gym/{id}', [GymController::class, 'update']);
    Route::delete('/gym/{id}', [GymController::class, 'destroy']);


});