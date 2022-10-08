defmodule AwesomeShop.Catalog.Manufacturer do
  use Ecto.Schema
  import Ecto.Changeset

  alias AwesomeShop.Catalog.Product

  schema "manufacturers" do
    field :name, :string

    has_many :products, Product

    timestamps()
  end

  @doc false
  def changeset(manufacturer, attrs) do
    manufacturer
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
