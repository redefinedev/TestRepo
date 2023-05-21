""" Runs with 2 nodes. Without --dist=loadgroup expects to be mixed(both fixture prints), but with --dist=loadgroup it is not mixed. """
import pytest


def write(text):
    with open("test.txt", "a") as f:
        f.write(text + "\n")


@pytest.fixture(scope="module")
def fix_g1():
    write("fix_g1")


@pytest.mark.xdist_group(name="group1")
@pytest.mark.parametrize("i", range(100))
def test_g1(fix_g1, i):
    assert True


@pytest.fixture(scope="module")
def fix_g2():
    write("fix_g2")


@pytest.mark.xdist_group(name="group2")
@pytest.mark.parametrize("i", range(100))
def test_g2(fix_g2, i):
    assert True
