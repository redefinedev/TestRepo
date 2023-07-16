import time
import pytest

INDEX = 0

# the first run should fail quickly
# the second run should fail after 1 second
# thus producing a 'success' report in the setup phase (from pytest side)
# this should not mark the run as 'passed'
@pytest.fixture()
def setup():
    if INDEX == 0:
        return
    time.sleep(1)


def test_fails(setup):
    global INDEX
    INDEX += 1
    assert False