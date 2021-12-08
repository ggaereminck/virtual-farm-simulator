class StoreAnimalsController < ApplicationController

    def index
        render json: StoreAnimal.all
    end

    def show
        store_animal = StoreAnimal.find(params[:id])
        render json: store_animal, status: :ok
    end

    def create
        store_animal = StoreAnimal.create!(store_animal_params)
        render json: store_animal, status: :created
    end

    def destroy
        store_animal = StoreAnimal.find(params[:id])
        store_animal.destroy
    end

    def update
        store_animal = StoreAnimal.find(params[:id])
        store_animal.update(store_animal_params)
        render json: store_animal
    end

    private

    def store_animal_params
        params.permit(:name, :good_produced, :cost, :sale_value, :img, :store_id)
    end
end
