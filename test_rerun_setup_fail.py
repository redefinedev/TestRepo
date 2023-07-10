import pytest

INDEX = 0


@pytest.fixture
def roll():
    breakpoint()
    global INDEX
    INDEX += 1
    if INDEX == 1:
        assert False
    elif INDEX == 3:
        assert True
    assert True
    yield
    INDEX = 0


def test_fail(roll):
    assert True
