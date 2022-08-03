package main

import (
	"fmt"

	"redefine.dev/test_repo/go_test/calculator"
)

func main() {
	fmt.Printf("%d + %d = %d\n", 1, 2, calculator.Add(1, 2))
	fmt.Printf("%d - %d = %d\n", 1, 2, calculator.Subtract(1, 2))
	fmt.Printf("%d * %d = %d\n", 1, 2, calculator.Multiply(1, 2))
	fmt.Printf("%d / %d = %f\n", 1, 2, calculator.Divide(1, 2))
	fmt.Printf("%d^0.5 = %f\n", 4, calculator.Sqrt(4))
}
