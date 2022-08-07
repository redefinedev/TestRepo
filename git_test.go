package tests

type Changes []*Change

type Change struct {
	Action string
	Path   string
}
