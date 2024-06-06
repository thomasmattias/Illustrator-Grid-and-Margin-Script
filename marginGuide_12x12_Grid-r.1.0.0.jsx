// Define variables for easy customization
var gridRows = prompt("Enter number of rows in the grid:", "12"); // Number of rows in the grid
var gridColumns = prompt("Enter number of columns in the grid:", "12"); // Number of columns in the grid
var diagonalDivision = prompt("Enter division of the diagonal line for margin calculation:", "32"); // Division of the diagonal line for margin calculation

// Convert input to numbers
gridRows = parseInt(gridRows);
gridColumns = parseInt(gridColumns);
diagonalDivision = parseInt(diagonalDivision);

// Check if inputs are valid
if (isNaN(gridRows) || isNaN(gridColumns) || isNaN(diagonalDivision)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
    // Check if there is an open document
    if (app.documents.length > 0) {
        var doc = app.activeDocument;

        // Get the active artboard
        var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];

        // Get artboard dimensions
        var artboardRect = artboard.artboardRect;
        var artboardWidth = artboardRect[2] - artboardRect[0];
        var artboardHeight = artboardRect[1] - artboardRect[3];

        // Calculate the length of the diagonal line
        var lineLength = Math.sqrt(Math.pow(artboardWidth, 2) + Math.pow(artboardHeight, 2));
        var margin = Math.round(lineLength / diagonalDivision); // Round off the margin

        // Create a new layer for guides
        var guideLayer = doc.layers.add();
        guideLayer.name = "Guides";

        // Function to create guide
        function createGuide(x1, y1, x2, y2) {
            var guide = doc.pathItems.add();
            guide.setEntirePath([[x1, y1], [x2, y2]]);
            guide.guides = true;
            guide.filled = false;
            guide.stroked = false;
            guide.layer = guideLayer;
        }

        // Add margin guides
        createGuide(artboardRect[0], artboardRect[1] - margin, artboardRect[2], artboardRect[1] - margin); // Top guide
        createGuide(artboardRect[0], artboardRect[3] + margin, artboardRect[2], artboardRect[3] + margin); // Bottom guide
        createGuide(artboardRect[0] + margin, artboardRect[1], artboardRect[0] + margin, artboardRect[3]); // Left guide
        createGuide(artboardRect[2] - margin, artboardRect[1], artboardRect[2] - margin, artboardRect[3]); // Right guide

        // Calculate the grid cell size
        var gridWidth = (artboardWidth - 2 * margin) / gridColumns;
        var gridHeight = (artboardHeight - 2 * margin) / gridRows;

        // Add horizontal grid guides
        for (var i = 1; i < gridRows; i++) {
            var y = artboardRect[1] - margin - i * gridHeight;
            createGuide(artboardRect[0] + margin, y, artboardRect[2] - margin, y);
        }

        // Add vertical grid guides
        for (var j = 1; j < gridColumns; j++) {
            var x = artboardRect[0] + margin + j * gridWidth;
            createGuide(x, artboardRect[1] - margin, x, artboardRect[3] + margin);
        }

        alert("Script executed successfully!");
    } else {
        alert("No document open. Please open a document and try again.");
    }
}
