require 'date'
class RecipeCard

    @@all = []

    attr_reader :user, :recipe, :date

    def initialize(recipe, user)
        @recipe = recipe
        @user = user
        # @rating = rating
        @date = Date.today
        @@all << self
    end

    def self.all
        @@all
    end
end