class Api::V1::UsersController < ApplicationController

  before_action :find_user, only: [:show,:update,:destroy]

  def index
    @users = User.all
    render :json => @users, status: :ok
  end

  def create
    @user = User.create(user_params)
    token = JWT.encode({ user_id: @user.id }, ENV['SUPER_SECRET_KEY'])
    render :json => { token: token }, :status => :ok
  end

  def show
    render :json => @user.as_json(only: [
      :id, :username
      ],include: [
      books: {
        except: [:created_at, :updated_at]
      }
    ]), :status => :ok
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def find_user
    @user = User.find_by(id: params[:id])
  end

end
