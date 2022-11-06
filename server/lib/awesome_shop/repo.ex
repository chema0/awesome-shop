defmodule AwesomeShop.Repo do
  use Ecto.Repo,
    otp_app: :awesome_shop,
    adapter: Ecto.Adapters.Postgres

  use Paginator
end
