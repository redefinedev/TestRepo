package main

import (
	"fmt"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
)

func main() {
	repo, err := git.PlainOpen(".")
	if err != nil {
		return
	}
	fmt.Println(repo.Head())
	refs, err := repo.Branches()
	refs.ForEach(func(ref *plumbing.Reference) error {
		fmt.Println(ref.Name().Short())
		return nil
	})
}
