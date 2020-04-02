require 'pry'
require_relative './user'
require_relative './tweet'

shivang = User.new("Shivang")
geoffrey = User.new("Geoffrey")
wendy = User.new("Wendy")

geoffrey.post_tweet("Couldn't you just explain self before we went this far?")
shivang.post_tweet("e we went this far?")
geoffrey.post_tweet("Couldn't you just explis far?")
shivang.post_tweet("Couldn't you jus this far?")

some_tweet = Tweet.all.sample

binding.pry





#
# t1 = Tweet.new(geoffrey, "This class is bad!!! JK")
#
# t2 = Tweet.new(shivang, "We're all fine! 🔥")
#
# puts "#{t1.message} was posted by, #{t1.username}"
# puts "#{t2.message} was posted by, #{t2.username}"

# puts "#{geoffrey.username} posted: #{t1.message}"
