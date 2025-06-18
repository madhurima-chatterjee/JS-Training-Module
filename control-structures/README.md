# SELECTION STRUCTURES
1. IF: Runs a block of code only if a condition is true.
2. ELSE: Runs one block of code if the condition is true, another if it's false.
3. ELSE-IF: Checks multiple conditions, one after another.
4. SWITCH: Used when you have many conditions based on one variable or expression.
    break - stops the code from falling through to the next case.
    default - runs if none of the cases match.

----------------------------------------------------------------------------------------------------

# ITERATIVE STRUCTURES
1. FOR LOOP: Runs the code a specific number of times.
2. WHILE LOOP: Runs the code as long as the condition is true.
    Use when you don’t know exactly how many times to loop ahead of time.
3. DO WHILE: Like while, but it runs at least once, even if the condition is false at first.
4. FOR OF LOOP: for strings.
5. FOR IN LOOP: for objects.

----------------------------------------------------------------------------------------------------

# use case - Login Attempt Limiter, Day Checker

-Features
1. Login System
- Only accepts the username: `admin` and password: `1234`
- Users have **3 attempts** to log in.
- After 3 failed attempts, the login inputs are disabled.

2. Day Checker
- Displays the current day, date, and year.
- Accessible regardless of login status.

- Code Structure
1. HTML: Provides the structure of the page.
2. CSS: Styles the layout, buttons, and overall appearance.
3. JavaScript: Handles login logic and displays the date.
