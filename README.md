# Illustrator-Grid-and-Margin-Script
This Adobe Illustrator script generates a customizable grid and calculates margins using the diagonal line of the artboard. The margin calculation is inspired by the Pythagorean theorem. Users can specify the number of grid rows, columns, and the division of the diagonal line for margin calculation through window prompts.

**Features**
Customizable Grid: Set the number of rows and columns in the grid.
Margin Calculation: Margins are calculated by taking the diagonal line of the artboard and dividing it by a user-defined number.
Window Prompts: Easy-to-use window prompts for setting grid and margin parameters.
Automatic Guide Creation: Generates guides for the grid and margins on a new layer named "Guides".
How It Works
User Prompts: The script begins by prompting the user to enter the number of grid rows, grid columns, and the division for the diagonal line to calculate margins.
Validation: It checks if the inputs are valid numbers.
Document Check: Ensures that there is an open document in Illustrator.
Artboard Dimensions: Retrieves the dimensions of the active artboard.
Diagonal Calculation: Computes the length of the diagonal line of the artboard and determines the margin by dividing this length by the user-defined division.
Guide Creation:
Adds margin guides around the artboard.
Calculates the width and height of each grid cell.
Creates horizontal and vertical guides to form the grid within the margins.
Usage
Open an Adobe Illustrator document.
Run the script.
Follow the prompts to enter the number of rows, columns, and the diagonal division for margin calculation.
The script will create a grid and margins based on your input.
Requirements
Adobe Illustrator
Example
javascript
Copy code
// Example input: 
// Rows: 12
// Columns: 12
// Diagonal Division: 32
The script will create a 12x12 grid with margins calculated from the diagonal length of the artboard divided by 32.

Note
This script is inspired by the Pythagorean theorem (de stelling van Pythagoras) to provide precise margin calculations based on the artboard's diagonal.

License
[Specify your license here, e.g., MIT License]

Installation
[Instructions on how to install and run the script]

Feel free to contribute or suggest improvements to enhance the functionality of this script!
