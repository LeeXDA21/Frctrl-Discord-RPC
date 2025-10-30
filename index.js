import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import RPC from 'discord-rpc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const config = JSON.parse(readFileSync(join(__dirname, 'config.json'), 'utf-8'));

const rpc = new RPC.Client({
    transport: "ipc"
});

const clientId = config.clientId;

function connectRPC() {
    rpc.login({ clientId }).catch((err) => {
        console.error(`Failed to connect to Discord RPC, Please restart Discord!: ${err.message}`);
        setTimeout(connectRPC, 9000); 
    });
}

rpc.on("ready", () => {
    rpc.setActivity({
        details: config.details,
        state: config.state,
        startTimestamp: new Date(),
        
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
