from time import sleep

import pytest


@pytest.fixture()
def fixture_sleep():
    sleep(1)


def test_duration():
    assert 0 == 0
