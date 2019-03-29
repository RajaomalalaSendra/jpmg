# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# japanese = ['こにちは','ありがとうございます','日本','みんな','ごめんなさい','大丈夫']
# romanji = ['KONICHIWA','ARIGATO GOZAIMASU', 'NIHON', 'MINNA', 'GOMENNASAI', 'DAIJOBU']
# malagasy = ['manahoana', 'misaotra betsaka', 'Japana', 'ny rehetra', 'miala tsiny', 'tsara']
# 6.times do |i|
# 	Word.create(japanese: japanese[i], romanji: romanji[i], malagasy: malagasy[i])
# end
# words = ['Go.', 'Hi.', 'Run!', 'Run!', 'Run!', 'Wow!', 'Fire!', 'Help!', 'Jump.', 'Stop!', 'Stop!']
# words_two = ['Va !','Salut !', 'Cours !', 'Courez !', 'Ça alors !', 'Au feu !', 'À l\'aide !','Saute.', 'Ça suffit !', 'Stop !']
# 11.times do |i|
#   Sentence.create(english: words[i], french: words_two[i])
# end
words = ["Hi.", "Hi.", "Run!", "Wow!", "Wow!", "Fire!", "Help!","Help!","Stop!", "Wait!", "Go on."]
words_german = ["Hallo!", 
	"Grüß Gott!",
	"Lauf!",
	"Potzdonner!",
	"Donnerwetter!",
	"Feuer!",
	"Hilfe!",
	"Zu Hülf!",
	"Stopp!",
	"Warte!",
	"Mach weiter."
]
11.times do |i|
  Deutch.create(english: words[i], german: words_german[i])
end