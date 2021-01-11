class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :status, :created_at_string, :creator
end
