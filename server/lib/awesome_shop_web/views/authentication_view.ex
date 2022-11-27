defmodule AwesomeShopWeb.AuthenticationView do
  use AwesomeShopWeb, :view
  alias AwesomeShopWeb.AuthenticationView

  def render("show.json", %{authentication: authentication}) do
    render_one(authentication, AuthenticationView, "authentication.json")
  end

  def render("authentication.json", %{authentication: authentication}) do
    %{user: user, session: session} = authentication

    %{
      user: %{
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image
      },
      session: session
    }
  end
end
