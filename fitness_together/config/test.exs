use Mix.Config

# Configure your database
config :fitness_together, FitnessTogether.Repo,
  username: "postgres",
  password: "postgres",
  database: "fitness_together_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :fitness_together, FitnessTogetherWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
