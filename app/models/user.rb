class User < ApplicationRecord
    has_one_attached :photo
    has_many :topics, primary_key: :creator_id, foreign_key: :id
    has_many :comments, primary_key: :creator_id, foreign_key: :id
    has_secure_password
    enum user_type: [:ENDUSER, :SUPPORTREP]
    validates :name, presence: true
    validates :name, uniqueness: true
    before_create :set_type

    def photo_url
        self.photo.url
    end

    def set_type
        if self.user_type.nil?
            self.user_type = 'ENDUSER'
        end
    end
end
