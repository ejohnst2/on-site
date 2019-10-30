require 'open-uri'

Earthquake.destroy_all

puts "getting url"
uri = open('https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2019-10-22%2000:00:00&endtime=2019-10-29%2023:59:59&minmagnitude=2.5&orderby=time')

puts "parsing results"
results = JSON.parse(uri.read)["features"]

puts "creating list"
results.first(5).each do |e|
  eq = Earthquake.new
  eq.latitude = e["geometry"]["coordinates"][0]
  eq.longitude = e["geometry"]["coordinates"][1]
  eq.magnitude = e["properties"]["mag"]
  eq.code = e["properties"]["code"]
  eq.title = e["properties"]["title"]
  eq.details = e["properties"]["url"]
  eq.save!
end
