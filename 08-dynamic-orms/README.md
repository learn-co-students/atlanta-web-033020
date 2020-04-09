# Intro to ORMs (Object Relational Mappers)

## Deliverables

* Update the tweet instance's `id` once saved.
* We probably should be able to update a tweet _after_ it's made.
  * So `save` should update a tweet if it exists, insert if it doesn't exist.
  * Actually, twitter doesn't do this. Wow, our app already better than twitter?
* Another way of writing queries that is safer?

```rb
  class BasicORM

    def self.table_name
    end

    def self.all
    end

  end
```


### Version 2: Users and Tweets, but related

A tweet belongs to a user and has some message content
  * To relate it back to the user, we want to make sure tweets have a user_id FK
A user has a username, and has many tweets

Dang ... do we have to write all the querying and saving logic again? 😭

It ought to be very similar, maybe we can factor it out into a Base Class?
* Enter BasicORM
  * Probably start with .all and get to .save if there is time
