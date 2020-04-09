class User < BasicORM

  attr_accessor :name, :email, :password

  def initialize(attr={})
    @name = name
    @email = email
    @password = password
  end

end
