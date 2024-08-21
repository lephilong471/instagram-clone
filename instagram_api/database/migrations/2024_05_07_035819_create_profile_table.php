<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profile', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('avatar')->nullable();
            $table->string('story')->nullable();
            $table->string('website')->nullable();
            $table->integer('gender')->nullable()->comment("1: Female | 2: Male | 3: Hide | 4: Other");
            $table->string('gender_other')->nullable()->comment("if gender = 4...");
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile');
    }
};
