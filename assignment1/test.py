def concatenate_shortest_first(l1, l2):
    if len(l1) <= len(l2):
        return l1 + l2
    else:
        return l2 + l1
