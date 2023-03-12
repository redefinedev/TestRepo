import time
import pytest

def test_1_sec_pass():
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