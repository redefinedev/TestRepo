import pytest
import time


@pytest.fixture()
async def dune_args():
    raise RuntimeError("This is an error")

def test_pass_0():
  time.sleep(2)
  pass

def test_fail_1():
  time.sleep(10)
  assert 1==0

def test_pass_2():
  pass

def test_pass_3():
  pass

def test_pass_4():
  pass

def test_pass_5():
  pass

def test_pass_6():
  pass

