<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Pending;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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
        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'first_name'      => 'required',
        //         'last_name'          => 'required',
        //         'phone' => 'required',
        //         'city' => 'required',
        //         'street' => 'required',
        //         'building' => 'required',
        //         'floor' => 'required',
        //     ]
        // );

        // if ($validator->fails()) {
        //     return response()->json([
        //         'status' => 'failure',
        //         'errors' => $validator->messages(),
        //     ]);
        // }
        $user->update($request->all());

        return response()->json([
            'status' => 200,
            'user' => $user
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function addDetails(Request $request, User $user)
    {
        if (Auth::user()->id !== $user->id) {
            return response()->json([
                'status' => 404,
                'message' => 'not allowed'
            ]);
        }
        $validator = Validator::make(
            $request->all(),
            [

                'phone' => 'required|min:10',
                'city' => 'required',
                'street' => 'required',
                'building' => 'required',
                'floor' => 'required',
                'day_of_delivery' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failure',
                'errors' => $validator->messages(),
            ]);
        }

        $pending = Pending::where('user_id', Auth::user()->id)->first();
        $pending->day_of_delivery = $request->day_of_delivery;
        $pending->save();

        $user->update($request->all());

        return response()->json([
            'status' => 200,
            'user' => $user,
            'pending' => $pending
        ]);
    }

    // Change password
    public function updatePassword(Request $request)
    {
        // validate password
        $validator = Validator::make(
            $request->all(),
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
        if ($validator->fails()) {
            return response()->json([
                'status' => 'failure',
                'errors' => $validator->messages(),
            ]);
        }
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
            'errors' => ['password_current' => 'Wrong password']
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

    // Get active subscription for user wiith weeks
    public function plan()
    {
        $user = Auth::user();
        // $subscription = Subscription::whereBelongsTo($user)->where('status', 1)->withWhereHas(['weeks' => ['meal1', 'meal2', 'meal3', 'meal4', 'meal5', 'meal6']])->get();
        $subscription = Subscription::whereBelongsTo($user)->where('status', 1)->with(['weeks' => ['meal1', 'meal2', 'meal3', 'meal4', 'meal5', 'meal6']])->get();

        return response()->json([
            'status' => 200,
            'plan' => $subscription
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
