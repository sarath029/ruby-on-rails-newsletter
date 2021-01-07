class User < ApplicationRecord
    has_one_attached :photo
    has_many :topics, primary_key: :creator_id, foreign_key: :id
    has_many :comments, primary_key: :creator_id, foreign_key: :id

    enum user_type: [:ENDUSER, :SUPPORTREP]
    
    def photo_url
        self.photo.url
    end
end
