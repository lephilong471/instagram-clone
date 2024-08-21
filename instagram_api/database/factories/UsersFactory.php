<?php

namespace Database\Factories;

use App\Models\Users;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Users>
 */
class UsersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Users::class;
    use WithFaker;
    public function definition(): array
    {
        $firstName = $this->faker->firstName();
        $lastName = $this->faker->lastName();

        return [
            'name' => $this->faker->name,
            'fullname' => $firstName . ' ' . $lastName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password')
        ];
    }
}
