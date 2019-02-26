# Basic guides: Using Workbot with api.ai NLU

![Workbot DialogFlow NLU](/assets/images/workbot/workbot-dialogflow-nlu/workbot-with-dialogflow-nlu.png)

Workbot supports api.ai for NLU - meaning you can define your intents in api.ai’s DialogFlow, and Workbot can execute the intents’ commands on Workato.

This basic guide will show you how to do it with simple use case - adding a Github ticket based on a user-reported UI issue on Slack.

Note: this guide assumes that UI-related issues go to a Github repo called ‘UI’. If you’d like to try out the example in this guide, make sure to have a repo called ‘UI’ in your connected Github account.

Before starting, make sure to [create a Dialogflow account](https://console.dialogflow.com/api-client/#/login) - it's free!

## Import IssuesBot to your api.ai account
Let's start by importing a pre-built DialogFlow agent called **IssueBot** (download the bot [here](/assets/dialogflow-bot/IssuesBot.zip)). This is a simple DialogFlow bot that works with this Workbot [recipe](https://www.workato.com/recipes/684354).

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

In Dialogflow, the basic flow of every conversation involves these steps:

1. The user says something to your DialogFlow agent (in this case **IssueBot**)
2. Agent parses that input
3. Agent returns a response to the user

To define how conversations flow, **Intents** are created in your agent, which map user input to responses. In each intent, you define:
- examples of user utterances that can ***trigger*** the intent,
- what to ***extract*** from the utterance, and
- how to ***respond***.

### Intents
Intents consist of four main components that allow you to map what your user says to what your agent responds with. These components include the following:
<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Component</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Intent name</td>
            <td>The intent name is passed to your fulfillment and identifies the matched intent.
            </td>
        </tr>
        <tr>
            <td>Training phrases</td>
            <td>
              Examples of what users can say to match a particular intent.
            </td>
        </tr>
        <tr>
            <td>Actions & parameters</td>
            <td>
              Defines how relevant information (parameters) are extracted from user utterances. Examples of this kind of information include dates, times, names, places, and more. Once extracted, you can use parameter <i>values</i> look up information, carrying out a task, or return a response.
            </td>
        </tr>
        <tr>
            <td>Response</td>
            <td>
              An utterance that's spoken back to the user by the agent.
            </td>
        </tr>
    </tbody>
</table>

Each intent tries to extract a parameter from what the user says. If successful, the intent responds in a way that guides the user along to the next intent.

This carries on until all the necessary parameters have been extracted, and a pizza order can be made.

### Intents in IssueBot
**IssueBot** uses 5 intents to allow users to create a ticket in Github due to an issue. Just like the previous example, each intent tries to extract information about the issue, until all necessary parameters have been extracted, and an issue can be created in Github!
Here are the intents defined in **IssueBot**:
1. `ineedhelp`: This intent sparks off the user’s dialog flow with the NLU
2. `ineedhelp-issue`: This intent tries to extract what category of issue the user is facing.
3. `ineedhelp-issue-title`: This intent tries to extract the issue the user is facing.
4. `ineedhelp-issue-title-description`: This intent tries to extract a more detailed description of the issue.
5. `ineedhelp-issue-title-description-confirm`: This intent confirms with the user that the details of the issue are correct.

#### Training Phrases
Training phrases teach the bot to extract parameters based off of sample phrases a user may say.

![Training phrases](/assets/images/workbot/workbot-dialogflow-nlu/training-phrases.png)

1. For `ineedhelp`, we’ve trained the NLU with training phrases that allow it to recognize when a user requires assistance with phrases like “I need help!”.

2. For `ineedhelp-issue`, we’ve trained the NLU with training phrases that allow it to recognize when a user is talking about a UI issue.

3. For `ineedhelp-issue-title`, we’ve trained the NLU with training phrases that allow it to recognize 2 types of UI issues: images not loading and button misalignment.

4. For `ineedhelp-issue-title-description`, we’ve trained the NLU with training phrases that allow it to recognize the user’s description of the issue.

5. For `ineedhelp-issue-title-description-confirm`, we’ve trained the NLU with training phrases that allow it to recognize the user’s confirmation when we ask if they’d like to create a Github ticket for their issue.

#### Action & parameters
Action & parameters define how to act on the values & parameters extracted from what the user says.

![Action & parameters](/assets/images/workbot/workbot-dialogflow-nlu/action-and-parameters.png)
*Action and parameters in the 'ineedhelp-issue' intent*

The following table describes **Action & parameters** in greater detail.
<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Component</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Parameter name</td>
            <td>Name of the parameter we’re trying to extract
            </td>
        </tr>
        <tr>
            <td>Entity</td>
            <td>
              Entities define the type of information you want to extract from user utterances. For each entity, you can define several entity entries. Each entity entry provides a set of words or phrases that are considered equivalent. For example, if <b><i>size</i></b> is an entity, you could define 3 entity entries:<br>
              <ul>
                <li>S, small</li>
                <li>M, medium</li>
                <li>L, large</li>
              </ul>
            </td>
        </tr>
        <tr>
            <td>Value</td>
            <td>
              The actual value we want to use for the parameter. Prepend with '$' to use the resolved value e.g. <code>$title</code>, or omit it to use constants e.g. <code>100</code>.<br><br>At times, we may want to use what the user said in full (without resolving it to a value from an entity entry). To do so, we just append <code>.original</code> to the value e.g. <code>$title.original</code>.
            </td>
        </tr>
    </tbody>
</table>

#### Responses
Each intent's response should prompt users to provide input that match another intent (in other words, to keep the conversation going). To do this, we should provide users with prompt that guide them towards a specific answer. For example, a question like "Is it a UI issue?" is better than an open ended question like "What's your issue?".

We can also specify that a parameter extracted from the user's input be used in a response. In this example, we reference previously resolved user parameter values as a subtle way to show that IssueBot understood their previous input.

![Response](/assets/images/workbot/workbot-dialogflow-nlu/response.png)

#### Contexts
Contexts let us control conversation flows by letting us define specific states that a conversation must be in before an intent should be matched. Normally, Dialogflow matches an intent if its training phrases closely resemble the user utterance. However, when contexts are applied to an intent, Dialogflow will only consider that intent for matching if the context is active.

There are two types of contexts that let you activate and deactivate contexts and can control the flow of your conversation.

##### Input contexts
![Context](/assets/images/workbot/workbot-dialogflow-nlu/context.png)
*The `ineedhelp-issue` intent above is only matched when the `ineedhelp` context is active*

Input contexts tells Dialogflow to match the intent only if:
1. The user utterance is a close match and
2. *All* input contexts are active.

#### Output contexts
![Context](/assets/images/workbot/workbot-dialogflow-nlu/context.png)
*The `ineedhelp-issue` intent above is only matched when the `ineedhelp` context is active*

Output contexts tells Dialogflow to:
1. Activate a context (if it's not already active) or
2. Maintain the context after the intent is matched.

Context allows us to pass on parameter values from previous intents, so that the next intent 'remembers' the context of the conversation. Below is a quick example to illustrate this:

>*User: I wanna order a pizza
Bot: Pizzas are great - I love pizzas. What flavor would you like?
User: Margherita
Bot: Margherita pizza, yum!*

In the example above, the bot knows that "Margherita" refers to the *pizza* (from the successful parameter extraction of the first user utterance 'I wanna order a pizza') as opposed to the cocktail of the same name.

In IssueBot, you can see this at work in the `ineedhelp-issue-title-description` intent.

![Context 2](/assets/images/workbot/workbot-dialogflow-nlu/context2.png)
*Input & output contexts of `ineedhelp-issue-title-description`*

This intent is matched only if *all* input contexts 'Title', 'Issue', and 'ineedhelp' are active. This ensures that when users reach this point of the conversation, 'Description' is the final parameter to extract. It's worth noting that the extracted parameter 'Description' is activated in the output context, so that the follow-up intent `ineedhelp-issue-title-description-confirm` can be matched to confirm all the parameters with the user.

![Context example](/assets/images/workbot/workbot-dialogflow-nlu/context-example.png)
*`ineedhelp-issue-title-description` at work in Slack*


#### The final intent
The final intent, `ineedhelp-issue-title-description-confirm` has 6 important parameters that ensure Workbot can parse all the extracted parameters from all previous intents.
>**All parameter names (including the value 'command' for the parameter `response_type`) must be fixed to enable Workbot to parse requests from DialogFlow.**



<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Parameter name</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>response_type</td>
            <td>command</td>
            <td>
              Used by Workbot to identify requests from DialogFlow. Value must always be <code>command</code>.
            </td>
        </tr>
            <tr>
                <td>application</td>
                <td>github</td>
                <td>
                  Used by Workbot to identify the <b>Application</b> part of the Workbot command.
                  <img src="/assets/images/workbot/workbot-dialogflow-nlu/command-application.png"></img><br>You can change this to the name of the app that the Workbot recipe actually uses.
                </td>
            </tr>
                <tr>
                    <td>action</td>
                    <td>add</td>
                    <td>
                      Used by Workbot to identify the <b>Command action</b> part of the Workbot command.
                      <img src="/assets/images/workbot/workbot-dialogflow-nlu/command-command.png"></img><br>You can change this to the command action that the called Workbot recipe actually uses.
                    </td>
                </tr>
                  <tr>
                      <td>data</td>
                      <td>issue</td>
                      <td>
                        Used by Workbot to identify the <b>Action data</b> part of the Workbot command.
                        <img src="/assets/images/workbot/workbot-dialogflow-nlu/command-action-data.png"></img><br>You can change this to the action data that the called Workbot recipe actually uses.
                      </td>
                  </tr>
                    <tr>
                        <td>param_query</td>
                        <td>
                          <pre>#issue.issue, #title.title.original, #description.description.original<code>
                        </td>
                        <td>
                          Used by Workbot to identify the <b>command input fields</b> part of the Workbot command.
                          <img src="/assets/images/workbot/workbot-dialogflow-nlu/command-command-input-fields.png"></img><br>Workbot strings together all the extracted parameters into a string called <code>query</code>, allowing them to be used within a recipe.
                        </td>
                    </tr>
      </tbody>
    </table>

![Final intent](/assets/images/workbot/workbot-dialogflow-nlu/final-intent.png)

`Param_query` references all parameter values extracted from conversing with the user.

This is passed to Workbot in the `query` datapill. Examining the trigger output of a successful job shows that issue, title, and description collected from the user.

![Trigger output](/assets/images/workbot/workbot-dialogflow-nlu/dialogflow-trigger-output.png)

In the recipe, you will see that the `query` datapill is mapped to the create github issue fields by splitting the string `"ui, button misaligned, Registration button is misaligned"` using the `split` method.

The 1st, 2nd, and 3rd elements of the resulting array `["ui", " button misaligned", " Registration button is misaligned"]` is referenced using their respective indexes and trimmed of leading and trailing white spaces using the `strip` method.

![Query datapill](/assets/images/workbot/workbot-dialogflow-nlu/query-datapill.png)

In this case,
- "**UI**" is mapped to **Repository name**,
- "**Button misaligned"**" is mapped to **Issue title**,
- "**Registration button is misaligned**" is mapped to **Body**

For more information on how DialogFlow works, visit https://dialogflow.com/docs/getting-started/basics.
