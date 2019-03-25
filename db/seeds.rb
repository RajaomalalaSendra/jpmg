# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
japanese = ['こにちは','ありがとうございます','日本','みんな','ごめんなさい','大丈夫']
romanji = ['KONICHIWA','ARIGATO GOZAIMASU', 'NIHON', 'MINNA', 'GOMENNASAI', 'DAIJOBU']
malagasy = ['manahoana', 'misaotra betsaka', 'Japana', 'ny rehetra', 'miala tsiny', 'tsara']
6.times do |i|
	Word.create(japanese: japanese[i], romanji: romanji[i], malagasy: malagasy[i])
end
words = [['Go.', 'Hi.', 'Run!', 'Run!', 'Run!', 'Wow!', 'Fire!', 'Help!', 'Jump.', 'Stop!', 'Stop!'],['Va !','Salut !', 'Cours !', 'Courez !', 'Ça alors !', 'Au feu !', 'À l\'aide !','Saute.', 'Ça suffit !', 'Stop !']]
11.times do |i|
  Sentence.create(english: words[i][0], french: words[i][1])
end