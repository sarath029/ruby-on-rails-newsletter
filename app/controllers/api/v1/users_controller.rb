module Api
    module V1
        class UsersController < ApplicationController
            def index
                users = User.all
                render json: UserSerializer.new(users).as_json
            end

            def show
                user = User.find_by(id: params[:id])
                render json: UserSerializer.new(user).as_json
            end

            def create
                user = User.find_by(name: user_params[:name])

                if user.present?
                    render json: { 
                        status: 422,
                        message: 'username already exists'
                    }  
                else
                    @user = User.new(user_params)
            
                    if @user.save
                        login!  
                        render json: {
                            user: UserSerializer.new(@user).as_json, 
                            status: 200,
                            message: 'user created successfully'
                        }
                    else
                        render json: { 
                            status: 422,
                            message: 'error creating the user'
                        }  
                    end
                end    
            end

            def update
                user = User.new(user_params)
            
                if user.update
                    render json: UserSerializer.new(user).as_json
                else
                    render json: {error: user.error.messages}, status: 422
                end
            end

            def destroy
                user = User.new(user_params)
            
                if user.destroy
                    render json: {'Message': 'Success'}, status: 200
                else
                    render json: {error: user.error.messages}, status: 422
                end
            end

            private
            
            def user_params
                params.require(:user).permit!
            end
            
        end
    end
end