const fs = require('fs');
const path = require('path');
const { Project, SyntaxKind } = require('ts-morph');
const { Command } = require('commander');

const program = new Command();

program
  .requiredOption('-f, --file <filePath>', 'Path to the TypeScript file')
  .requiredOption('-c, --class <className>', 'Name of the class')
  .requiredOption('-n, --name <newServiceName>', 'Name of the new service')
  .requiredOption('-t, --type <newServiceType>', 'Type of the new service');

program.parse(process.argv);

const { file, class: className, name: newServiceName, type: newServiceType } = program.opts();

const project = new Project({
  // Point to your tsconfig.json
  tsConfigFilePath: 'tsconfig.json',
});

const resolvedFilePath = path.resolve(file);
if (!fs.existsSync(resolvedFilePath)) {
  console.error(`File not found: ${resolvedFilePath}`);
  process.exit(1);
}

const sourceFile = project.addSourceFileAtPath(resolvedFilePath);
const classDeclaration = sourceFile.getClassOrThrow(className);

let constructor = classDeclaration.getConstructors()[0];
if (!constructor) {
  // If no constructor exists, create one
  constructor = classDeclaration.addConstructor();
}

// Check if the service already exists
const parameterExists = constructor.getParameters().some(parameter => {
  return parameter.getName() === newServiceName;
});

if (!parameterExists) {
  // Add the new service to the constructor
  constructor.addParameter({
    name: newServiceName,
    type: newServiceType,
    scope: Scope.Private
  });

  console.log(`Added ${newServiceName} to the constructor of ${className}.`);

  // Save the source file
  sourceFile.save().then(() => {
    console.log(`File ${file} has been updated.`);
  }).catch((error) => {
    console.error(`Error saving file ${file}:`, error);
  });
} else {
  console.log(`${newServiceName} already exists in the constructor of ${className}.`);
}
