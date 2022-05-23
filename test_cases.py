import pytest


@pytest.fixture()
def fixture():
  assert False

def test_passes():
  pass

def test_error(fixture):
  pass

def test_fails():
  assert 1 == 0

@pytest.mark.skip
def test_skipped():
  assert 1 == 2
