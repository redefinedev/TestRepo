from time import sleep

import pytest

def test_fast_pass():
    assert True

@pytest.mark.parametrize("i", range(10))
def test_fail_no_sleep(i):
    sleep(1)
    assert True
