# MIT-Analytics
We fetch the publicly available data on the Ethereum Blockchain to build an analytics layer on top of it resulting in multiple products for different players in the ecosystem.

## NFT_Airdrop
Using the ethereum data we cluster users (wallet addresses) and find the perfect DAO for them. We are doing so by searching the NFTs the wallet address currently holds or previously held and match it with the topic of the DAO.

### Airdrop Tool
We build a userfriendly [webpage interface](https://github.com/dustin-kl/MIT-Analytics/tree/master/NFT_Airdrop/KrauseHouse/krause_airdrop_app) for customizing the NFTs the DAOs can send as an inventation to their potential members.
The Airdrop will be handled automatically by the smart contract we have deployed earlier on the ethereum blockchain.
This Airdrop Tool can be found in the Krause House directory, as the Krause House was the first DAO the perfect user-DAO fit has been computed.

### Conversion Rate Measure
As a proof of concept we have a built in meachanism for tracking the conversion rate of the new members who could be acquired by sending the inventation via the Airdrop-Tool.


# NFT Recommendation
As the NFT market has been growing incredibly fast over the last years, the amount of NFTs are overwhelming for the users in the space. As in Web2 a recommendation engine is the way to bring structure and overview back into the space and hence enhancing the user experience.

## Machine Learning Pipline
Using state-of-the-art machine learning models embedding the NFTs in an lower-dimensional space to capture the latent structure, we built a powerful recommendation engine consisting of content-based filtering as well as collaborative filtering. (see [NFT_Recommendation](https://github.com/dustin-kl/MIT-Analytics/tree/master/NFT_Recommendation))

## Prototype
We have build a first prototype in [recommender_demo](https://github.com/dustin-kl/MIT-Analytics/tree/master/NFT_Recommendation/recommender_demo) that shows the recommendation constructed by the conten-base filtering of our recommendation engine.
