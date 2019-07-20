require 'faker'

departments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


user = User.create({
  email: 'user@email.com',
  password: 'password'
})

10.times do
  department = Department.create(
    title: Faker::Book.title,
    user_id: user.id
  )


  8.times do
    product = Product.create(
      name: Faker::Cannabis.strain,
      description: Faker::Cannabis.health_benefit,
      price: Faker::Number.decimal(2),
      stock: Faker::Number.number(3),
      department_id: departments.sample
    )
end
end

puts 'seeded'
