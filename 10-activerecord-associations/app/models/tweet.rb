class Tweet < ActiveRecord::Base
  belongs_to :user
  has_many :likes
  # def user
  #   @user = User.find_by(id: self.user_id)
  # end

end
