import pytest
from time import sleep

@pytest.mark.parametrize("index", [i for i in range(100)])
def test_sleep(index):
    sleep(1)
