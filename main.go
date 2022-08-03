package main

import (
	"fmt"
)

func main() {
	fmt.Printf("%d + %d = %d\n", 1, 2, Add(1, 2))
	fmt.Printf("%d - %d = %d\n", 1, 2, Subtract(1, 2))
	fmt.Printf("%d * %d = %d\n", 1, 2, Multiply(1, 2))
	fmt.Printf("%d / %d = %f\n", 1, 2, Divide(1, 2))
	fmt.Printf("%d^0.5 = %f\n", 4, Sqrt(4))
}
