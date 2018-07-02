<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;

class ListController extends Controller
{

    public function index(){

        $data = ["list"=>
            [
                ["id" => 1, "todo"=> "hoge", "isDone"=> true],
                ["id" => 2, "todo"=> "fuga", "isDone"=> true],
                ["id" => 3, "todo"=> "bar", "isDone"=> true],

            ]
        ];

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