require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject(:user) do
    FactoryGirl.build(:user,
      email: "chriskim2013@hotmail.com",
      password: "123456")
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it 'creates a password digest when a password is given' do
    expect(user.password_digest).to_not be_nil
  end

  it 'creates a session token before validation' do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe '#reset_session_token!' do

    it 'resets the session token' do
      user.valid?
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end

    it 'returns the new session token' do
      user.valid?
      expect(user.reset_session_token!).to eq(user.session_token)
    end

  end

  describe '#is_password?' do
    it 'verifies that the password is correct' do
      expect(user.is_password?('123456')).to be true
    end

    it 'verifies that the password is NOT correct' do
      expect(user.is_password?('password')).to_not be true
    end
  end

  describe '::find_by_credentials' do
    before { user.save! }

    it 'returns the user with valid credentials' do
      expect(User.find_by_credentials("chriskim2013@hotmail.com", "123456")).to eq(user)
    end

    it 'returns nil if the user has bad email' do
      expect(User.find_by_credentials("junk@hotmail.com", "123456")).to be nil
    end

    it 'returns nil if the user has bad password' do
      expect(User.find_by_credentials("chriskim2013@hotmail.com", "1234567")).to be nil
    end

  end
end
