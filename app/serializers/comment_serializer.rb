class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :status, :created_at, :updated_at
end
