<?php

namespace App\Http\Controllers\Apis;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ListController extends Controller
{

    public function index(){

        $data = DB::table('todos')->get();

        return response($data, 200)
            ->header('Access-Control-Allow-Origin', 'localhost')
            ->header('Access-Control-Allow-Methods', 'GET')
            ->header('Content-Type', 'application/json; charset=utf-8')

        ;
    }

    // /**
    //  * 指定ユーザーのプロフィール表示
    //  *
    //  * @param  int  $id
    //  * @return Response
    //  */
    // public function show($id)
    // {
    //     return view('user.profile', ['user' => User::findOrFail($id)]);
    // }
}