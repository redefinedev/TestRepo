package tests

import (
	"fmt"
	"testing"

	"github.com/go-git/go-git/plumbing/object"
)

type Changes []*Change

type Change struct {
	Action string
	Path   string
}

func TestFileDiff(t *testing.T) {
	changes := make(object.Changes, 1)
	changes[0] = object.Changes{
		Action: "Modify",
		Path:   "core_service/Dockerfile"}
}

