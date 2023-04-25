collected = []


def pytest_collection_modifyitems(config, items):
    for item in items:
        collected.append(item.nodeid)


def pytest_terminal_summary() -> None:
    print(len(collected))
    print(collected)
