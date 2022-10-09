defmodule AwesomeShop.Repo.Migrations.CreateProducts do
  use Ecto.Migration

  def change do
    create table(:products) do
      add :name, :string
      add :description, :string
      add :stock, :integer, default: 0, null: false
      add :price, :decimal, precision: 15, scale: 6, null: false
      add :image, :string

      timestamps()
    end
  end
end
