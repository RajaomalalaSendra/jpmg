class  Menu::Thesaurus::Api::V001::DeutchesController < ApplicationController
  def index
    render json: Deutch.all
  end

  def create
    deutch = Deutch.create(deutch_params)
    render json: deutch
  end

  def destroy
    Deutch.destroy(params[:id])
  end

  def update
    deutch = Deutch.find(params[:id])
    deutch.update_attributes(deutch_params)
    render json: deutch
  end

  private

  def deutch_params
    params.require(:deutch).permit(:id, :english, :german, :malagasy)
  end
end