require 'rails_helper'

RSpec.describe User, type: :model do

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }


  describe 'uniqueness validation' do
    it 'should prevent another user with the same username' do
      chris_kim = User.create(username: 'chris_kim', password: '123456')
      should validate_uniqueness_of(:username)
    end
  end

  describe 'session token' do
    it 'assigns a session_token if one is not given' do
      chris_kim = User.create(username: 'chris_kim', password: '123456')
      expect(chris_kim.session_token).not_to be_nil
    end
  end

  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(username: 'chris_kim', password: '123456')
      user = User.find_by_username('chris_kim')
      expect(user.password).not_to be('123456')
    end

    it 'encrypts the password using BCrypt'do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'chris_kim', password: '123456')
    end

  end

  describe '::find_by_credentials' do
    it 'finds the correct user using the right credentials' do
      chris_kim = User.create(username: 'chris_kim', password: '123456')
      found_user = User.find_by_credentials('chris_kim', '123456')
      expect(chris_kim).to eq(found_user)
    end

    it 'should return nil if credentials are wrong' do
      chris_kim = User.create(username: 'chris_kim', password: '123456')
      found_user = User.find_by_credentials('chris_kim', '654321')
      expect(found_user).to be nil
    end
  end

end
