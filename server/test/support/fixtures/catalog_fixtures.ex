defmodule AwesomeShop.CatalogFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `AwesomeShop.Catalog` context.
  """

  @doc """
  Generate a product.
  """
  def product_fixture(attrs \\ %{}) do
    {:ok, product} =
      attrs
      |> Enum.into(%{
        description: "some description",
        image: "some image",
        name: "some name",
        stock: 42
      })
      |> AwesomeShop.Catalog.create_product()

    product
  end

  @doc """
  Generate a manufacturer.
  """
  def manufacturer_fixture(attrs \\ %{}) do
    {:ok, manufacturer} =
      attrs
      |> Enum.into(%{
        name: "some name"
      })
      |> AwesomeShop.Catalog.create_manufacturer()

    manufacturer
  end
end
