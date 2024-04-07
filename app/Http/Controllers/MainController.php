<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function review()
    {
        return view('review');
    }

    public function news()
    {
        return view('news');
    }

    public function welcome()
    {
        return view('welcome');
    }

    public function review_check(Request $request)
    {
        $valid = $request->validate([
            'email' => 'required|min:4|max:100',
            'subject' => 'required|min:4|max:100',
            'subject' => 'required|min:10|max:100',
        ]);

        $review = new News();
        $review->title = $request->input('email');

        $review->save();

    }


}
