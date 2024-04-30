import pytest

@pytest.mark.parametrize("i", range(5))
def test_passes(i):
  assert i == i

