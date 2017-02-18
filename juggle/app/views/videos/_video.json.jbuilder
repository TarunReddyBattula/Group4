json.extract! video, :id, :tags, :embeddedUrl, :name, :data, :created_at, :updated_at
json.url video_url(video, format: :json)