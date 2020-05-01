class ApplicationController < ActionController::Base
    
    helper_method :current_user

    def current_user
        if !session[:author_id].nil? && session[:author_id] != ""
            @author = Author.find_by(id: session[:author_id])
            return @author
        else
            return nil
        end
    end

end
