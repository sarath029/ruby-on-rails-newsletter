class Topic < ApplicationRecord
    belongs_to :creator, class_name: "User" 
    has_many :comments
    before_create  :slugify

    enum topic_type: [:DISCUSSION]
    enum status: [:PUBLISHED, :CLOSED]

    def slugify
        if self.permalink.nil?
            self.permalink = self.subject.parameterize
        end
    end

    def truncated_content
        length = 200
        self.content.size > length + 5 ? [self.content[0,length],self.content[-5,5]].join("...") : self.content
    end

    def created_at_string
        self.created_at.to_formatted_s(:long)
    end

    def self.by_name(query)
        if query.present?
          self.where(<<-SQL, "%#{query.downcase}%")
            subject ILIKE ?
          SQL
        end
    end
end
