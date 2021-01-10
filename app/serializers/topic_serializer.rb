class TopicSerializer
  include FastJsonapi::ObjectSerializer
  attributes :subject, :content, :creator, :status, :label, :permalink, :topic_type, :like_count, :view_count,:created_at, :updated_at

  has_many :comments
end
