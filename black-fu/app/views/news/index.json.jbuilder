json.array!(@news) do |news|
  json.extract! news, :id, :title, :content, :nimg, :postdate, :from, :url
  json.url news_url(news, format: :json)
end
