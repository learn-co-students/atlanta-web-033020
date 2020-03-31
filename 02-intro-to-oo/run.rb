require 'pry'
require_relative './account'

# x = "cookies"
# x == "test"
#
# x.class # => String
# x.send(:==, "test")
#
# binding.pry

# def sum(x,y)
#   x + y
# end
#
# puts sum(2,3) + 2

#
# account1 = { owner: 'Robert', balance: 500000 }
# account2 = { owner: 'Shivang', balance: 5 }


# shivang.set_owner('Shivang')
# robert.set_owner('Robert')
#
# shivang.set_balance(5)
# robert.set_balance(500000)

shivang = BankAccount.new('Shivang',5)
robert = BankAccount.new('Robert',500000)

binding.pry
