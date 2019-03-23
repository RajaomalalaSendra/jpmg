class Api::V002::SentencesController < ApplicationController
  def index
    render json: Sentence.all
  end

  def create
    sentence = Sentence.create(sentence_params)
    render json: sentence
  end

  def destroy
    Sentence.destroy(params[:id])
  end

  def update
    sentence = Sentence.find(params[:id])
    sentence.update_attributes(sentence_params)
    render json: sentence
  end

  private

  def sentence_params
    params.require(:sentence).permit(:id, :english, :french, :malagasy)
  end
end