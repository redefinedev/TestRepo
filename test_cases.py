import pytest

@pytest.mark.parametrize("i", [i for i in range(9000)])
def test_parameter(i:int):
  assert(i % 2 == 0)

@pytest.mark.skip(reason="")
def test_skip_1():
  pass

@pytest.mark.skip(reason="")
def test_skip():
  pass
