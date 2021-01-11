class Comment < ApplicationRecord
    belongs_to :topic
    belongs_to :creator, class_name: "User" 

    def created_at_string
        self.created_at.to_formatted_s(:long)
    end
end
