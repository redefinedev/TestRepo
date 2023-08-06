# adding many tests
# just to have a higher number of tests
import pytest


@pytest.mark.parametrize("i", range(10))
def test_passes(i):
    pass
