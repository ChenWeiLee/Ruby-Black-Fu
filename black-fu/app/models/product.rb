class Product < ActiveRecord::Base
  mount_uploader :photo, ProductsPhotoUploader
end
