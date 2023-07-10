import pytest
INDEX = 0

# should pass on the second run
# meaning it should run twice
def test_passed_rerun():
    global INDEX
    INDEX += 1
    if INDEX == 1:
        assert False
    elif INDEX == 3:
        assert True
    assert True

# should run once
def test_passed_no_rerun():
    assert True

# should run to the max number of reruns
def test_failed():
    print("Hello World")
    assert False

# should run once
def test_skipped():
    pytest.skip("Skipped test")
