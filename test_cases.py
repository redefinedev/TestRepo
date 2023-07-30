import pytest

class TestClass:
  def test_passes(self,):
    pass

  def test_fails(self,):
    assert 1 == 0

  @pytest.mark.skip
  def test_skipped():
    assert 1 == 2