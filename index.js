const config = require("./config.json");
const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

const clientId = config.clientId;

function connectRPC() {
    rpc.login({ clientId }).catch((err) => {
        console.error(`Failed to connect to Discord RPC, Please restart Discord!: ${err.message}`);
        setTimeout(connectRPC, 9000); // Retry every 15 seconds
    });
}

rpc.on("ready", () => {
    rpc.setActivity({
        details: config.details,
        state: config.state,
        startTimestamp: new Date(),
        // Use the keys defined in your Discord application's assets
        largeImageKey: config.assets.large_image,
        largeImageText: config.assets.large_text,
        smallImageKey: config.assets.small_image,
        smallImageText: config.assets.small_text,
        buttons: [
            { label: config.buttons[0].label1, url: config.buttons[0].url1 },
            { label: config.buttons[1].label2, url: config.buttons[1].url2 },
        ]
    });

    console.log("Your RPC is Active!");
});

connectRPC();
