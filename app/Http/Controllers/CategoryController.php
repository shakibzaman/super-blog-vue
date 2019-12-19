<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function list(){
        $cat=Category::get();
        return response()->json([
            'category'=>$cat
        ],200);
    }
}
