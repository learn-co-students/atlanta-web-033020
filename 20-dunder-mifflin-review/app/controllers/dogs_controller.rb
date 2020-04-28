class DogsController < ApplicationController

    def index
        @dogs = Dog.all
    end

    def show
        @dog = Dog.find_by(id: params[:id])
        if !@dog
            redirect_to dogs_path
        end
    end
end
