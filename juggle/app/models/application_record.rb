class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  def self.search(search)
  
end
end
