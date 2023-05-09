from time import sleep
import pytest

@pytest.mark.parametrize("i", [i for i in range(9000)])
def test_parameter_half_sec(i:int):
  sleep(0.5)
  assert(i % 2 == 0)

@pytest.mark.skip(reason="")
def test_skip_1():
  pass

@pytest.mark.skip(reason="")
def test_skip():
  pass
