import pytest

@pytest.mark.parametrize("i", range(3))
def test_passes(i):
  assert i == i

