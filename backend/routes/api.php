<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PrincipalController;
use App\Http\Controllers\TeacherController;

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

Route::get('getPrincipal', [PrincipalController::class,'index']);
Route::post('storeTeacher', [TeacherController::class,'store']);
Route::get('showTeacher/{id}', [TeacherController::class,'show']);
Route::get('showPrincipalByTeacher', [TeacherController::class,'index']);
Route::put('updateTeacher/{id}', [TeacherController::class,'update']);