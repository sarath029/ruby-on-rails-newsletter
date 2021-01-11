class TopicSerializer
  include FastJsonapi::ObjectSerializer
  attributes :subject, :truncated_content,:content, :creator, :status, :label, :permalink, :topic_type, :like_count, :view_count,:created_at_string

  has_many :comments
end
