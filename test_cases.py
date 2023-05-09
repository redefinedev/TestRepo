import pytest

@pytest.fixture(scope="session")
def fail_fixture():
  raise Exception("oh no some error happened")


def test_set_fail(fail_fixture):
  pass

def test_set_fail_1(fail_fixture):
  pass

def test_set_fail_2(fail_fixture):
  pass

