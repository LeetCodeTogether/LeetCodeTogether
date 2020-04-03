defmodule LeetcodeTogether.Repo do
  use Ecto.Repo,
    otp_app: :leetcode_together,
    adapter: Ecto.Adapters.Postgres
end
