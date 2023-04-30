import pytest

@pytest.mark.parametrize("i", [i for i in range(30000)])
def test_parameter(i:int):
  assert(i % 2 == 0)
