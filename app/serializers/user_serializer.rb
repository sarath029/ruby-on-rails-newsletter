class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :label, :user_type, :photo_url

  has_many :topics
  has_many :comments
end
