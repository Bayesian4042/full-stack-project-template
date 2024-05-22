const fs = require('fs');
const path = require('path');
const { Project, SyntaxKind } = require('ts-morph');
const { Command } = require('commander');

const program = new Command();

program
  .option('-l, --log <logPath>', 'Path to the error log file', 'error.log')
  .option('-p, --tsconfig <tsconfigPath>', 'Path to the tsconfig file', 'tsconfig.json');

  program.parse(process.argv);

  const { log: logPath, tsconfig: tsconfigPath } = program.opts();
  
  if (!fs.existsSync(logPath)) {
    console.error(`Log file not found: ${logPath}`);
    process.exit(1);
  }
  
  const logContent = fs.readFileSync(logPath, 'utf-8');
  const errorLines = logContent.split('?');
  
  const project = new Project({
    tsConfigFilePath: tsconfigPath,
  });
  
  
  const errors = errorLines
    .map(line => {
      const regex = /(.+):(\d+):(\d+) - error TS\d+: [a-zA-z0-9\s\,]+(\'\w+\')[a-zA-z0-9\s\,\']+(\'\w+\'.) [a-zA-z0-9\s\,\']+(\'\w+\')/;
      const match = line.match(regex);

      if (match) {
        const [, filePath, line, column, message, solution, solution1] = match;
        return {
          filePath,
          line: parseInt(line, 10),
          column: parseInt(column, 10),
          message,
          solution1
        };
      }
      return null;
    })
    .filter(Boolean);
  
  if (errors.length === 0) {
    console.log('No errors found in the log file.'); // Debugging: Log if no errors are found
  }
  
  errors.forEach(error => {
    const resolvedFilePath = path.resolve(error.filePath);
    if (!fs.existsSync(resolvedFilePath)) {
      console.error(`File not found: ${resolvedFilePath}`);
      return;
    }
    console.log(error)
    
    // const sourceFile = project.addSourceFileAtPath(resolvedFilePath);

    const fileContent = fs.readFileSync(resolvedFilePath, 'utf-8');
    const lines = fileContent.split('\n');
    lineNumber = error.line;
    searchString = error.message.replace(/'/g, '');
    replaceString = error.solution1.replace(/'/g, '');

    if (lineNumber > lines.length || lineNumber < 1) {
      console.error(`Invalid line number: ${lineNumber}`);
      process.exit(1);
    }

    const targetLine = lines[lineNumber - 1];
    if (targetLine.includes(searchString)) {
      lines[lineNumber - 1] = targetLine.replace(searchString, replaceString);
      fs.writeFileSync(resolvedFilePath, lines.join('\n'), 'utf-8');
      console.log(`Replaced '${searchString}' with '${replaceString}' at line ${lineNumber} in file`);
    } else {
      console.log(`String '${searchString}' not found at line ${lineNumber} in file`);
    }
  
    // Handle property renaming based on suggestion
    // if (error.solution1) {
    //   sourceFile.forEachDescendant(node => {
    //     console.log(node.set)
    //     if (
    //       node.getKind() === SyntaxKind.PropertyAssignment &&
    //       node.getName() === error.message
    //     ) {
    //       node.rename(error.solution1);
    //     }
    //   });
    //   sourceFile.saveSync();
    //   console.log(`Fixed property renaming error in ${error.filePath} at line ${error.line}`);
    // }
  
    // Handle non-existent properties on PrismaService
    // if (error.message.includes("Property 'learners' does not exist on type 'PrismaService'")) {
    //   sourceFile.forEachDescendant(node => {
    //     if (
    //       node.getKind() === SyntaxKind.PropertyAccessExpression &&
    //       node.getName() === 'learners'
    //     ) {
    //       node.rename('correctPropertyName'); // Replace with the actual correct property name
    //     }
    //   });
    //   sourceFile.saveSync();
    //   console.log(`Fixed non-existent property error in ${error.filePath} at line ${error.line}`);
    // }
  });
  