collected = []

def pytest_collection_modifyitems(self, config, items):
    for item in items:
        collected.append(item.nodeid)

def pytest_terminal_summary(self) -> None:
    print(len(collected))
    print(collected)
