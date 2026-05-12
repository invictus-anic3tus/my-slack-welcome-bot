import { App } from '@slack/bolt';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.event('member_joined_channel', async ({ event, client, say }) => {
  try {
    await say({
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `Hi <@${event.user}>! :hii:`
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Welcome to the channel!!!"
			}
		},
		{
			"type": "markdown",
			"text": "I do a bunch of stuff in this channel, but I mostly just yap about totally random stuff. Here are some projs I'm working on rn!\n • the [anicept cel](https://github.com/invictus-anic3tus/anicept-cel)\n • the [tempus](https://github.com/invictus-anic3tus/tempus)\n • the [SBSPD](https://github.com/invictus-anic3tus/anicept-sbspd) (self-built solder paste dispenser!)"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Pls yap here too so that i don't go insane hearing my own echoes :thumbup:"
			}
		}
	]
});
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('Running on port', process.env.PORT || 3000);
})();

