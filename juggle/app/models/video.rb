class Video < ApplicationRecord
    def self.search(search)
  where("tags LIKE ? OR embeddedUrl LIKE ? OR name LIKE ? OR data LIKE ? ", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%") 
end
end
