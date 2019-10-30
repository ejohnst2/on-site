require 'open-uri'

puts "getting url"
uri = open('https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2019-10-22%2000:00:00&endtime=2019-10-29%2023:59:59&minmagnitude=2.5&orderby=time')

puts "parsing results"
results = JSON.parse(uri.read)["features"]

puts "creating list"
results.first(10).each do |e|
  puts e
end
