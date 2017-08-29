require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "renders the index page" do
      get :index
      expect(response).to render_template(:index)
      expect(response).to have_http_status(200)
    end
  end

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end

    it 'renders the new links page' do
      get :new
      expect(response).to render_template(:new)
      expect(response).to have_http_status(200)
    end
  end

  describe "GET #create" do
    context 'with invalid params' do
      it 'validates the presence of the user\'s username and password' do
        post :create, params: { user: { username: 'chris_kim', password: '' } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end

      it 'validates that the password is at least 6 characters long' do
        post :create, params: { user: { username: 'chris_kim', password: '12345' } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end
    end

    context 'with valid params' do
      it 'redirects to the users index on success' do
        post :create, params: { user: { username: 'chris_kim', password: '123456'} }
        expect(response).to redirect_to(users_url)
        expect(flash[:errors]).to_not be_present
      end

      it 'logins the user upon successful creation' do
        post :create, params: { user: { username: 'chris_kim', password: '123456'} }
        chris_kim = User.find_by_username('chris_kim')
        expect(response).to redirect_to(users_url)
        expect(session[:session_token]).to_not be nil
        expect(session[:session_token]).to eq(chris_kim.session_token)
      end
    end


  end
end
