import deeptrack as dt
import random
import threading
import time
import numpy as np
import cv2
import os

from tensorflow import keras


class Runtime:
    """
    Stateful class that handles runtime request from the client.
    Should be agnostic of grpc.
    """

    def __init__(self):
        self.greetings = {"en": ["Hello!", "Hi!"], "sv": ["Hej!"]}

    def get_greeting(self, language):
        assert language in self.greetings, f"Language not recognized: {language}"
        return random.choice(self.greetings[language])
