defmodule LeetcodeTogetherWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:" <> room_id, _params, socket) do
    room      = room_id
    socket    = assign(socket, :room, room)
    response  = %{room: room}
    {:ok, response, socket}
  end

  def join("room" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    broadcast!(socket, "new_msg", %{body: body})
    {:noreply, socket}
  end

  def handle_in("response:update", %{"response" => msg}, socket) do
    # case Channel.update(socket.assigns.room, codeResponse) do
      # {:ok, room} ->
        broadcast!(socket, "response:updated", %{response: msg})
        {:noreply, socket}
      # {:error, changeset} ->
        # {:reply, {:error, %{error: "Error updating room"}}, socket}
    # end
  end

end
