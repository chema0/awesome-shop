defmodule AwesomeShop.Repo.Migrations.CreateManufacturers do
  use Ecto.Migration

  def change do
    create table(:manufacturers) do
      add :name, :string

      timestamps()
    end
  end
end
