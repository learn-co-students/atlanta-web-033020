Author.destroy_all
Book.destroy_all

a = Author.create(name: 'John Doe')
b = Author.create(name: 'Jhonny Doe')
c = Author.create(name: 'Jim Doe')

x = Book.create(title: "John's day out!", desc: "Fun outing..", author_id: a.id)
y = Book.create(title: "Jhonny's day out!", desc: "Fun outing part two..", author_id: b.id)
z = Book.create(title: "Jim's day out!", desc: "Fun outing part three..", author_id: c.id)
o = Book.create(title: "I own all of em", desc: "My books!", author_id: c.id)
