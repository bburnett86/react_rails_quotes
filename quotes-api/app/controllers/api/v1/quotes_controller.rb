module Api::V1
  class QuotesController < ApplicationController

    def index
      @quotes = Quote.all
      render json: @quotes
    end

    def games
      @quotes = Quote.where(theme: "games")
      render json: @quotes
    end

    def movies
      @quotes = Quote.where(theme: "movies")
      render json: @quotes
    end

    def search
      @quotes = Quote.search(params[:id])
      @quotes.each do |quote|
        puts "#{quote}"
      end
      render json: @quotes
    end
    
  end
end