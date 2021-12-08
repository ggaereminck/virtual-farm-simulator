class FarmsController < ApplicationController

    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: Farm.all
    end

    def show
        farm = Farm.find(params[:id])
        render json: farm, status: :ok
    end

    def create
        farm = Farm.create!(farm_params)
        render json: farm, status: :created
    end

    def update
        farm = Farm.find(params[:id])
        farm.update(farm_params)
        render json: farm
    end

    private

    def farm_params
        params.permit(:name, :currency, :img, :user_id)
    end
end
