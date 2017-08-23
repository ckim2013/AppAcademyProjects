# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create(username: "chriskim2013@hotmail.com")
user2 = User.create(username: "foo@gmail.com")
user3 = User.create(username: "bar@yahoo.com")

Artwork.destroy_all
artwork1 = Artwork.create(title: "Mona Lisa", image_url: "https://en.wikipedia.org/wiki/Mona_Lisa", artist_id: user1.id)
artwork2 = Artwork.create(title: "Starry Night", image_url: "https://en.wikipedia.org/wiki/The_Starry_Night", artist_id: user2.id)
artwork3 = Artwork.create(title: "The Last Supper", image_url: "https://en.wikipedia.org/wiki/The_Last_Supper", artist_id: user3.id)

ArtworkShare.destroy_all
shared1 = ArtworkShare.create(artwork_id: artwork1.id, viewer_id: user2.id)
shared2 = ArtworkShare.create(artwork_id: artwork2.id, viewer_id: user3.id)
