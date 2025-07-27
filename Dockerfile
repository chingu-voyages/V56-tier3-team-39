# Use a slim Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app/server

# Copy requirements and install them
COPY server/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire server folder into the container
COPY server /app/server

# Expose the port Gunicorn will run on
EXPOSE 5000

# Run the Flask app via Gunicorn with WebSocket support
CMD ["gunicorn", "-k", "geventwebsocket.gunicorn.workers.GeventWebSocketWorker", "-w", "1", "-b", "0.0.0.0:5000", "app_socket.app_socket_server:app"]
