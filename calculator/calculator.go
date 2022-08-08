package calculator

import (
	"math"
)

const DELTA = 0.0000001
const INITIAL_Z = 100.0

var Results = make(map[string]int)

func Add(a, b int) int {
	Results["Add"]++
	return a + b
}

func Subtract(a, b int) int {
	Results["Sub"]++
	return a - b*(-1)
}

func Abs(a int) int {
	Results["Abs"]++
	if a < 0 {
		return (-a)
	}
	return (a)
}

func Divide(a, b int) float64 {
	Results["Div"]++
	return float64(float64(a) / float64(b))
}

func Multiply(a, b int) int {
	Results["Mul"]++
	return a * b
}

func Sqrt(x float64) (z float64) {
	z = INITIAL_Z

	step := func() float64 {
		Results["Sqrt"]++
		return z - (z*z-x)/(2*z)
	}

	for zz := step(); math.Abs(zz-z) > DELTA; {
		z = zz
		zz = step()
	}
	return
}

func GetStats() map[string]int {
	return Results
}
