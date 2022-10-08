defmodule AwesomeShopWeb.ManufacturerController do
  use AwesomeShopWeb, :controller

  alias AwesomeShop.Catalog
  alias AwesomeShop.Catalog.Manufacturer

  action_fallback AwesomeShopWeb.FallbackController

  def index(conn, _params) do
    manufacturers = Catalog.list_manufacturers()
    render(conn, "index.json", manufacturers: manufacturers)
  end

  def create(conn, %{"manufacturer" => manufacturer_params}) do
    with {:ok, %Manufacturer{} = manufacturer} <- Catalog.create_manufacturer(manufacturer_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.manufacturer_path(conn, :show, manufacturer))
      |> render("show.json", manufacturer: manufacturer)
    end
  end

  def show(conn, %{"id" => id}) do
    manufacturer = Catalog.get_manufacturer!(id)
    render(conn, "show.json", manufacturer: manufacturer)
  end

  def update(conn, %{"id" => id, "manufacturer" => manufacturer_params}) do
    manufacturer = Catalog.get_manufacturer!(id)

    with {:ok, %Manufacturer{} = manufacturer} <- Catalog.update_manufacturer(manufacturer, manufacturer_params) do
      render(conn, "show.json", manufacturer: manufacturer)
    end
  end

  def delete(conn, %{"id" => id}) do
    manufacturer = Catalog.get_manufacturer!(id)

    with {:ok, %Manufacturer{}} <- Catalog.delete_manufacturer(manufacturer) do
      send_resp(conn, :no_content, "")
    end
  end
end
