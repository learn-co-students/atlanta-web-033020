class Tweet
  attr_accessor :id, :message, :username
  # @@all = []

  def self.all
    # @@all
    query = <<-SQL
      select * from tweets
    SQL
    results = DB[:conn].execute(query)
    results.map { |record| Tweet.new(record) }
  end

  def initialize(attrs={})

    @id = attrs['id']
    @message = attrs['message']
    @username = attrs['username']

    self.save unless @id
  end

  def save
    # query = "insert into tweets (message,username) values (#{@message},#{@username})"
    query = <<-SQL
      insert into tweets (message,username)
      values ("#{@message}","#{@username}")
    SQL
    DB[:conn].execute(query)
  end
end
