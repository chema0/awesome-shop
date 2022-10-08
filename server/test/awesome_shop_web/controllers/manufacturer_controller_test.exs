defmodule AwesomeShopWeb.ManufacturerControllerTest do
  use AwesomeShopWeb.ConnCase

  import AwesomeShop.CatalogFixtures

  alias AwesomeShop.Catalog.Manufacturer

  @create_attrs %{
    name: "some name"
  }
  @update_attrs %{
    name: "some updated name"
  }
  @invalid_attrs %{name: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all manufacturers", %{conn: conn} do
      conn = get(conn, Routes.manufacturer_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create manufacturer" do
    test "renders manufacturer when data is valid", %{conn: conn} do
      conn = post(conn, Routes.manufacturer_path(conn, :create), manufacturer: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.manufacturer_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "name" => "some name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.manufacturer_path(conn, :create), manufacturer: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update manufacturer" do
    setup [:create_manufacturer]

    test "renders manufacturer when data is valid", %{conn: conn, manufacturer: %Manufacturer{id: id} = manufacturer} do
      conn = put(conn, Routes.manufacturer_path(conn, :update, manufacturer), manufacturer: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.manufacturer_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "name" => "some updated name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, manufacturer: manufacturer} do
      conn = put(conn, Routes.manufacturer_path(conn, :update, manufacturer), manufacturer: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete manufacturer" do
    setup [:create_manufacturer]

    test "deletes chosen manufacturer", %{conn: conn, manufacturer: manufacturer} do
      conn = delete(conn, Routes.manufacturer_path(conn, :delete, manufacturer))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.manufacturer_path(conn, :show, manufacturer))
      end
    end
  end

  defp create_manufacturer(_) do
    manufacturer = manufacturer_fixture()
    %{manufacturer: manufacturer}
  end
end
