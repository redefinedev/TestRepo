collected = []


def pytest_collection_finish(session):
    for item in session.items:
        collected.append(item.nodeid)


def pytest_terminal_summary() -> None:
    print(len(collected))
    print(collected)
