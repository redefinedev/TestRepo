import pytest

def test_passes():
  assert 1 == 0

def test_fails():
  assert 1 == 1

@pytest.mark.skip
def test_skipped():
  assert 1 == 2
