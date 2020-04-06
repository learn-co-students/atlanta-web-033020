class Ingredient

    @@all = []

    attr_reader :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def users
        allergens = Allergy.all do |allergy|
            allergy.ingredient == self
        end
        allergens.map { |allergy| allergy.user }.uniq
    end

    def self.most_common_allergen
        all.max_by do |ingredient|
            ingredient.users.count
        end
    end
end
