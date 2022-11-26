<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if (Auth::user()->id !== $user->id) {
            return response()->json([
                'status' => 404,
                'message' => 'not allowed'
            ]);
        }

        $user->update($request->all());

        return response()->json([
            'status' => 200,
            'user' => $user
        ]);
    }

    // Change password
    public function updatePassword(Request $request)
    {
        // validate password
        $request->validate(
            [
                'password_current'      => 'required',
                'password_new'          => 'required|regex:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/|required_with:password_confirmation|same:password_confirmation',
                'password_confirmation' => 'required'
            ],
            [
                'password_new.regex' => 'The password should have minimum eight characters,
        at least one letter, one number and one special character'
            ]
        );

        // get logged in user
        $user = Auth::user();
        // check password current is correct
        $checkPass = Hash::check($request->password_current, $user->password);

        if ($checkPass) {
            //Assign the new password
            $user->password = Hash::make($request->password_new);
            $user->save();
            return response()->json([
                'status' => 200,
                'user' => $user
            ]);
        };

        return response()->json([
            'status' => 406,
            'error' => 'wrong password'
        ]);
    }

    // Get payment history for user
    public function paymentHistory()
    {
        $payments = Subscription::withWhereHas('payment', function ($query) {
            $query->where('user_id', Auth::user()->id);
        })->get();

        return response()->json([
            'status' => 200,
            'payments' => $payments
        ]);
    }

    // Get Active subscription info for user
    public function activeSubscription()
    {
        $activeSub = Subscription::with('payment')->where('user_id', Auth::user()->id)->where('status', 1)->get();

        return response()->json([
            'status' => 200,
            'active_subscription' => $activeSub
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
