use Mix.Config

# Configure your database
config :leetcode_together, LeetcodeTogether.Repo,
  username: "postgres",
  password: "postgres",
  database: "leetcode_together_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :leetcode_together, LeetcodeTogetherWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
