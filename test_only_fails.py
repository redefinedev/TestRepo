import pytest


@pytest.mark.parametrize("i", range(10))
def test_only_fails(i):
    assert False
