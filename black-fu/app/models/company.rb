class Company < ActiveRecord::Base
  mount_uploader :logo, ProductsPhotoUploader
end
