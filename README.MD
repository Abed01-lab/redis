
## Completed Tasks

# Configuration 1: Redis with Retention Policy

1. Install Redis on your machine and configure it to run on the default port (6379).

2. Use the Redis CLI or Redis Telnet CLI to set up a retention policy that automatically deletes keys after 24 hours.

To set up a retention policy you can use the command

```JS
EXPIRE <key> <time:seconds>
```

3. Use the Redis CLI or Redis Telnet CLI to store user data in Redis.

To store data you can use the command

```JS
SET <key> <data>
```

4. Wait for 24 hours and verify that expired keys are automatically deleted from Redis.

To check if the data is deleted after 24 hours you can use the command

```JS
GET <key>
```

# Configuration 5: Redis Publish-Subscribe Pattern

1. Install Redis on your machine and configure it to run on the default port (6379).

1. Use the Redis CLI or Redis Telnet CLI to set up a Publish-Subscribe pattern in Redis.

To setup a publish-subscirbe pattern you can use the following command:


```JS
SUBSCRIBE <channel>
```

This will create the channel if it does not exist and subscribe to it

1. Use the Redis CLI or Redis Telnet CLI to subscribe to a channel that sends real-time  updates for users.

To subsribe to a existing channel you can use the following command:

```JS
SUBSCRIBE <channel>
```

1. Use the Redis CLI or Redis Telnet CLI to publish a message to the channel.

To publish a message to all the subscribers of a channel, you can use the following command:

```JS
PUBLISH <channel> <message>
```

1. Verify that the message is received by all subscribers to the channel.
