class App
  def call(environment_hash)

    status_code = 200
    header = {}
    req = Rack::Request::new(environment_hash)

    if req.path.match('/home')
      body = ["<h1>Welcome Home!</h1>"]
      return [status_code, header, body]
    elsif req.path.match('/nba')
      body = ["Welcome to NBA!"]
      return [status_code, header, body]
    else
      body = ["Hello there! What's your name??"]
      return [404, header, body]
    end
  end
end
