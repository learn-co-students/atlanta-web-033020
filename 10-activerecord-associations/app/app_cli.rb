class AppCLI

  def lists_users
    User.all.each do |user|
      puts "#{user.id}: #{user.name}"
    end
  end

  def login
    puts "==========================="
    puts "Login here"
    puts "==========================="
    puts "List of Users:"
    puts "==========================="
    lists_users
    puts "==========================="
    puts "Enter user id:"
    user_id = gets.chomp
    user = User.find_by(id: user_id)

    if user.nil?
      puts " "
      puts "ERRORR!!!"
      puts "User doesn't exist! Try again 🛑"
      puts " "
      login
    else
      welcome(user)
    end
  end

  def welcome(user)
    puts "==========================="
    puts "Welcome, #{user.name}!!!"
    puts "==========================="
    puts "Enter message:"
    puts "==========================="
    message = gets.chomp
    create_tweet(message,user)
  end

  def create_tweet(message,user)
    Tweet.create(message: message, user_id: user.id)
    puts "Tweet created successfully..."
    lists_tweets
  end

  def lists_tweets
    Tweet.all.each do |tweet|
      puts "#{tweet.user.name} says: #{tweet.message}"
    end
  end

  def show_options
    puts "1. Login"
    puts "2. Create A User"
    puts "3. Timeline"
    puts "4. Quit"
  end

  def main_menu
    # show_options

    # choice didn't go back to being nil after we ran a function
    # hence moving the choice inside the until block fixed it..
    choice = nil

    until choice == 4
      show_options
      puts "++++++++++++++++++++"
      puts "Enter your choice: "
      puts "++++++++++++++++++++"
      choice = gets.chomp.to_i
      puts "++++++++++++++++++++"

      case choice
        when 1
          login
        when 2
          puts "This is where you create a user"
        when 3
          lists_tweets
        when 4
          puts "Exiting... BYE"
        else
          puts "It invalid 🛑"
        end
    end
  end

  def run
    puts "Welcome to Teen Twitter!"
    main_menu
  end

end
