Priority of environments:
1. .env.local (don't push this file into the git repository)
2. .env.development or .env.production
3. .env

Note: Also we can create .env.local.production or .env.local.production


<b>Cache time & stale time in <i>react query:</i> </b> </br>
<b>- cacheTime</b> is the duration that react query stores inactive data before it's deleted from cache. defaults to 5 minutes.</br>
<b>- staleTime</b> is the duration data is considered fresh - once it's stale any new calls to the query will trigger a re-fetch from the server. defaults to 0.