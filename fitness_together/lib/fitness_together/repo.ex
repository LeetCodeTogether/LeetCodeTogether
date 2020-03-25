defmodule FitnessTogether.Repo do
  use Ecto.Repo,
    otp_app: :fitness_together,
    adapter: Ecto.Adapters.Postgres
end
