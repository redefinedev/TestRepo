package main

import (
	"fmt"
	"github.com/go-git/go-git/v5"
)

func main() {
	repo, err := git.PlainOpen(".")
	if err != nil {
		return
	}
	fmt.Println(repo.Head())
}
