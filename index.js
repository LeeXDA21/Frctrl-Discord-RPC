const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

const clientId = "Your-client-id"; // Your Discord Application ID

function connectRPC() {
    rpc.login({ clientId }).catch((err) => {
        console.error(`Failed to connect to Discord RPC, Please restart Discord!: ${err.message}`);
        setTimeout(connectRPC, 9000); // Retry every 15 seconds
    });
}
 
rpc.on("ready", () => {
    rpc.setActivity({
        details: "YOUR-TEXT-HERE",
        state: "Your-Text-Here",
        startTimestamp: new Date(),
        largeImageKey: "Limagekey",
        largeImageText: "Your-Text-Here",
        smallImageKey: "Simagekey",
        smallImageText: "Your-Text-Here",
        buttons: [
            { label: "button1", url: "urlgoeshere" },
            { label: "button2", url: "urlgoeshere" }
        ]
    });

    console.log("Your RPC is Active!");
});

connectRPC();
