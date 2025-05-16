import pyautogui
import keyboard
import time
import threading
import os

# Function to read Java code from a file (Notepad.txt)
def read_code_from_file(file_path):
    try:
        with open(file_path, 'r') as file:
            code = file.read()

            # Split the content into parts, based on the word 'end'
            code_parts = code.split('end')

            # Ensure each part is cleaned and has a starting line
            code_parts = [part.strip() for part in code_parts]

            return code_parts
    except FileNotFoundError:
        return []  # Return empty list if the file is not found

# Flag to control whether the typing should continue or not
typing_enabled = True

# Function to auto-type the message
def auto_type(msg):
    global typing_enabled
    time.sleep(1)

    for char in msg:
        if not typing_enabled:  # Stop if the typing is disabled
            break
        pyautogui.write(char, interval=0.02)

# Run the selected code
def run_code(code_parts, num):
    global typing_enabled
    typing_enabled = True  # Ensure typing is enabled when Alt+X is pressed

    if num - 1 < len(code_parts):  # Check if the code part exists
        java_code = code_parts[num - 1]  # Get the part for the selected number
        auto_type(java_code)

# Reset to code 1 when "end" is pressed
def reset_code():
    pass  # No action needed, just a placeholder

# Function to monitor mouse position and stop typing if the cursor is at the top
def monitor_mouse_position():
    global typing_enabled
    while True:
        x, y = pyautogui.position()  # Get the current mouse position
        if y < 10:  # If mouse is at the top of the screen
            typing_enabled = False  # Stop typing
        time.sleep(0.1)  # Add a small delay to prevent CPU overload

# Start the mouse monitoring in a separate thread
threading.Thread(target=monitor_mouse_position, daemon=True).start()

# Path to the file where Java code is saved (Notepad.txt)
file_path = "C:\\gbu\\notepad.txt"  # Replace with your actual path

# Read code from file
code_parts = read_code_from_file(file_path)

# Bind hotkeys for Alt+1 to Alt+9
for num in range(1, 10):
    keyboard.add_hotkey(f'alt+{num}', lambda n=num: run_code(code_parts, n))

# Bind 'end' key to reset
keyboard.add_hotkey('end', lambda: reset_code())

# Automatically run the code from the saved Notepad file when the script starts
if __name__ == "__main__":
    run_code(code_parts, 1)  # Start with the first code part
    keyboard.wait()  # Wait for hotkeys to be pressed
