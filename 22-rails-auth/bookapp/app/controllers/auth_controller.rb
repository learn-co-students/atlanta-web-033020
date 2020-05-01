class AuthController < ApplicationController
    
    def login
    end

    def verify
        @user = User.find_by(username: login_params[:username])

        if @user && @user.authenticate(login_params[:password])
            session[:user_id] = @user.id
            flash[:message] = "Logged in successfully.."

            redirect_to books_path
        else
            flash[:error] = "Wrong creds fam. Try again.."
            redirect_to login_path
        end
    end

    def logout
        session[:user_id] = nil
        flash[:error] = "Logged out.."
        redirect_to login_path
    end

    private
    def login_params
        params.require(:login).permit(:username,:password)
    end
end