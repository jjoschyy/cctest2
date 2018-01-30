require 'uri'
require 'net/http'
require 'net/https'
require 'json'

OPTS = {
  #COMMAND_LINE       =>  REST_API_NAME,      DELIVERY_PREFIX,       JSON_NUMBER_KEY
  "production-orders" => ["production-order", "ProductionOrder",     "OrderNumber"],
  "sales-orders"      => ["sales-order",      "SalesOrder",          "CustomerOrderNumber"],
  "confirmations"     => ["confirmation",     "Order_Confirmation",  "ConfirmationNumber"]
}

PARAMS = ["-only"]


class Deliver

  def self.execute(opt, scope)
    file = File.read "data/" + opt[0] + "s.json"
    data = JSON.parse(file)

    data.each_with_index do |r, i|
      process(opt, scope, r, i)
    end
  end


  def self.process(opt, scope, r, i)
    if scope == :all or r[opt[2]] == scope
      r.delete("_id")
      r.delete("_t")
      r.delete("status")

      res = deliver_to(opt[0], {opt[1] => r})
      puts "[#{i}] #{r[opt[2]]}: Response #{res.code} #{res.message}"
    end
  end


  def self.deliver_to(target, h)
    uri  = URI.parse("https://esb-test.zeiss.com/public/api/imt/adh/core/inbound/#{target}/update")
    #uri = URI.parse("http://proboard2-test/sap/production-orders")

    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true

    req = Net::HTTP::Put.new(uri.path, initheader = {'Content-Type' =>'application/json'})
    req['Ocp-Apim-Subscription-Key'] = 'fd5a77738887456a80b212024448071c'
    req.body = h.to_json
    return https.request(req)
  end


  def self.args_valid?
    OPTS.has_key?(ARGV[0]) && (!ARGV[1] || PARAMS.include?(ARGV[1]))
  end


  def self.show_options
    puts("\nAllowed options:")
    puts("----------------")
    puts(OPTS.keys.join("\n"))
    puts("\nOptional params:")
    puts("----------------")
    puts(PARAMS.to_s)
  end


  def self.all_records?
    !ARGV[1]
  end
end


if not Deliver.args_valid?
  Deliver.show_options
elsif Deliver.all_records?
  Deliver.execute(OPTS[ARGV[0]], :all)
else
  Deliver.execute(OPTS[ARGV[0]], ARGV[2])
end
