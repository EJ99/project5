Rails.application.routes.draw do

  # Home page
  #list all guides
  get '/guides/index', to: 'guides#index'

  # Start making a new card
  get '/guides/new', to: 'guides#new'
  post '/guides', to: 'guides#create'
  # get '/success/:id', to: 'cards#success'

  #show card
  get '/guides/:id/show', to: 'guides#show'

end
