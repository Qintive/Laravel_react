<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'home']);

Route::get('/about', [MainController::class, 'about']);

Route::get('/review', [MainController::class, 'review']);

Route::post('/review/check', [MainController::class, 'review_check']);

Route::get('/news/{id}', [MainController::class, 'news']);

Route::get('/welcome', [MainController::class, 'welcome']);

Route::get('/documentation', [MainController::class, 'welcome']);

Route::get('/admin', [MainController::class, 'welcome']);








