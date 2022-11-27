defmodule AwesomeShopWeb.AuthenticationController do
  use AwesomeShopWeb, :controller

  alias Ecto.Changeset
  alias Plug.Conn
  alias AwesomeShopWeb.ErrorHelpers

  @spec create(Conn.t(), map()) :: Conn.t()
  def create(conn, params) do
    conn
    |> Pow.Plug.create_user(params)
    |> case do
      {:ok, _user, conn} ->
        json(conn, %{
          data: %{
            access_token: conn.private.api_access_token,
            renewal_token: conn.private.api_renewal_token
          }
        })

      {:error, changeset, conn} ->
        errors = Changeset.traverse_errors(changeset, &ErrorHelpers.translate_error/1)

        conn
        |> put_status(500)
        |> json(%{error: %{status: 500, message: "Couldn't create user", errors: errors}})
    end
  end

  @spec sign_in(Conn.t(), map()) :: Conn.t()
  def sign_in(conn, params) do
    conn
    |> Pow.Plug.authenticate_user(params)
    |> case do
      {:ok, conn} ->
        user = conn.assigns.current_user

        render(conn, "show.json",
          authentication: %{
            user: user,
            session: %{
              access_token: conn.private.api_access_token,
              renewal_token: conn.private.api_renewal_token
            }
          }
        )

      {:error, conn} ->
        conn
        |> put_status(401)
        |> json(%{error: %{status: 401, message: "Invalid email or password"}})
    end
  end
end
