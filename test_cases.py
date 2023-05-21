""" Runs with 2 nodes. Without --dist=loadscope expects to be mixed(both fixture prints), but with --dist=loadscope it is not mixed. """
import pytest


def write(text):
    with open("test.txt", "a") as f:
        f.write(text + "\n")


class TestClass1:
    @pytest.fixture(scope="class")
    def fix_c1(self):
        write("fix_c1")

    @pytest.mark.parametrize("i", range(100))
    def test_c11(self, fix_c1, i):
        assert True


class TestClass2:
    @pytest.fixture(scope="class")
    def fix_c2(self):
        write("fix_c2")

    @pytest.mark.parametrize("i", range(100))
    def test_c2(self, fix_c2, i):
        assert True
