# Basic guides: Using Workbot with api.ai NLU

![Workbot DialogFlow NLU](/assets/images/workbot/workbot-dialogflow-nlu/workbot-with-dialogflow-nlu.png)

Workbot supports api.ai for NLU - meaning you can define your intents in api.ai’s DialogFlow, and Workbot can execute the intents’ commands on Workato.

This basic guide will show you how to do it with simple use case - adding a Github ticket based on a user-reported UI issue on Slack.

Note: this guide assumes that UI-related issues go to a Github repo called ‘UI’. If you’d like to try out the example in this guide, make sure to have a repo called ‘UI’ in your connected Github account.

Before starting, make sure to [create a Dialogflow account](https://console.dialogflow.com/api-client/#/login) - it's free!

## Import IssuesBot to your api.ai account
Let's start by importing a pre-built DialogFlow bot called **IssueBot** (download the bot [here](/assets/dialogflow-bot/IssuesBot.zip)). This is a simple DialogFlow bot that works with this Workbot [recipe](https://www.workato.com/recipes/684354).

In your Dialogflow console (URL should begin with https://console.dialogflow.com),
- Click on create agent
- Under Agent name, key in “IssuesBot”, without the quotes
- Under Google Project, choose Create a Google project
- Click on **CREATE**
- Wait a few minutes for Google to create the agent. You’ll need at least 1 agent to import an agent (which we're trying to do).

![Create agent](/assets/images/workbot/workbot-dialogflow-nlu/create-agent.png)

Once done, you should be in the **Intents** page. That’s not where we want to be right now.

- From the left navigation, click on the IssuesBot gear icon

![IssuesBot gear icon](/assets/images/workbot/workbot-dialogflow-nlu/issuesbot-gear-icon.png)

- Go to Export and Import and click on IMPORT FROM ZIP
![Export and Import](/assets/images/workbot/workbot-dialogflow-nlu/export-and-import.png)

- Click on SELECT FILE, then choose the IssuesBot.zip file (the one you downloaded earlier).

![Import issues](/assets/images/workbot/workbot-dialogflow-nlu/import-issuesbot.png)

Type in IMPORT into the field and click on **IMPORT** button.
The IssuesBot should now be in your api.ai account.

## Adding a Google api.ai connection
Once again, from the left navigation, click on the IssuesBot gear icon. Under the **General** tab,
scroll down to **API KEYS (V1)** and copy **the Client access token** - you’ll need it to connect Workbot to the api.ai NLU.

![Client access token](/assets/images/workbot/workbot-dialogflow-nlu/client-access-token.png)

Back in your Workato account,
- Go to App Connections
- From the Application list, choose Google api.ai
- Set the connection name
- Paste the client access token (the one you copied from IssuesBot in api.ai. You copied that, right?)
- Hit **Connect**

![Google api.ai connection](/assets/images/workbot/workbot-dialogflow-nlu/google-apiai-connection.png)
Your IssuesBot should now be connected to Workato.

## Linking the Google api.ai NLU connection to your Workbot
- Go to your Workbot connection and click on Edit connection (you may have to disconnect if the connection is active, so take care that its not being used in active recipes).
- Under NLU provider, choose your Google api.ai connection.
- Hit **Connect**

![Workbot NLU provider](/assets/images/workbot/workbot-dialogflow-nlu/workbot-nlu-provider.png)

Your Workbot should now be using Google api.ai as its NLU provider.

## Testing it out
Use this [recipe](https://www.workato.com/recipes/684354), and make the app connections above for the above Workbot connection and your Github connection.

In your Workbot channel, try talking to Workbot with some of the phrases defined in the IssuesBot phrases like:
- "I need help"
- "There's a problem with the UI"

If Workbot is successful in confirming all the intents, then you should see a post command reply in Slack, as well as an issue created in Github.

![Testing IssueBot](/assets/images/workbot/workbot-dialogflow-nlu/testing-issuebot.png)

## How it works
### Intents

![Intents](/assets/images/workbot/workbot-dialogflow-nlu/intents.png)
Intent is the mapping between what a user says and the corresponding actions to undertake. In this simple guide, we’ll be transforming a user reporting an issue conversationally, which then creates a ticket in Github. This example makes use of 5 intents:
1. `ineedhelp`: This intent sparks off the user’s dialog flow with the NLU
2. `ineedhelp-issue`: This intent tries to derive what category of issue the user is facing.
3. `ineedhelp-issue-title`: This intent tries to derive the issue the user is facing.
4. `ineedhelp-issue-title-description`: This intent tries to derive a more detailed description of the issue.
5. `ineedhelp-issue-title-description-confirm`: This intent confirms with the user that the details of the issue are correct.

Intents comprise of 4 parts:
- **Training Phrases**
- **Action & parameters**
- **Response**
- **Context**

#### Training Phrases
Training phrases teach the bot to extract parameters based off of sample phrases a user may say.

![Training phrases](/assets/images/workbot/workbot-dialogflow-nlu/training-phrases.png)
For 1. `ineedhelp`, we’ve trained the NLU to recognize when a user requires assistance with phrases like “I need help!”.
For 2. `ineedhelp-issue`, we’ve trained the NLU to recognize 1 category of issue: UI.
For 3. `ineedhelp-issue-title`, we’ve trained the NLU to recognize 2 types of UI issues: images not loading and button misalignment.
For 4. `ineedhelp-issue-title-description`, we’ve trained the NLU to recognize the user’s description of the issue.
Lastly, for 5. `ineedhelp-issue-title-description-confirm`, we’ve trained the NLU to recognize the user’s confirmation when we ask if they’d like to create a Github ticket for their issue.

#### Action & parameters
Action & parameters define how to act on the values & parameters extracted from what the user says.

![Action & parameters](/assets/images/workbot/workbot-dialogflow-nlu/action-and-parameters.png)

**Parameter name**: name of the parameter we’re trying to extract

**Entity**: Variables we want to elicit from the user.

**Value**: The actual value we want to use for the parameter. Prepend with \$ to use the resolved value e.g. `$title`, or omit it to use constants e.g. `100`.  

At times, we may want to use what the user said in full (without resolving it to a value). To do so, we just append a '.original’ to the value e.g. `$title.original`.


#### Responses
After every intent prompt, you can define a response that helps to elicit information from the user in the follow-up intent. In this example, we reference previously resolved user parameter values as a positive feedback to the user that Workbot understood their input.

![Response](/assets/images/workbot/workbot-dialogflow-nlu/response.png)

This is done by in the following format: `#context_name.parameter_name` but more on context later.

#### Context
Contexts are designed for passing on parameter values from previous intents.

Input contexts act as a prerequisite for the intent to be matched; i.e. the intent will participate in matching only when *all* the contexts in the input context field are active.

A good example would be in the final intent `ineedhelp-issue-title-description-confirm` where the bot asks for confirmation. The user need only reply with “ok”  - but the bot understands that its about creating the issue in Github. It knows this because the context from previous intents are being carried forward to this intent.

![Context](/assets/images/workbot/workbot-dialogflow-nlu/context.png)

#### The final intent
The final intent, `ineedhelp-issue-title-description-confirm` has 5 important parameters - 4 of which are responsible for triggering the recipe in Workato.
- `response_type`: **command**
- `Application`: **GitHub**
- `Data`: **add**
- `Action`: **data**

`Param_query` is also an important parameter that references all parameter values resolved from the user in the current as well as previous intents.

This is passed to Workbot in the `query` datapill. In the recipe, you will see that the `query` datapill is split (using a comma delimiter_, and its array elements used to create the Github issue in the UI repo.

![Query datapill](/assets/images/workbot/workbot-dialogflow-nlu/query-datapill.png)

For more information on how DialogFlow works, visit https://dialogflow.com/docs/getting-started/basics.
