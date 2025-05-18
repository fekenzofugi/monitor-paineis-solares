#!/bin/bash

./bin/ollama serve &

pid=$!

sleep 5

echo "Pulling llama3 model"
ollama pull llama3
ollama create myllama3 -f teacher.modelfile
echo "Teacher Custom Model pulled"

wait $pid