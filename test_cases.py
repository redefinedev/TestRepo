import pytest

@pytest.fixture(scope="function")
def fail_fixture():
  raise Exception("oh no some error happened")


def test_set_fail(fail_fixture):
  pass

@pytest.mark.parametrize("i", [i for i in range(9000)])
def test_parameter(i:int):
  assert(i % 2 == 0)

@pytest.mark.skip(reason="")
def test_skip_1():
  pass

@pytest.mark.skip(reason="")
def test_skip():
  pass
