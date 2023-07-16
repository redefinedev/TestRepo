import pytest

@pytest.mark.parametrize("i", range(2))
def test_passes(i):
    assert True