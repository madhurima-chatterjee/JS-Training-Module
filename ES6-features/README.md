# Block Scope & Function Scope in variables 
- Block scope - variable declaration only with let, const. Scope visiblity is only inside {}.
- Function Scope - variable declaration only with var. Scope Visiblity in entire function.
- Global Scope - Top Level. Visible everywhere.

# Template Literals 
It allow you to create strings in a more flexible and readable way, especially when embedding variables or expressions. They are written using backticks (`) instead of regular quotes (' or ").
Features - 
1.Variable/Expression Interpolation:using ${...}.
2.Multi-line Strings:Template literals can span multiple lines without using \n.
3.Nested Expressions and Function Calls


# Use Case: Fetching API data and rendering in table format
- Features

- Fetches user data from a remote API
- Dynamically renders a clean, styled table
- Includes basic error handling
- Fully responsive and self-contained in a single `.html` file

- API Source
Data is fetched from:
🔗 [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

Each user object includes:
- ID
- Name
- Email
- Address (City)

