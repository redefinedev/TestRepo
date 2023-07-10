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
