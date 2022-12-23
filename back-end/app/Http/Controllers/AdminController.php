<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function addCategory(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [

                'name' => 'required',
                'image' =>  ['required', File::image()->max(20 * 1024)]

            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failure',
                'errors' => $validator->messages(),
            ]);
        }

        $file = $request->file('image');
        $filename = uniqid() . "_" . $file->getClientOriginalName();
        $file->move(public_path('public/images'), $filename);
        $url = URL::to('/') . '/public/images/' . $filename;

        $category = Category::create([
            'name' => $request->name,
            'image' => $url,
        ]);

        $categories = Category::with('meals')->get();

        return response()->json([
            'status' => 200,
            'categories' => $categories

        ]);
    }

    public function deleteCategory($id)
    {
        Category::find($id)->delete();
        $categories = Category::with('meals')->get();

        return response()->json([
            'status' => 200,
            'categories' => $categories

        ]);
    }

    public function editCategory(Request $request)
    {
        $category = Category::find($request->id);

        if ($request->file('image')) {

            $file = $request->file('image');
            $filename = uniqid() . "_" . $file->getClientOriginalName();
            $file->move(public_path('public/images'), $filename);
            $url = URL::to('/') . '/public/images/' . $filename;
            $category->image = $url;
        }

        if ($request->name) {

            $category->name = $request->name;
        }

        $category->save();

        $categories = Category::with('meals')->get();

        return response()->json([
            'status' => 200,
            'categories' => $categories

        ]);
    }
}
