class PokemonsController < ApplicationController

    def create
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        @trainer = Trainer.find_by(id: params['trainer_id'])
        if @trainer and @trainer.pokemons.length < 6
            @pokemon = Pokemon.new(nickname: name, species: species, trainer_id: @trainer.id)
            if @pokemon.save
                render json: @pokemon, status: :ok
            else
                render json: { errors: ['Trianer failed to catch a pokemon. Better luck next time!'] }, status: :unprocessable_entity
            end
        elsif @trainer and @trainer.pokemons.length >= 6
                render json: { errors: ["#{@trainer.name} already has too many pokemon. Please release one first and try again."] }, status: :unauthorized
        else
            render json: { errors: ['Could not find trainer.'] }, status: :unprocessable_entity
        end
    end

    def destroy
        @pokemon = Pokemon.find_by(id: params['id'])
        if @pokemon
            @pokemon.destroy
            render json: @pokemon, status: :ok
        else
            render json: { errors: ['Pokemon not found'] }, status: :unprocessable_entity
        end
    end
end
