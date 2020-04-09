class Tweet < BasicORM
  attr_accessor :id, :message, :username

  # def self.all
  #   query = <<-SQL
  #     select * from tweets
  #   SQL
  #   results = DB[:conn].execute(query)
  #   results.map { |record| Tweet.new(record) }
  # end

  def self.find(id)
    query = "select * from tweets WHERE id=?"
    result = DB[:conn].execute(query,id)
    Tweet.new(result[0])
  end

  def initialize(attrs={})
    @id = attrs['id']
    @message = attrs['message']
    @username = attrs['username']

    self.save
  end

  def update
    query = <<-SQL
      update tweets
      SET message=?, username=?
      WHERE id=?
    SQL
    DB[:conn].execute(query,self.message,self.username,self.id)
  end

  def save
    if @id.nil?
      # query = "insert into tweets (message,username) values (#{@message},#{@username})"
      query = <<-SQL
        insert into tweets (message,username)
        values (?,?)
      SQL
      # db_runner = db.prepare(query)
      # db_runner.execute()
      DB[:conn].execute(query,self.message,self.username)
      # get the id for the tweet that I created
      # set it to @id
      result = DB[:conn].execute("select last_insert_rowid()")
      binding.pry
      @id = result.first["last_insert_rowid()"]
    end
  end

end
