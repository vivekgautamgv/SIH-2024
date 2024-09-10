#!/bin/bash

# Define MongoDB path and database path
#MONGO_PATH="/c/Program Files/MongoDB/Server/7.0/bin/mongod"
MONGO_PATH="/c/Program Files/MongoDB/Server/7.0/bin/mongod"
#DB_PATH="/c/Users/Vipin/Documents/database"
DB_PATH="/c/Users/vivek/OneDrive/Documents/database"

# Echo the steps for better clarity
echo "Starting MongoDB..."

# Check if MongoDB is already running
echo "Checking if MongoDB is already running..."
if pgrep -x "mongod" > /dev/null
then
    echo "MongoDB is already running. Stopping MongoDB..."
    # Kill the running MongoDB process
    pkill -x "mongod"
    if [ $? -eq 0 ]; then
        echo "MongoDB stopped successfully."
    else
        echo "Failed to stop MongoDB."
        exit 1
    fi
else
    echo "MongoDB is not running. Proceeding to start MongoDB..."
fi

# Start MongoDB with the specified dbpath
echo "Starting MongoDB using the following path:"
echo "MongoDB Path: $MONGO_PATH"
echo "Database Path: $DB_PATH"
"$MONGO_PATH" --dbpath "$DB_PATH" &

# Check if MongoDB started successfully
if [ $? -eq 0 ]; then
    echo "MongoDB started successfully."
else
    echo "Failed to start MongoDB."
    exit 1
fi