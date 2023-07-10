from time import sleep
import pytest

INDEX = 0


@pytest.fixture
def roll():
    global INDEX
    INDEX += 1
    if INDEX == 1:
        assert False
    return INDEX


# this test fails twice:
# once on setup
# second time on run
def test_fails(roll):
    if INDEX == 2:
        assert False


def test_sleep():
    sleep(1)
    assert True


@pytest.mark.parametrize("i", range(10))
def test_passes(i):
    assert True
