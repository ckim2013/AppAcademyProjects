FactoryGirl.define do
  factory :goal do
    title "MyString"
    body "MyString"
    private false
    completed false
    user_id 1
  end
end
