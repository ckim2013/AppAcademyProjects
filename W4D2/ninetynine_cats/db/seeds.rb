# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all
cat1 = Cat.create!(birth_date: '2016-08-22', color: 'black', name: 'Princess', sex: 'F', description: 'Best cat ever')
cat2 = Cat.create!(birth_date: '2015-05-12', color: 'orange', name: 'Garfield', sex: 'M', description: 'Fattest cat ever')


CatRentalRequest.destroy_all
request1 = CatRentalRequest.create!(cat_id: cat1.id, start_date: '2017-08-01', end_date: '2017-08-15')
request2 = CatRentalRequest.create!(cat_id: cat2.id, start_date: '2017-07-01', end_date: '2017-07-15')
request3 = CatRentalRequest.create!(cat_id: cat1.id, start_date: '2017-08-02', end_date: '2017-08-16')
