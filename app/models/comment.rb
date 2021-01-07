class Comment < ApplicationRecord
    belongs_to :topic
    belongs_to :creator, class_name: "User" 
end
