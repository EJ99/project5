Rails.application.routes.draw do

  # Home page
  #list all guides
  get '/guides', to: 'guides#index'

  # Start making a new card
  get '/guide/new', to: 'guide#new'
  post '/guide/create', to: 'guide#create'
  # get '/success/:id', to: 'cards#success'

  #show card
  get '/cards/:id/show', to: 'cards#show'

end
