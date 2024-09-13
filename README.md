# Abstract

An example of node-red node that uses TS.

# How to use

1. Change the `src` folder modifying the types, the TS code and the HTML file as specified at [Creating your first node](https://nodered.org/docs/creating-nodes/first-node#creating-a-simple-node);
2. Modify `package.json` to include the new node as exemplified at line 10. Notice that the path to the node is the path to the `.js` generated file;
3. Install dependencies (`npm install`) and run `npm run build` to generate the `.js` file;
4. Install the node in your node-red instance (`npm install <path-to-the-node>`). This is also detailed at the first node tutorial.

You can also add new node scripts and run them as needed.
