import pytest

def test_pass_0():
  pass

def test_fail_1():
  assert 1==0

@pytest.mark.skip
def test_skip():
  pass

@pytest.mark.xfail
def test_must_fail():
  pass

def test_pass_2():
  pass

def test_fail_3():
  assert 1==0

def test_pass_4():
  pass

def test_pass_5():
  pass

def test_pass_6():
  pass

def test_fail_7():
  assert 1==0

