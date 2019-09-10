Rails.application.routes.draw do
  root to: "pages#home"
  
  # GraphQL API
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  
  # Authentication
  devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout' }
end
