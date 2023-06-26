import pytest
from time import sleep

@pytest.mark.parametrize("index", [i for i in range(1000)])
def test_sleep(index):
    sleep(1)
