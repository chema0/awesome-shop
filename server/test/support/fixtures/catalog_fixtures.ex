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

  @doc """
  Generate a unique category name.
  """
  def unique_category_name, do: "some name#{System.unique_integer([:positive])}"

  @doc """
  Generate a category.
  """
  def category_fixture(attrs \\ %{}) do
    {:ok, category} =
      attrs
      |> Enum.into(%{
        name: unique_category_name()
      })
      |> AwesomeShop.Catalog.create_category()

    category
  end
end
