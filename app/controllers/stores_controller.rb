class StoresController < ApplicationController

    def index
        render json: Store.all
    end

    def show
        store = Store.find(params[:id])
        render json: store, status: :ok
    end

    def create
        store = Store.create!(store_params)
        render json: store, status: :created
    end

    def destroy
        store = Store.find(params[:id])
        store.destroy
    end

    def update
        store = Store.find(params[:id])
        store.update(store_params)
        render json: store
    end

    private

    def store_params
        params.permit(:name)
    end
end
