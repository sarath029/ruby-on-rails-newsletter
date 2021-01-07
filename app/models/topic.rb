class Topic < ApplicationRecord
    belongs_to :creator, class_name: "User" 
    has_many :comments
    before_create :slugify

    enum topic_type: [:DISCUSSION]
    enum status: [:PUBLISHED]

    def slugify
        self.permalink = subject.parameterize
    end

end
