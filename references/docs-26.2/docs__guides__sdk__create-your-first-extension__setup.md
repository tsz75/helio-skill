
# Set Up Your Extension
Let's get your development environment ready! In this guide, you'll clone the
official HELIO extension template, install dependencies, and take a quick tour
of what's included. This is the same template we use internally for our
extension development, so you're starting with battle-tested foundations.

## Create Your Project
- Clone the Extension Template Repository
First, let's get the template code onto your machine. Run the following
commands in your terminal. This will create a new folder called
`my-first-extension` with all the template files inside.
Terminal
>
git clone https://github.com/HMIProject/helio-extension-template.git my-first-extension
>
cd my-first-extension
Not sure what git is? No worries, there's another way!
If you don't have `git` installed or prefer using GitHub's website, you can:
- Go to github.com/HMIProject/helio-extension-template
- Click the green **"Code"** button
- Select **"Download ZIP"**
- Extract the ZIP file on your computer and rename the directory
to `my-first-extension`.
- Install Dependencies
Now that you have the template, let's install all the required packages.
The following command will download and install all the dependencies
defined in the template's `package.json`. It might take a minute or two.
Terminal
>
npm install
**What's being installed?**
- The HELIO SDK itself
- Development tools (TypeScript, build tools, testing utilities)
- Storybook for previewing your extensions locally
- Open the Project in Your Favorite IDE
With dependencies installed, open the project in your IDE. If you are
using VS Code and have its
Command Line Interface
installed, you can simply run:
Terminal
>
code .

### Tip for VS Code Users
The template includes recommended extensions. VS Code will prompt you
to install them when you open the project.

## What's in Your Project?
Let's take a brief look at the directory structure and its most important files.
Don't worry about understanding everything right now - we'll dive deeper as we
build.
src
Contains the TypeScript source code of your extensions
main.tsx
This is the main entry point into your extension.
namespace.ts
Defines a namespace for the elements of your extension which ensures that all names given to elements, etc. are globally unique within a HELIO project.
package.json
Standard Node.js/npm configuration file
which defines your extension's dependencies and build scripts.
Want to know more about the other files and directories?
.github
Pre-configured workflows to build, lint, and test your extension automatically on each commit using
Github Actions
.
.storybook
Contains the configuration for running
Storybook
, which lets you preview and test your extensions in isolation.
eslint.config.mjs
Contains the linter configuration – The linter (
eslint
) will provide useful tips to help you avoid common mistakes.
README.md
Contains the project documentation including all available build and development scripts.
rollup.config.mjs
Configures
Rollup
to bundle all your extension files into a single package that HELIO can install and run.
tsconfig.json
Configures the TypeScript compiler. You rarely need to modify this.

## Start Building
That's it! Your development environment is ready. In the next guide, we'll
create your first custom element - an SVG graphic that you'll see render in
both Storybook and HELIO.
Mission accomplished!
Environment setup complete! You're ready to create your first extension.
