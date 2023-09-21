import { CommandInteraction, ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, Client, SlashOption, Guard } from "discordx";
import { errEmbed, colors } from "../../utils/embeds.js";

@Discord()
export class CatSayCommand {
    @Slash({ name: "catsay", description: "A cat says something that you want." })
    async execute(
        @SlashOption({ 
            name: "text",
            description: "Text for cat to say.",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        text: string,
        interaction: CommandInteraction, bot: Client): Promise<void> {
            await interaction.deferReply();
            const now = new Date();
            interaction.followUp({
                embeds: [{
                    title: ":cat: Cat.",
                    description: `Cat says: ${text}`,
                    image: {
                        url: `https://cataas.com/cat/says/${encodeURIComponent(text)}`
                    },
                    color: colors.yellow,
                    timestamp: now.toISOString()
                }]
            }).catch((err) => {
                interaction.followUp({
                    embeds: [errEmbed(err, undefined)]
                })
            });
        }
}
