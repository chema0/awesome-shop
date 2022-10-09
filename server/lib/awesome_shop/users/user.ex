defmodule AwesomeShop.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema

  schema "users" do
    pow_user_fields()

    field :name, :string
    field :email_verified, :time
    field :image, :string

    timestamps()
  end
end
