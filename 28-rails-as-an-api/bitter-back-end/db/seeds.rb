User.destroy_all
Tweet.destroy_all

u1 = User.create(username: 'Geoff', password: '123', bio: 'I love code..')
u2 = User.create(username: 'Cory', password: '456', bio: 'Ready for the weekend..')
u3 = User.create(username: 'Joey', password: '789', bio: 'I love JS..')


t1 = Tweet.create(content: 'My First Tweet', img: 'https://battenhall.net/wp-content/uploads/2014/06/Screen-Shot-2014-06-09-at-12.52.02.png', user_id: u1.id)
t2 = Tweet.create(content: 'My Second Tweet', img: 'https://qph.fs.quoracdn.net/main-qimg-2712794a8c0c115e7d462926db4aa93e', user_id: u1.id)
t3 = Tweet.create(content: 'Deleting twitter asap', img: 'https://regmedia.co.uk/2018/06/25/shutterstock_delete.jpg', user_id: u2.id)
