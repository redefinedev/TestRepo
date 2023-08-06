import pytest


def test_passes():
    assert True


@pytest.mark.skip(reason="no way of currently testing this")
@pytest.mark.parametrize("i", range(10))
def test_lots_of_skips(i):
    assert i % 2 == 0


def test_fails():
    assert False


@pytest.mark.parametrize("i", range(10))
def test_many_passes():
    assert True
