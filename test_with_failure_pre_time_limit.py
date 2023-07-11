from time import sleep

import pytest

def test_failed_sleep():
    sleep(0.98)

def test_fail_pre_time_limit():
    assert False


@pytest.mark.parametrize("i", range(2))
def test_fail_no_sleep(i):
    sleep(1)
    assert True
