json.array!(@barcodes) do |barcode|
  json.extract! barcode, :id, :no
  json.url barcode_url(barcode, format: :json)
end
