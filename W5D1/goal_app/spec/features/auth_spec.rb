require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do

  feature 'signing up a user' do
    before :each do
      visit new_user_path
    end

    scenario 'shows username on the homepage after signup' do
      expect(page).to have_content "Sign Up!"
      expect(page).to have_content "Username"
      expect(page).to have_content "Password"

      fill_in "Username", with: "chris_kim2013"
      fill_in "Password", with: "123456"
      click_button "Sign Up"

      expect(page).to have_content "chris_kim2013"
      expect(current_path).to eq(users_path)
    end

  end
end

feature 'logging in' do
  before :each do
    visit new_session_path
  end

  scenario 'shows username on the homepage after login' do
    User.create(username: "chris_kim2013", password: "123456")
    expect(page).to have_content "Sign In!"
    expect(page).to have_content "Username"
    expect(page).to have_content "Password"

    fill_in "Username", with: "chris_kim2013"
    fill_in "Password", with: "123456"
    click_button "Log In"

    expect(page).to have_content "chris_kim2013"
    expect(current_path).to eq(users_path)
  end

end

feature 'logging out' do
  before :each do
    visit new_session_path
  end

  scenario 'begins with a logged out state' do
    expect(page).to have_content "Sign In!"
  end

  scenario 'doesn\'t show username on the homepage after logout' do
    User.create(username: "chris_kim2013", password: "123456")
    fill_in "Username", with: "chris_kim2013"
    fill_in "Password", with: "123456"
    click_button "Log In"

    click_button "Log Out"
    expect(page).to_not have_content "chris_kim2013"
  end
end
