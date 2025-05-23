FROM python:3.12-slim

# Set the working directory
WORKDIR /habitaku

# Install the dependencies
RUN apt-get update && apt-get install -y espeak ffmpeg cmake build-essential libgtk-3-dev libboost-all-dev
COPY requirements.txt /habitaku
RUN pip install --no-cache-dir -r requirements.txt

COPY service_entrypoint.sh /habitaku
COPY teacher.modelfile /habitaku/
COPY . /habitaku/

# Run the application
RUN chmod +x service_entrypoint.sh

# Expose the port
EXPOSE 5000

ENTRYPOINT [ "./service_entrypoint.sh" ]