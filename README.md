# YouTweetYouInvest
VTHacks project for Young Investors
## Inspiration

Misinformation and sometimes lack of information in one place leads to bad decisions. We have decided to tackle this problem when it comes to whether you should invest in a stock or not. The best ay to make any such decision is to have the right information and we have made a twitter bot which attempts to solve this problem by providing a lot of necessary and relevant information all at one place!

## What it does
It is a Twitter Bot which when tweeted at with a stock name or company name, it replies to your tweet with a custom link that serves the frontend visualization and a collection of Reddit Posts and News Articles (with clickable links) and the interactive visualization of historic data.

## How we built it

We have an intricate Twitter Bot coded in Python which uses the Twitter API, tweepy ( a Twitter Wrapper) and an [Autocomplete API ](https://rapidapi.com/apidojo/api/yahoo-finance1?endpoint=apiendpoint_86459949-fcb2-4af8-b95d-7d6667965ed8) that helped us convert company names to stock tickers. 

We then developed a frontend written in typescript and javascript and uses Bootstrap to serve an application in Angular.js with visualizations using D3.js. We have used and integrated multiple APIs and created a workflow to query all of them and get relevant information. We have used the Yahoo Finance API to get the stock data and used multiple APIs from Rapid API to scrape news articles and integrate reddit into our angular app. We have hosted our application on Google Cloud Platform via the virtual machine over an IIS server and registered a domain youtweetyouinvest.tech to wrap around our VM url.

## Challenges we ran into

We ran into a lot of challenges initially with getting the components set up for the frontend using the Angular and D3.js visualizations. We also ran into challenges dealing with deployment of our code and getting it up and running for the general public users. 

We also faced multiple challenges along the way on different implementations and about deciding the look and designing the page!

## Accomplishments that we're proud of

We are very proud to have made a full-stack application project with multiple API integration and creating workflows that allow the user to find a ton of relevant information in one place. We are proud to have provided a unique way for the user in form of a Tweet Bot to gather such information. We are also proud of working as a team and defeating each challenge that came in our way from getting started on Angular and D3 ro deploying our finished product on GCP. 

We are also very elated that our bot works and we have made something that can help people to make well-informed and educated decisions on where they should invest their hard-earned money!

## What we learned

We learnt a lot about hosting code on GCP and their virtual machines. We learnt a lot about created components in Angular.js and the importance of API integration and connecting it with Bootstrap and D3.js for powerful visualizations. We also learnt a lot about making a twitter bot and integrating APIs within Python code!

## What's next for YouTweetYouInvest

We would like to expand this project into a much more grand product. We want to make a custom newsletter out of this where users can sign and select a few stocks that they would like to keep an eye on and we can send them weekly emails with this information and visualizations to keep them informed and provide a ton of relevant information delivered right into their inboxes every week without fail!
