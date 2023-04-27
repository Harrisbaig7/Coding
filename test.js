// Create a new workspace
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});

// Define a new block
Blockly.Blocks['hello'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Add event listener to add block button
document.getElementById('addButton').addEventListener('click', addBlock);

// Add event listener to generate code button
document.getElementById('generateButton').addEventListener('click', generateCode);

// Add a new block to the workspace
function addBlock() {
  var block = workspace.newBlock('hello');
  block.moveBy(20, 20);
}

// Generate code from blocks
function generateCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('output').textContent = code;
}
