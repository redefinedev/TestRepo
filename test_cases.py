import pytest

@pytest.fixture(scope="session")
def outer_fail_fixture():
  assert False

@pytest.fixture(scope="function")
def inner_fail_fixture():
  pass


def test_set_fail(inner_fail_fixture):
  pass

def test_set_fail_1(inner_fail_fixture):
  pass

def test_set_fail_2(inner_fail_fixture):
  pass

