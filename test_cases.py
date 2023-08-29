import pytest

def test_passes():
  pass

def test_dynamic_skip():
  if True:
    pytest.skip('dynamic skip')

def test_fails():
  assert 1 == 0

@pytest.mark.skip
def test_skipped():
  assert 1 == 2
