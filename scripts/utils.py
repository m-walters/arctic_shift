import sys

version = sys.version_info
if version.major < 3 or (version.major == 3 and version.minor < 10):
    raise RuntimeError("This script requires Python 3.10 or higher")
import os
from typing import Iterable, Callable

from . import fileStreams


def processFile(path: str, processRow: Callable) -> None:
    """
    Process a file, and call processRow on each row

    :param path: File path
    :param processRow: Callable that accepts a row: dict[str, Any]
    :return: None
    """
    jsonStream = fileStreams.getFileJsonStream(path)
    if jsonStream is None:
        print(f"Skipping unknown file {path}")
        return
    for i, (lineLength, row) in enumerate(jsonStream):
        if i % 10_000 == 0:
            print(f"\rRow {i}", end="")
        try:
            processRow(row)
        except StopIteration:
            print("StopIteration encountered. Interrupting processing")
            break
    print(f"\rRow {i + 1}")


def processFolder(path: str, processRow: Callable, recursive: bool = False) -> None:
    """
    Process all files in a folder, and call processRow on each row

    :param path: Folder path
    :param processRow: Callable that accepts a row: dict[str, Any]
    :param recursive: Whether to process files in subfolders
    :return: None
    """
    fileIterator: Iterable[str]
    if recursive:
        def recursiveFileIterator():
            for root, dirs, files in os.walk(path):
                for file in files:
                    yield os.path.join(root, file)

        fileIterator = recursiveFileIterator()
    else:
        fileIterator = os.listdir(path)
        fileIterator = (os.path.join(path, file) for file in fileIterator)

    for i, file in enumerate(fileIterator):
        print(f"Processing file {i + 1: 3} {file}")
        processFile(file, processRow)
