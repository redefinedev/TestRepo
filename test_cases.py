from time import sleep

import pytest


@pytest.mark.parametrize("i", range(10))
def test_fail_1():
    assert False


@pytest.mark.parametrize("i", range(10))
def test_fail_param(i):
    sleep(1)
    assert False


@pytest.mark.skip
def test_skipped():
    assert 1 == 2
