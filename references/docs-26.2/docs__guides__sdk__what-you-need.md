
# What You'll Need
Before you start developing extensions, let's make sure you've got everything
you need to be successful. We'll go over the essential skills and tools you
need to build solid, reliable extensions for ambitious industrial HMI
projects. Don't worry – this isn't about creating barriers. It's about helping
you understand the basics of extension development so you can create something
great and sustainable.

## Understanding the Web Platform
Here's something critical to understand before you start: JavaScript runs on a
**single-threaded event loop**. This architectural choice has a direct impact
on your extensions – and on the entire HMI.
**What this means for you:** A poorly written extension can freeze the entire
machine interface. In an industrial setting, this isn't just annoying – it can
bring production to a halt.
**New to this concept?** That's completely fine! We encourage you to learn
about it. Jake Archibald's legendary talk
"In The Loop" at
JSConf Asia is both entertaining and enlightening. For deeper dives, check out
"JavaScript: The Definitive Guide" by David Flanagan or "You Don't Know JS" by
Kyle Simpson.

### Need a Solid Extension Quickly and This Is New Territory?
No worries! Get in
touch
with our HELIO experts – we're here to help and can also build
extensions for you.

## Skills
Understanding the tools and technologies we use will make your extension
development journey much smoother. Here's what you should be comfortable with—and
why each one matters.
**TypeScript** is the foundation of HELIO extensions for a specific reason: it
provides your team with the tools to build ambitious projects with
confidence.
What's the relation between TypeScript and JavaScript?
TypeScript is often marketed as a "typed superset of JavaScript". In
simple terms, it has all of JavaScript's features, plus an additional
layer, most notably its type system. This allows TypeScript to check a
program for errors before it is run. It does this based on the types of
values, making it a static type checker.
Wanna know more about this interesting relationship? Check out the
helpful guide "TypeScript for the New Programmer" from the TypeScript
Handbook.
Its type safety is designed to identify errors before
they reach your production floor, ensuring smooth and efficient operations.
The compiler is the first line of defense, helping to write more reliable
code.
**Why it matters:** TypeScript enables us to develop a reliable, type-safe
API that you can build upon. It provides useful features to help you get
started, such as autocomplete and inline documentation.
**Getting started:** The
TypeScript Handbook offers
introductions tailored to different backgrounds – whether you're coming from
JavaScript, another language, or you're completely new to programming.
HELIO is built using **React**. Its foundational yet strikingly simple component
model is one of the key elements that has enabled us to develop such a
complex product. Like TypeScript, it is designed to facilitate collaboration
between product teams on ambitious projects.
**Why it matters:** The entry point for your custom elements will also be a
React component. While you don't need to be a React expert, having an
understanding of the basics – such as components, props, state and hooks –
will make development much more intuitive.
**Getting started:** The official
React documentation is excellent
and includes interactive examples to help you understand key concepts.
**CSS** is the way you make things look beautiful and visually consistent
on the web. Its knowledge is needed when you create custom elements that
look professional and integrate seamlessly with the rest of your HMI.
**Why it matters:** If you want your extensions to feel like a natural
part of your HMI, not like something bolted on. CSS skills help you
achieve that polish.
**Getting started:** If you're rusty on CSS, the
MDN CSS documentation is
comprehensive and practical.
If you want your extensions to interact with machine data, you'll need to
understand **HELIO's core concepts.**
**Why it matters:** Most extensions need to read from or write to your
machine's data. Understanding HELIO's basic concepts and its Data Layer
ensures you can connect your extensions to the right information at the
right time.
**Getting started:** Explore the HELIO documentation, especially the sections
on Basics & Fundamentals and HELIO Data Layer.

## Tools
Now let's talk about what you need installed on your development machine. These
tools form the foundation of your extension development environment.
**Current HELIO Version**: Obviously, you'll need the latest version of
HELIO to test your extensions in a real environment.
→ Download HELIO and
get yourself a Test License.
You'll need a current version of **Node.js** installed. Node.js provides the runtime
for your development tools and the npm package manager for installing
dependencies.
→ **Install it** from nodejs.org.
**Our Recommendation**
The HELIO team uses
volta to install Node.js and other
JavaScript tooling. It makes it a breeze to install different versions of
a tool while making sure everyone on a project has the same set of tools
with the right version.
You'll be running CLI tools to build and compile your extension, so
you need a **Terminal** application.
The good news? Your operating system already has one:
→ **Windows:** Command Prompt or PowerShell (or Windows Terminal for a better experience)
→ **macOS:** Terminal (built-in)
→ **Linux:** Your distribution's terminal emulator
**IDE for Web Development**: While you can use any text editor, an IDE
designed for web development will make your life significantly easier. Modern
IDEs provide TypeScript support, and intelligent code completion.
**Our Recommendations**
→ **Visual Studio Code**:
Free Editor with TypeScript and React support and large ecosystem
→ **WebStorm**:
Professional-grade IDE with powerful refactoring tools
Mission accomplished!
You now know what skills and tools you need to develop HELIO extensions. Ready
to create your first extension? Let's go!
