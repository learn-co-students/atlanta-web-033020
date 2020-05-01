u1 = User.create(username: 'geoff',password: 'lovecoding')
u2 = User.create(username: 'robert',password: 'lovecoffee')
u3 = User.create(username: 'joey',password: 'loverails')

b1 = Book.create(title: 'My Story in code' , desc: '1010101001010', user_id: u1.id )
b2 = Book.create(title: 'Coffee Reviews', desc: '☕☕' , user_id: u2.id )
b3 = Book.create(title: 'Rails Rails Rails', desc: 'not a train... 😁 ' , user_id: u3.id )
b4 = Book.create(title: 'Random Book', desc: 'Not a book', user_id: u2.id )