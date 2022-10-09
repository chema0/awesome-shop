defmodule AwesomeShop.Catalog.Product do
  use Ecto.Schema
  import Ecto.Changeset

  alias AwesomeShop.Catalog.Manufacturer
  alias AwesomeShop.Catalog.Category

  schema "products" do
    field :description, :string
    field :image, :string
    field :name, :string
    field :price, :decimal
    field :stock, :integer, default: 0

    belongs_to :manufacturer, Manufacturer
    many_to_many :categories, Category, join_through: "product_categories", on_replace: :delete

    timestamps()
  end

  @doc false
  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :description, :stock, :price, :image, :manufacturer_id])
    |> validate_required([:name, :description, :stock, :price, :image, :manufacturer_id])
  end
end
