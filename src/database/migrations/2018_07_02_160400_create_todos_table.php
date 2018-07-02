<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('todo');
            $table->boolean('is_done')->default(false);
            $table->softDeletes();
            $table->double('period', 8, 2)->nullable();
            $table->timestamps();
            $table->timestamp('finish_at')->nullable();
        });

        DB::table('todos')->insert(
            ['todo' => 'example data']
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}
