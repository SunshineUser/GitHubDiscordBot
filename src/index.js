import { config } from 'dotenv'
import { Client, GatewayIntentBits, Routes } from 'discord.js'
import { REST } from '@discordjs/rest';
import finder from "./finder.js";

config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

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
    if(interaction.isChatInputCommand()){
        console.log('henlo world');
        
        console.log(interaction.options.getString('command-name'));
        let information = finder(interaction.options.getString('command-name'))
        // interaction.reply({content:"hello I'm bonsi buddy"})
        interaction.reply({content: information})
        
    }
})
async function main() {

    const commands = [{ 
        name: 'gitask',
        description: 'Query the gitdocs for a method',
        options:[
            {
                name: 'command-name',
                description: 'the name of the command you wish to query',
                type: 3, // (3) option type string
                required: true,
            }
        ]
    },
    {
        name: 'gitdive',
        description: 'get a full page of descriptions of the options of a command',
        options:[
            {
                name: 'command-name',
                description: 'the name of a command you wish to dive into',
                type: 3, //once again a string option command
                required: true,
            }
        ]
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