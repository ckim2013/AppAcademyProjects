# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create!(username: "Chris")
user2 = User.create!(username: "Dillon")

Poll.destroy_all
poll1 = Poll.create!(title: "a/A", author_id: user1.id)
poll2 = Poll.create!(title: "HackReactor", author_id: user2.id)

Question.destroy_all
question1 = Question.create!(pregunta: "What is your salary?", poll_id: poll1.id)
question2 = Question.create!(pregunta: "Does your life suck?", poll_id: poll2.id)

AnswerChoice.destroy_all
answer_choice1 = AnswerChoice.create!(answer_choice: "Successful", question_id: question1.id)
answer_choice2 = AnswerChoice.create!(answer_choice: "Unsuccessful", question_id: question1.id)
answer_choice3 = AnswerChoice.create!(answer_choice: "Yes", question_id: question2.id)
answer_choice4 = AnswerChoice.create!(answer_choice: "Really, yes", question_id: question2.id)


Response.destroy_all
response1 = Response.create!(respondent_id: user1.id, answer_choice_id: answer_choice1.id)
response2 = Response.create!(respondent_id: user2.id, answer_choice_id: answer_choice2.id)
