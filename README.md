# Illustrator Grid and Margin Script

This Adobe Illustrator script generates a customizable grid and calculates margins using the diagonal line of the artboard. The margin calculation is inspired by the Pythagorean theorem. Users can specify the number of grid rows, columns, and the division of the diagonal line for margin calculation through window prompts.

## Features
- **Customizable Grid**: Set the number of rows and columns in the grid.
- **Margin Calculation**: Margins are calculated by taking the diagonal line of the artboard and dividing it by a user-defined number.
- **Window Prompts**: Easy-to-use window prompts for setting grid and margin parameters.
- **Automatic Guide Creation**: Generates guides for the grid and margins on a new layer named "Guides".

## How It Works
1. **User Prompts**: The script begins by prompting the user to enter the number of grid rows, grid columns, and the division for the diagonal line to calculate margins.
2. **Validation**: It checks if the inputs are valid numbers.
3. **Document Check**: Ensures that there is an open document in Illustrator.
4. **Artboard Dimensions**: Retrieves the dimensions of the active artboard.
5. **Diagonal Calculation**: Computes the length of the diagonal line of the artboard and determines the margin by dividing this length by the user-defined division.
6. **Guide Creation**: 
    - Adds margin guides around the artboard.
    - Calculates the width and height of each grid cell.
    - Creates horizontal and vertical guides to form the grid within the margins.

## Usage
1. Open an Adobe Illustrator document.
2. Run the script.
3. Follow the prompts to enter the number of rows, columns, and the diagonal division for margin calculation.
4. The script will create a grid and margins based on your input.

## Requirements
- Adobe Illustrator

## Example
```javascript
// Example input: 
// Rows: 12
// Columns: 12
// Diagonal Division: 32

