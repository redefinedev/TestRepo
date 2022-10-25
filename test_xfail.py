import pytest


@pytest.mark.xfail
def test_xfailed():
    assert True == False

@pytest.mark.xfail
def test_xpassed():
    assert True == True

@pytest.mark.skip
def test_skipped():
    assert True == False

def test_passed():
    assert True == True