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
end

puts 'seeded'
