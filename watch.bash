#! /usr/bin/env bash

echo "Starting sass..."
sass --watch scss:public/css &
SASS_PID=$!

function finish {
    kill -9 $SASS_PID > /dev/null 2>&1
}
trap finish EXIT

wait
