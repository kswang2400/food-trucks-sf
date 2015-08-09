require 'net/http'

class DataController < ApplicationController
  def index
    url = URI.parse("https://data.sfgov.org/resource/rqzj-sfat.json")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }
    puts res.body

    render json: res.body
  end
end
