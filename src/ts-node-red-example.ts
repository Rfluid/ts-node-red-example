import * as nodered from "node-red";
import { NodeProperties } from "./node-properties";

// Export the node
export = (RED: nodered.NodeAPI): void => {
  RED.nodes.registerType(
    // Replace with your node name
    "ts-node-red-example",
    function (this: nodered.Node, config: NodeProperties): void {
      RED.nodes.createNode(this, config); // Create the node

      // Watch the input event and add behavior
      this.on("input", async (msg: any, send, done) => {
        send(msg);
        done();
      });
    },
  );
};
