import pytest


def test_xfail():
    pytest.xfail()


def test_xpass(request):
    mark = pytest.mark.xfail(reason="xpass")
    request.node.add_marker(mark)
