from time import sleep

INDEX = 0


# should pass on the second run
# meaning it should run twice
def test_passed_rerun():
    sleep(1)
    global INDEX
    INDEX += 1
    if INDEX == 1:
        assert False
    assert True
