defmodule AwesomeShopWeb.ProductController do
  use AwesomeShopWeb, :controller

  alias AwesomeShop.Catalog
  alias AwesomeShop.Catalog.Product

  action_fallback AwesomeShopWeb.FallbackController

  def index(conn, %{"limit" => limit, "offset" => offset}) do
    with {:ok, integer_limit} <- validate_integer_positive_param(conn, "limit", limit),
         {:ok, integer_offset} <- validate_integer_positive_param(conn, "offset", offset) do
      products = Catalog.list_products(integer_limit, integer_offset)
      render(conn, "index.json", products: products)
    end
  end

  def index(conn, %{"limit" => limit}) do
    with {:ok, n} <- validate_integer_positive_param(conn, "limit", limit) do
      products = Catalog.list_products(n)
      render(conn, "index.json", products: products)
    end
  end

  def index(conn, %{"offset" => offset}) do
    with {:ok, n} <- validate_integer_positive_param(conn, "offset", offset) do
      products = Catalog.list_products(nil, n)
      render(conn, "index.json", products: products)
    end
  end

  def index(conn, _) do
    products = Catalog.list_products()
    render(conn, "index.json", products: products)
  end

  def create(conn, %{"product" => product_params}) do
    with {:ok, %Product{} = product} <- Catalog.create_product(product_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.product_path(conn, :show, product))
      |> render("show.json", product: product)
    end
  end

  def show(conn, %{"id" => id}) do
    product = Catalog.get_product!(id)
    render(conn, "show.json", product: product)
  end

  def update(conn, %{"id" => id, "product" => product_params}) do
    product = Catalog.get_product!(id)

    with {:ok, %Product{} = product} <- Catalog.update_product(product, product_params) do
      render(conn, "show.json", product: product)
    end
  end

  def delete(conn, %{"id" => id}) do
    product = Catalog.get_product!(id)

    with {:ok, %Product{}} <- Catalog.delete_product(product) do
      send_resp(conn, :no_content, "")
    end
  end

  defp validate_integer_positive_param(conn, key, value) do
    case Integer.parse(value) do
      {n, ""} when n > 0 ->
        {:ok, n}

      _ ->
        send_resp(conn, :bad_request, "#{key} must be a positive integer value.")
    end
  end
end
