from time import sleep

import pytest


@pytest.mark.parametrize("i", range(2))
def test_fail_no_sleep(i):
    sleep(1)
    assert True