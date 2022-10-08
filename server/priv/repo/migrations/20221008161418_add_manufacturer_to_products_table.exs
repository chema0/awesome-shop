defmodule AwesomeShop.Repo.Migrations.AddManufacturerToProductsTable do
  use Ecto.Migration

  def change do
    alter table(:products) do
      add :manufacturer_id, references(:manufacturers)
    end
  end
end
