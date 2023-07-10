import pytest
INDEX = 0


def test_passed_rerun():
    global INDEX
    INDEX += 1
    if INDEX == 1:
        assert False
    elif INDEX == 3:
        assert True
    assert True

def test_passed_no_rerun():
    assert True

def test_failed():
    assert False

def test_skipped():
    pytest.skip("Skipped test")
