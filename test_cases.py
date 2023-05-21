import pytest


def write(text):
    with open("test.txt", "a") as f:
        f.write(text + "\n")


@pytest.fixture(scope="session")
def fix_s1():
    write("fix_s1")


@pytest.fixture(scope="module")
def fix_m1():
    write("fix_m1")


def test_ayal():
    write("test_ayal")


class TestClass1:
    @pytest.fixture
    def fix_c1(self):
        write("fix_c1")

    def test_c11(self, fix_c1, fix_s1, fix_m1):
        write("c11")

    def test_c12(self, fix_c1, fix_s1, fix_m1):
        write("c12")
        assert False


class TestClass2:
    @pytest.fixture(scope="session")
    def fix_c2(self):
        write("fix_c2")

    def test_c21(self, fix_c2, fix_s1, fix_m1):
        write("c21")

    def test_c22(self, fix_c2, fix_s1, fix_m1):
        write("c22")
        assert False

