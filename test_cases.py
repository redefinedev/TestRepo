import time
import pytest

@pytest.mark.parametrize("number", [i for i in range(20)])
def test_1_sec_sleep_pass(number):
    time.sleep(1)
    assert True

@pytest.mark.parametrize("number", [i for i in range(20)])
def test_1_sec_sleep_fail(number):
    time.sleep(1)
    assert False