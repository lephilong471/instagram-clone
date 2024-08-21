<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function register(Request $request)
    {

        $validate = Validator::make($request->all(),[
            'fullname' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|min:8',
        ]);

        if($validate->fails()){
            return response()->json([
                'success' => false,
                'message' => 'User registered fail'
            ], 401);
        }

        $user = new Users();
        $user->fullname = $request['fullname'];
        $user->username = $request['username'];
        $user->email = $request['email'];
        // $user->password = $request['password'];
        $user->password = Hash::make($request['password']);

        $user->save();

        $profile = new Profile();
        $profile->user_id = $user->id;
        $profile->save();

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully',
            'user' => $user,
        ], 200);
    }

    public function login(Request $request)
    {
        $user = Users::where('email', $request->email)->first();
        if($user && Hash::check($request->password, $user->password)){
            $data = DB::table('users')
            ->join('profile', 'users.id', '=', 'profile.user_id')
            ->get();

            return response()->json([
                'success' => true,
                'message' => 'Login successfully',
                'user' => $data,
            ], 200);
        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password',
            ], 401);
        }
    }
}
