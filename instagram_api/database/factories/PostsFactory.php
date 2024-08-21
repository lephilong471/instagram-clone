<?php

namespace Database\Factories;

use App\Models\Posts;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Posts::class;
    use WithFaker;
    public function definition(): array
    {
        return [
            'user_id' => function () {
                return \App\Models\Users::factory()->create()->id;
            },
            'tags' => $this->faker->words(3, true), // Tạo một chuỗi ngẫu nhiên từ 3 từ
            'post_type' => $this->faker->randomElement([1, 2]), // Chọn ngẫu nhiên một giá trị từ [1, 2, 3]
            'post_media' => $this->faker->imageUrl(), // Tạo một đường dẫn ảnh ngẫu nhiên
            'post_content' => $this->faker->paragraph(), // Tạo một đoạn văn ngẫu nhiên
            'edit_media' => $this->faker->imageUrl(), // Tạo một đường dẫn ảnh ngẫu nhiên
            'advance_setting' => $this->faker->text(), // Tạo một văn bản ngẫu nhiên
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'), // Tạo ngẫu nhiên một ngày trong 1 năm trở lại đây
            'updated_at' => $this->faker->dateTimeBetween('-1 year', 'now'), // Tạo ngẫu nhiên một ngày trong 1 năm trở lại đây
        ];
    }
}
