require 'rest-client'
require 'json'
require 'pry'

def welcome
  puts "Welcome to the Book Searcher!!!"
end

def get_search_term
  puts "What books are you looking for?"
  gets.chomp
end

def search_for_books(input)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{input}")
  books = JSON.parse(response.body)["items"]
end

def display_results(books)
  books.each do |book|
    title = book["volumeInfo"]["title"]
    # Book.create(title: title, .....)
    puts "=============================="
    puts title
    puts "=============================="
  end
end

def run
  welcome
  input = get_search_term
  books = search_for_books(input)
  display_results(books)
end

run
