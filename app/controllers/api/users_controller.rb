class Api::UsersController < ApplicationController

  def index
    dbUsers = User.all
    render json: {users: dbUsers}
  end

  def create
    new_user = User.create(user_params)
    render json: new_user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
