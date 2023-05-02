import time
import pytest

@pytest.fixture(scope="function")
def sleep_fixture():
  print("in fixture")
  time.sleep(3)

@pytest.mark.parametrize("number", [i for i in range(20)])
def test_1_sec_sleep_pass(number):
    time.sleep(1)
    assert True

@pytest.mark.parametrize("number", [i for i in range(20)])
def test_1_sec_sleep_fail(number):
    time.sleep(1)
    assert False

def test_1_sec_pass(sleep_fixture):
  time.sleep(1)
  assert True

def test_1_sec_fail():
  time.sleep(1)
  assert 1==0

def test_2_sec_pass():
  time.sleep(2)
  assert True

def test_2_sec_fail():
  time.sleep(2)
  assert 1==0

def test_10_seconds():
  time.sleep(10)
  assert True

def test_another_1_sec():
  time.sleep(1)
  assert True

def test_skip():
  pytest.skip()

@pytest.mark.parametrize("number", [i for i in range(30,000)])
def a_lot_of_tests(number):
  assert True

@pytest.mark.parametrize("number", [i for i in range(20)])
def test_1_sec_sleep(number):
    time.sleep(1)