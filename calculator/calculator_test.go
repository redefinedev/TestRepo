package calculator

import (
	"testing"

	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/suite"
)

type CalculatorTestSuite struct {
	suite.Suite
}

type MockCalculator struct {
	mock.Mock
}

func (m *MockCalculator) Add(a, b int) int {
	args := m.Called(a, b)
	return args.Get(0).(int)
}

func TestSkip(t *testing.T) {
	t.Skip()
}

func TestAdd(t *testing.T) {
	type args struct {
		a int
		b int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{name: "AddPositives", args: args{a: 1, b: 2}, want: 3},
		{name: "AddNegatives", args: args{a: -1, b: -2}, want: -3},
		{name: "AddNegPos", args: args{a: -1, b: 2}, want: 1},
		{name: "AddPosNeg", args: args{a: 1, b: -2}, want: -1},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Add(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("Add() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestSubtract(t *testing.T) {
	type args struct {
		a int
		b int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{name: "SubtractPositives", args: args{a: 1, b: 2}, want: -1},
		{name: "SubtractNegatives", args: args{a: -1, b: -2}, want: 1},
		{name: "SubtractNegPos", args: args{a: -1, b: 2}, want: -3},
		{name: "SubtractPosNeg", args: args{a: 1, b: -2}, want: 3},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Subtract(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("Subtract() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestAbs(t *testing.T) {
	type args struct {
		a int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{name: "AbsPositive", args: args{a: 1}, want: 1},
		{name: "AbsNegative", args: args{a: -1}, want: 1},
		{name: "AbsZero", args: args{a: 0}, want: 0},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Abs(tt.args.a); got != tt.want {
				t.Errorf("Abs() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestDivide(t *testing.T) {
	type args struct {
		a int
		b int
	}
	tests := []struct {
		name string
		args args
		want float64
	}{
		{name: "DividePositives", args: args{a: 1, b: 2}, want: 0.5},
		{name: "DivideNegatives", args: args{a: -1, b: -2}, want: 0.5},
		{name: "DivideNegPos", args: args{a: -1, b: 2}, want: -0.5},
		{name: "DividePosNeg", args: args{a: 1, b: -2}, want: -0.5},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Divide(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("Divide() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestMultiply(t *testing.T) {
	type args struct {
		a int
		b int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{name: "MultiplyPositives", args: args{a: 1, b: 2}, want: 2},
		{name: "MultiplyNegatives", args: args{a: -1, b: -2}, want: 2},
		{name: "MultiplyNegPos", args: args{a: -1, b: 2}, want: -2},
		{name: "MultiplyPosNeg", args: args{a: 1, b: -2}, want: -2},
		{name: "MultiplyZero", args: args{a: 0, b: 2}, want: 0},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Multiply(tt.args.a, tt.args.b); got != tt.want {
				t.Errorf("Multiply() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestSqrt(t *testing.T) {
	type args struct {
		x float64
	}
	tests := []struct {
		name  string
		args  args
		wantZ float64
	}{
		{name: "SqrtPositive", args: args{x: 4}, wantZ: 2},
		{name: "SqrtZero", args: args{x: 0}, wantZ: 0},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotZ := Sqrt(tt.args.x); int(gotZ) != int(tt.wantZ) {
				t.Errorf("Sqrt() = %v, want %v", gotZ, tt.wantZ)
			}
		})
	}
}

func (suite *CalculatorTestSuite) TestAdd() {
	suite.Equal(3, Add(1, 2))
	suite.Equal(-1, Add(1, -2))
	suite.Equal(1, Add(-1, 2))
	suite.Equal(-3, Add(-1, -2))
}

func (suite *CalculatorTestSuite) TestSubtract() {
	suite.Equal(1, Subtract(2, 1))
	suite.Equal(-1, Subtract(1, 2))
	suite.Equal(1, Subtract(-1, -2))
	suite.Equal(-3, Subtract(-1, 2))
}

func (suite *CalculatorTestSuite) TestAbs() {
	suite.Equal(1, Abs(1))
	suite.Equal(1, Abs(-1))
	suite.Equal(0, Abs(0))
}

func (suite *CalculatorTestSuite) TestDivide() {
	suite.Equal(0.5, Divide(1, 2))
	suite.Equal(0.5, Divide(-1, -2))
	suite.Equal(-0.5, Divide(-1, 2))
	suite.Equal(-0.5, Divide(1, -2))
	suite.Equal(int(0), int(Divide(0, 2)))
}

func (suite *CalculatorTestSuite) TestMultiply() {
	suite.Equal(2, Multiply(1, 2))
	suite.Equal(-2, Multiply(1, -2))
	suite.Equal(-2, Multiply(-1, 2))
	suite.Equal(2, Multiply(-1, -2))
	suite.Equal(0, Multiply(0, 2))
}

func (suite *CalculatorTestSuite) TestSqrt() {
	suite.Equal(2, int(Sqrt(4)))
	suite.Equal(0, int(Sqrt(0)))
}

func TestCalculatorTestSuite(t *testing.T) {
	suite.Run(t, new(CalculatorTestSuite))
}

func TestMockAdd(t *testing.T) {
	mock := new(MockCalculator)
	mock.On("Add", 1, 2).Return(3)
	mock.On("Add", 1, -2).Return(-1)
	mock.On("Add", -1, 2).Return(1)
	mock.On("Add", -1, -2).Return(3)
	mock.On("Add", 0, 2).Return(0)
	mock.Add(1, 2)
	mock.Add(1, -2)
	mock.Add(-1, 2)
	mock.Add(-1, -2)
	mock.Add(0, 2)
	mock.AssertExpectations(t)
}
