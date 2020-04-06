class Recipe

    @@all = []

    attr_reader :name, :creator

    def initialize(name, creator='')
        @name = name
        @creator = creator
        @@all << self
    end

    def self.all
        @@all
    end

    def users
        RecipeCard.all.select { |rc| rc.recipe == self }
        .map { |rc| rc.user }.uniq
    end

    def ingredients
        RecipeIngredient.all.select { |ri| ri.recipe == self }
        .map { |ri| ri.ingredient}.uniq
    end

    def allergens
        allergen_ingredients = Allergy.all.map { |allergen| allergen.ingredient }

        self.ingredients.select do |ingredient|
            allergen_ingredients.include?(ingredient)
        end
    end

    def add_ingredients(ingredients)
        ingredients.each do |ingredient|
            RecipeIngredient.new(self, ingredient)
        end
    end

    def self.most_popular
        all.max_by do |recipe| 
            recipe.users.count
        end
    end


end