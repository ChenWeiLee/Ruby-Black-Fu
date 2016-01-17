class News < ActiveRecord::Base
  mount_uploader :nimg, ProductsPhotoUploader
end
