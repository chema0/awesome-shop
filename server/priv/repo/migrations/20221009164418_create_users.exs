defmodule AwesomeShop.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string, null: false
      add :password_hash, :string
      add :name, :string, null: false
      add :email_verified, :time
      add :image, :string

      timestamps()
    end

    create unique_index(:users, [:email])
  end
end
