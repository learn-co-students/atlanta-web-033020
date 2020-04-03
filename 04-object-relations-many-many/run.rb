require 'pry'
require_relative './user'
require_relative './tweet'
require_relative './like'

shivang = User.new("Shivang")
geoffrey = User.new("Geoffrey")
wendy = User.new("Wendy")


t1 = wendy.post_tweet("This class is 🔥")
t2 = geoffrey.post_tweet("First tweet ever!!")
t3 = shivang.post_tweet("Objects...Classes...Methods...Self...What the heck?")
t4 = wendy.post_tweet("This is has_many - belongs_to!!")

shivang.like_tweet(t1)
shivang.like_tweet(t2)
shivang.like_tweet(t3)
wendy.like_tweet(t3)


puts "-----------------------------------------------------------------------"
puts "| Liked Tweets: |"
puts "-----------------------------------------------------------------------"

puts t3.likers

# puts shivang.liked_tweets
# puts wendy.liked_tweets
# puts geoffrey.liked_tweets

binding.pry


# shivang.show_timeline
# geoffrey.show_timeline
# wendy.show_timeline
# puts "-----------------------------------------------------------------------"
