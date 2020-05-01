class UsersController < ApplicationController

    before_action :find_user, only: [:show]

    def new
        @user = User.new
    end

    def create
        @user = User.new(users_params)
        if @user.valid?
            @user.save
            flash[:error] = "Account created. Login now!!"
            redirect_to login_path
        else
            flash[:error] = "Sign up failed.. Try again."
            redirect_to login_path
        end
    end

    def show
    end

    def index
    end

    private
    def users_params
        params.require(:user).permit(:username,:password)
    end

    def find_user
        @user = User.find_by(id: params[:id])
    end

end
