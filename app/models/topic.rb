class Topic < ApplicationRecord
    belongs_to :creator, class_name: "User" 
    has_many :comments
    before_create  :slugify

    enum topic_type: [:DISCUSSION]
    enum status: [:PUBLISHED]

    def slugify
        if self.permalink.nil?
            self.permalink = self.subject.parameterize
        end
    end

end
