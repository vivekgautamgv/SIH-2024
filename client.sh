#!/bin/bash

API_DIR="./server"   # Replace with the correct path to your api folder
CLIENT_DIR="../client"   # Replace with the correct path to your client folder




# Function to check if node_modules exist and install dependencies if not
check_and_install_dependencies() {
    local dir=$1
    echo "Navigating to directory: $dir"
    cd "$dir" || { echo "Failed to navigate to $dir directory"; exit 1; }

    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "node_modules not found in $dir. Installing dependencies..."
        npm install
        if [ $? -eq 0 ]; then
            echo "Dependencies installed successfully."
        else
            echo "Failed to install dependencies in $dir."
            exit 1
        fi
    else
        echo "node_modules already exists in $dir. Skipping npm install."
    fi
}

# Check and install dependencies in API folder
check_and_install_dependencies "$API_DIR"

# Start the API server
echo "Starting API server..."
npm run server &
if [ $? -eq 0 ]; then
    echo "API server started successfully."
else
    echo "Failed to start API server."
    exit 1
fi

# Check and install dependencies in Client folder
check_and_install_dependencies "$CLIENT_DIR"

# Start the client
echo "Starting Client..."
npm run dev &
if [ $? -eq 0 ]; then
    echo "Client started successfully."
else
    echo "Failed to start Client."
    exit 1
fi

echo "All services started successfully."