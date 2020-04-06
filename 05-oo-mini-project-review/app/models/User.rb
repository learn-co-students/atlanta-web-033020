class User

    @@all = []

    attr_reader :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def recipes
        recipe_cards = RecipeCard.all.select do |rc|
            rc.user == self 
        end
        recipe_cards.map do |rc|
            rc.recipe
        end
    end

    def declare_allergy(ingredient)
        Allergy.new(ingredient, self)
    end

    def add_recipe_card(recipe)
        RecipeCard.new(recipe, self)
    end

    def allergens
        my_allergens = Allergy.all.select do |allergen|
            allergen.user == self
        end
        my_allergens.map do |allergen|
            allergen.ingredient
        end.uniq
        # Allergy.all.select { |allergen| allergen.user == self }.map { |allergen| allergen.ingredient }.uniq
    end

    

end