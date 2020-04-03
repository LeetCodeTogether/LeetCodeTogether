defmodule CodeTogether.Repo do
  use Ecto.Repo,
    otp_app: :code_together,
    adapter: Ecto.Adapters.Postgres
end
