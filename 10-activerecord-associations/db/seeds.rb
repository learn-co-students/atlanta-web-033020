User.destroy_all
Tweet.destroy_all

u1 = User.create(name: 'atom', location: 'in the moment', age: 10)
u2 = User.create(name: 'gus', location: 'atl', age: 17)
u3 = User.create(name: 'cory', location: 'nyc', age: 15)
u4 = User.create(name: 'moxxie', location: 'zoom', age: 14)

t1 = Tweet.create(message: 'This is epic 🌟', user_id: u3.id)
t2 = Tweet.create(message: 'I live in the moment.. 😂', user_id: u1.id)
t3 = Tweet.create(message: 'Eat more 🐥', user_id: u2.id)
t4 = Tweet.create(message: 'This is my first tweet suckers!!!!!', user_id: u4.id)
t5 = Tweet.create(message: 'NEED... COFFEEE.. ☕️🥱', user_id: u1.id)
