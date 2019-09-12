# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

# Users
bran = User.create(
  name: 'Bran',
  email: 'bran@corran.cn',
  password: '654321',
  password_confirmation: '654321'
)

# Clients
twitter = Client.create(
  name: 'Twitter'
)

# Vendors
tencent = Vendor.create(
  name: 'Tencent'
)

# Campaigns
twitter_campaign = Campaign.create(
  name: 'Twitter_Android_CN_CPA',
  client: twitter
)

# Tracks
Track.create(
  url: 'http://www.tencent.com?track_id={TRACK_ID}',
  campaign: twitter_campaign,
  client: twitter
)

