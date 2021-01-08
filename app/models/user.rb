class User < ApplicationRecord
    has_one_attached :photo
    has_many :topics, primary_key: :creator_id, foreign_key: :id
    has_many :comments, primary_key: :creator_id, foreign_key: :id
    has_secure_password
    enum user_type: [:ENDUSER, :SUPPORTREP]
    validates :name, presence: true
    validates :name, uniqueness: true
    
    def photo_url
        self.photo.url
    end
end
