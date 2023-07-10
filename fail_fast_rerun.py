import pytest
from time import sleep


# this test should run twice
# it should pass on the second run only
def test_passed_only_by_rerun():
    global INDEX
    INDEX += 1
    if INDEX == 1:
        assert False
    elif INDEX == 3:
        assert True
    assert True


# just to pass the time limit
def test_sleep():
    sleep(1)
    assert True


# post time limit tests
@pytest.mark.parametrize("i", range(10))
def tests_passing_post_failure():
    assert True
