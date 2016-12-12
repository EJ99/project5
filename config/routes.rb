Rails.application.routes.draw do

  # Home page
  get '/', to: 'guides#index'

  # Start making a new card
  get '/guides', to: 'guides#new'
  post '/guides/create', to: 'guides#create'
  get '/success/:id', to: 'cards#success'

  #show card
  get '/cards/:id/show', to: 'cards#show'

  
end
