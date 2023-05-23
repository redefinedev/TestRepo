import pytest


def test_s1():
    assert True


def test_f1():
    assert False


def test_f2():
    assert False


@pytest.fixture
def fixture1():
    raise Exception


def test_exceptions(fixture1):
    pass
