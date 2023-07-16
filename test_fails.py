import time


def test_fails():
    time.sleep(1)
    assert False

def test_post_fail():
    assert True