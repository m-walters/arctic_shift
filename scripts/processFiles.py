import sys

version = sys.version_info
if version.major < 3 or (version.major == 3 and version.minor < 10):
    raise RuntimeError("This script requires Python 3.10 or higher")
import os
from typing import Any

from utils import processFile, processFolder

recursive = False


def _processRow(row: dict[str, Any]):
    # Do something with the row
    pass


def main(path: str):
    """
    Process a file or folder, and call _processRow on each row

    :param path: File or folder
    :return: None
    """
    if os.path.isdir(path):
        processFolder(path, _processRow, recursive=recursive)
    else:
        processFile(path, _processRow)

    print("Done :>")


if __name__ == "__main__":
    path = sys.argv[1]
    if not path:
        raise ValueError("Please provide a file or folder path")

    main(path)
