from time import sleep
import pytest


@pytest.mark.parametrize("i", [i for i in range(9000)])
def test_parameter(i:int):
  sleep(1)
  assert i >= 0
