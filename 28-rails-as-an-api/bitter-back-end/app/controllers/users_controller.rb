class UsersController < ApplicationController
    
    before_action :find_user, only: [:show, :update, :destroy]

    def index
        @users = User.all
        render :json => @users
    end

    def create
        @user = User.create(users_params)
        if @user.persisted?
            render :json => @user, status: :created
        else
            render :json => { errors: @user.errors }
        end
    end

    def show
        if @user
            render :json => @user
        else
            render :json => {error: 'User not found'}, status: :not_found
        end
    end

    def update
        @user.update(users_params)
        if @user.persisted?
            render :json => @user, status: :ok
        else
            render :json => { errors: @user.errors }
        end
    end

    def destroy
        @user.destroy
        render :json => { :message => "Succesful." }
    end

    private
    def users_params
        params.require(:user).permit(:username,:password,:bio)
    end

    def find_user
        @user = User.find_by(id: params[:id])
    end

end
