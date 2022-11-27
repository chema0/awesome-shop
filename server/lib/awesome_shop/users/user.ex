defmodule AwesomeShop.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  use Pow.Ecto.Schema

  schema "users" do
    field :name, :string
    field :email_verified, :time
    field :image, :string

    pow_user_fields()

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> cast(attrs, [:name])
    |> pow_changeset(attrs)
  end
end
