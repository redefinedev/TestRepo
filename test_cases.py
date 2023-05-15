from time import sleep

import pytest


def test_fail_1():
    assert False


def test_success():
    sleep(0.3)


def test_fail_2():
    assert False


@pytest.mark.skip
def test_skipped():
    assert 1 == 2
