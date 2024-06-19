## It seems that we are about to implement multi-tenant architecture here.
## In short, answering your questions:
 1. We can use DNS records routing for domains and subdomain to be forwarded on our server but this may involve unnecessary handling. 
Also proxy may help here, but I previously had no experience creating proxy, so could be wrong. But I can assume that we can't create 
hosted zone for each domain we don't own, so we can use wildcard subdomain (gPlatform.cool-games.com) and create dns record to forward to our server (using load balancer).
2. Tenant id should be created for each company we provide service for and be stored within user table on user signup (tenant_id). And also we can consider database isolation to ensure system availability
3. By validating tenancy of that user. We can also bind this tenant id in scope to session token to check allowance on evry request.