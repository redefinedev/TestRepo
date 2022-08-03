export REDEFINE_GO_PATH=/usr/local/go/bin/go
export REDEFINE_DEBUG_MODE=true
export REDEFINE_LOG_PATH=./Logs/

cp ../../bernese/bernese/agents/road_runner/go_test/go ./calculator 
./go test -json -v
