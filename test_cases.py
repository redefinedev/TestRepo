import pytest
# all tests passes to enforce tests order
def test_passes():
  pass

def test_passes1():
  pass
def test_passes2():
  pass
def test_passes3():
  pass
def test_passes4():
  pass
def test_passes5():
  pass

@pytest.mark.skip
def test_skip():
  pass
