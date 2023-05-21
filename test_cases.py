""" Runs with 2 nodes. Without --dist=loadfile expects to be mixed(both fixture prints), but with --dist=loadfile it is not mixed. """
import pytest


def write(text):
    with open("test.txt", "a") as f:
        f.write(text + "\n")


@pytest.fixture(scope="module")
def fix_m1():
    write("fix_m1")


@pytest.mark.parametrize("i", range(100))
def test_m1(fix_m1, i):
    assert True
