import random
import pytest
import os
from time import sleep
from pathlib import Path

filename = __file__.replace(".py", ".csv")

XDIST_FILE = Path(filename)

if XDIST_FILE.exists():
    os.remove(filename)

XDIST_FILE.write_text("gw,index\n")

@pytest.mark.parametrize("i", range(5))
def test_passes(i):
    xdist_worker = os.environ.get("PYTEST_XDIST_WORKER")
    sleep(random.random())
    with open(XDIST_FILE, "a") as f:
        f.write(f"{xdist_worker},{i}\n")

    assert i + 1