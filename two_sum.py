'''Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.'''
from typing import List 
class TwoSum:
    # nums = [2,7,11,15], target = 9
    @staticmethod
    def calculate(values: List, target: int) -> List[int]:
        sumDict = {}
        for key, value in enumerate(values):
            if value in sumDict:
                return [sumDict[value], key]
            sumDict[target-value] = key

    print(calculate([2,7,11,15], 17))