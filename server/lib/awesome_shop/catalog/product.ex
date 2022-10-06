defmodule AwesomeShop.Catalog.Product do
  use Ecto.Schema
  import Ecto.Changeset

  schema "products" do
    field :description, :string
    field :image, :string
    field :name, :string
    field :stock, :integer

    timestamps()
  end

  @doc false
  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :description, :stock, :image])
    |> validate_required([:name, :description, :stock, :image])
  end
end
