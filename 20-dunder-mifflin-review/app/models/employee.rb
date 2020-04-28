class Employee < ApplicationRecord
    belongs_to :dog

    validates :title, :alias, :first_name, :last_name, :office, presence: true
    validates :title, :alias, uniqueness: true
    

    def name
        "#{first_name} #{last_name}"
    end
end
