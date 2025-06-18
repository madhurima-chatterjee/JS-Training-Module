# VARIABLE
Variables store data in JavaScript. They are case sensetive.
Allowed Naming: camelCase, Only letter & digits, Starting with $, _ is allowed.
Namings convention not recommended: _ / - / special characters / space in between, Reserve words not allowed, starting digits not allowed.
There are 3 ways to declare them - Let, Var, Const

** VAR **
1. original way to declare variable. It can be re-declared or reassigned. It is function Scoped.
2. Avoid using var - it doesn't respect block boundaries which may cause bug.

** LET **
1. let - modern way, we can not re-declare same variable in same block, can re-assign a value.
2. its block scoped

** CONST **
1. const - used to declare fixed variables, cannot re-declare or re-assign.
2. Initialize it, before you declare it.

-----------------------------------------------------------------------------------------------------

# DATA TYPE
Primitive - string, Number, Boolean, Null, Undefined 
Non-Primitive - Array, Object, Functions

** PRIMITIVE **
- string: All text.
- Number: For mathematical operations.
- Boolean: True/False logic.
- null: It can be used when you want to clear a variable or show it has no value yet.
- undefined: Undefined means a variable has been declared but not given a value yet.

-----------------------------------------------------------------------------------------------------

# Comments & Code Organisation
- comments - Help us to understand code better or to mark where debugging or changes needed.
1. single line comment - use //
2. Multi- line comment - use /* */

- code organisations:
1. Group Related Code
2. Use Sections and Headers
3. Follow Consistent Indentation
4. Keep Code DRY (Don't Repeat Yourself)
5. Organize Files by Feature

-----------------------------------------------------------------------------------------------------

# Use case - Form input handling with validation messages

- Features:
1. Responsive design (works on mobile, tablet, and desktop)
2. Simple form with **Name** and **Email** fields
3. Validation:
  - Shows error messages if any field is left empty
  - Retains user input if form is invalid
  - Clears input fields after successful submission
4. Styled using basic CSS (form centered with border and padding)

- Technology Used:
1. **HTML** – for structure
2. **CSS** – for styling and responsive layout
3. **JavaScript** – for form validation logic using:
  - `var`, `let`, `const`
  - Data types: `string`, `boolean`
  - Simple DOM access (`getElementById`)
  - No advanced JS concepts (e.g.functions, arrow functions, event listeners)
