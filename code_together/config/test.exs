use Mix.Config

# Configure your database
config :code_together, CodeTogether.Repo,
  username: "postgres",
  password: "postgres",
  database: "code_together_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :code_together, CodeTogetherWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
