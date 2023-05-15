from time import sleep

import pytest


def test_fail_1():
    assert False


def test_success():
    sleep(1)


@pytest.mark.parametrize("i", range(10))
def test_fail_param(i):
    sleep(0.2)


@pytest.mark.skip
def test_skipped():
    assert 1 == 2
