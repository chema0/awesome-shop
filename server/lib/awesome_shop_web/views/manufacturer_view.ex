defmodule AwesomeShopWeb.ManufacturerView do
  use AwesomeShopWeb, :view
  alias AwesomeShopWeb.ManufacturerView

  def render("index.json", %{manufacturers: manufacturers}) do
    %{data: render_many(manufacturers, ManufacturerView, "manufacturer.json")}
  end

  def render("show.json", %{manufacturer: manufacturer}) do
    %{data: render_one(manufacturer, ManufacturerView, "manufacturer.json")}
  end

  def render("manufacturer.json", %{manufacturer: manufacturer}) do
    %{
      id: manufacturer.id,
      name: manufacturer.name
    }
  end
end
