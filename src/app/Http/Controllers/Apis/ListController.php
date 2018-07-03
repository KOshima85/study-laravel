<?php

namespace App\Http\Controllers\Apis;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Routing\Router;

class ListController extends Controller
{

    public function index(){

        $data = DB::table('todos')
            ->where('deleted_at', NULL)
            ->orderBy('is_done', 'asc')
            ->orderBy('id', 'desc')
            ->get();

        return response($data, 200)
            ->header('Access-Control-Allow-Origin', 'localhost')
            ->header('Access-Control-Allow-Methods', 'GET')
            ->header('Content-Type', 'application/json; charset=utf-8')

        ;
    }

    public function store(Request $request){

        $input = $request->all();
        $res = DB::table('todos')->insert(
            ['todo' => $input["todo"]]
        );
        // TODO: responseを丁寧にする
        return response([], 200)
            ->header('Access-Control-Allow-Origin', 'localhost')
            ->header('Access-Control-Allow-Methods', 'GET')
            ->header('Content-Type', 'application/json; charset=utf-8')

        ;
    }

    public function done($todo_id){
        DB::table('todos')
        ->where('id', $todo_id)
        ->update(['is_done' => true]);
    }


    public function do($todo_id){
        DB::table('todos')
        ->where('id', $todo_id)
        ->update(['is_done' => false]);
    }

    public function deleteTodo($todo_id){
        DB::table('todos')
        ->where('id', $todo_id)
        ->update(['deleted_at' => DB::raw('CURRENT_TIMESTAMP')]);
    }
}