import pytest

@pytest.mark.parametrize("i", range(2))
def test_passes(i):
  pass

def test_fails():
  assert 1 == 0

@pytest.mark.skip
def test_skipped():
  assert 1 == 2
