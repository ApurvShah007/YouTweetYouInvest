import requests
import tweepy
import time
import re
auth = tweepy.OAuthHandler("rQsChGK8PlA47xuBQG7BWlM7l", "eagv4V45PBSE2s6owemD6B5J849RhjrMlQ9nDGCEkn0kpPnOyp")
auth.set_access_token("1365808318120304646-qYZCGHRWqYxNpxThl2qXBKVKaxcAqZ", "qBn1w8Is9ar0txVW0hi2igpwNAIoZHdgkCsVVh68CkE6Q")

api = tweepy.API(auth)

FILE_NAME = 'last_seen.txt'

def clean_string(tweet):
    tweet = re.sub('@[a-zA-Z0-9_]{4,}', '', tweet) # removes twitter handles from the tweet
    tweet = re.sub('#[a-zA-Z0-9_]+', '', tweet) # removes hashtags from the tweet
    tweet = re.sub(r'http\S+', '', tweet) #removes urls from the tweet
    tweet = re.compile('RT @').sub('@', tweet, count=1)
    return tweet

def retrieve_last_seen_id(file_name):
    f_read = open(file_name, 'r')
    last_seen_id = int(f_read.read().strip())
    f_read.close()
    return last_seen_id

def store_last_seen_id(last_seen_id, file_name):
    f_write = open(file_name, 'w')
    f_write.write(str(last_seen_id))
    f_write.close()
    return

def make_stock_url(stock):
	base_url = 'https://localhost:4200/?stock='
	return base_url+stock

def reply_to_tweets():
	last_seen_id = retrieve_last_seen_id(FILE_NAME)
	mentions = api.mentions_timeline(last_seen_id,tweet_mode='extended')
	for mention in reversed(mentions):
	    print(str(mention.id) + ' - ' + mention.full_text, flush=True)
	    last_seen_id = mention.id
	    store_last_seen_id(last_seen_id, FILE_NAME)
	    stock = clean_string(mention.full_text)
	    stock_url = make_stock_url(stock)
	    # dm = "Here is your custom Spotify Playlist: " + playlist_url
	    # try:
	    # 	api.send_direct_message(mention.user.id, dm)
	    # except:
	    print("Hello")
	    api.update_status('@' + mention.user.screen_name + " Here is your custom Spotify Playlist: " + stock_url, mention.id)


#Running forever!

while True:
    reply_to_tweets()
    time.sleep(15)