
class DataController < ApplicationController
  def index
    # was { domain => https://data.sfgov.org }
    # https://www.ruby-forum.com/topic/152151
    client = SODA::Client.new({:domain => "data.sfgov.org", :app_token => ENV["socrata_app_token"]})
    response = client.get("6a9r-agq8")

    render json: response

    # i should learn how to format my own request
    
    # require 'net/http'
    # url = URI.parse('http://www.example.com/index.html')
    # req = Net::HTTP::Get.new(url.to_s)
    # res = Net::HTTP.start(url.host, url.port) {|http|
    #   http.request(req)
    # }
    # puts res.body
  end
end
