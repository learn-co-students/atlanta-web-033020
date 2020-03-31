require 'pry'

class BankAccount

  attr_accessor :owner
  attr_reader :balance

  def initialize(owner,balance)
    @owner = owner
    @balance = balance
  end

  def you_broke
    puts "OH NO! You don't have the $$$$"
  end

  def withdraw(amount)
    if @balance > amount
      @balance -= amount
    else
      you_broke
    end
  end

  def deposit(amount)
    @balance += amount # @balance = @balance + amount
  end

end
