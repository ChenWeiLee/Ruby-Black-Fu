json.array!(@companies) do |company|
  json.extract! company, :id, :name, :ceo, :logo
  json.url company_url(company, format: :json)
end
