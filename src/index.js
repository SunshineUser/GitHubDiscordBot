import { config } from 'dotenv'
import { Client, GatewayIntentBits, Routes } from 'discord.js'
import { REST } from '@discordjs/rest';

config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

console.log(GUILD_ID)




const client = new Client({ 
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const rest = new REST ({ version: '10'}).setToken(TOKEN)

client.on('ready', ()=>{console.log(`${client.user.username} has logged in!`)})

client.on('interactionCreate', (interaction)=>{
    
})
async function main() {

    const commands = [{ 
        name: 'ping',
        description: 'Replies with Pong!',
    }];

    try{
        console.log('Started refreshing application (/) commands.');
        // Routes.applicationCommands()
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID,GUILD_ID),{ body: commands});
        console.log('Successfully reloaded application (/) commands.');
        client.login(TOKEN);
    }catch(err){
        console.log(err)
    }
}
main()