defmodule AwesomeShop.Repo.Migrations.CreateProducts do
  use Ecto.Migration

  def change do
    create table(:products) do
      add :name, :string
      add :description, :string
      add :stock, :integer
      add :image, :string

      timestamps()
    end
  end
end
