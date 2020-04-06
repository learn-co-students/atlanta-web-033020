require_relative '../config/environment.rb'

# Create Users #
princeton = User.new('Princeton')
maddie = User.new('Maddie')

wendy = User.new('Wendy')
moxxie = User.new('Moxxie')
brandon = User.new('Brandon')
geoffrey = User.new('Geoffrey')
gustave = User.new('Gustave')
robert = User.new('Robert')
cory = User.new('Cory')

# Create Ingredients #
peanut_butter = Ingredient.new('Peanut Butter')
jelly = Ingredient.new('Jelly')
bread = Ingredient.new('Bread')
meatballs = Ingredient.new('Meatballs')
spaghetti = Ingredient.new('Spaghetti')
sauce = Ingredient.new('Sauce')
fish = Ingredient.new('Fish')
rice = Ingredient.new('Rice')
meat_patty = Ingredient.new('Meat Patty')
corn = Ingredient.new('Corn')
steak = Ingredient.new('Steak')
lettuce = Ingredient.new('Lettuce')
tomatoes = Ingredient.new('Tomatoes')

# Create Recipes #
recipe1 = Recipe.new('Spaghetti and Meatballs', princeton)
recipe2 = Recipe.new('Peanut Butter & Jelly Sandwhich', maddie)
recipe3 = Recipe.new('Hamburgers', cory)
recipe4 = Recipe.new('Steak Dinner', robert)

# Add ingredients to recipes #
RecipeIngredient.new(recipe1, spaghetti)
RecipeIngredient.new(recipe1, meatballs)
RecipeIngredient.new(recipe1, sauce)

RecipeIngredient.new(recipe2, peanut_butter)
RecipeIngredient.new(recipe2, jelly)
RecipeIngredient.new(recipe2, bread)

RecipeIngredient.new(recipe3, bread)
RecipeIngredient.new(recipe3, meat_patty)
RecipeIngredient.new(recipe3, lettuce)
RecipeIngredient.new(recipe3, tomatoes)
RecipeIngredient.new(recipe3, sauce)

RecipeIngredient.new(recipe4, rice)
RecipeIngredient.new(recipe4, steak)
RecipeIngredient.new(recipe4, sauce)
RecipeIngredient.new(recipe4, corn)

# Add allergies to users #
Allergy.new(fish, princeton)
Allergy.new(bread, maddie)
10.times do
    Allergy.new(Ingredient.all.sample, User.all.sample)
end

# Add recipe cards #
RecipeCard.new(recipe2, princeton)
RecipeCard.new(recipe2, maddie)
RecipeCard.new(recipe3, princeton)
10.times do
    RecipeCard.new(Recipe.all.sample, User.all.sample)
end

binding.pry
