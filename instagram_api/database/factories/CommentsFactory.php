<?php

namespace Database\Factories;

use App\Models\Posts;
use App\Models\Users;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comments>
 */
class CommentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    use WithFaker;
    public function definition(): array
    {
        return [
            'post_id' => 12,
            'user_id' => Users::factory(),
            'content' => $this->faker->sentence,
        ];
    }
}
