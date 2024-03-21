---
title: 'Solana Lesson 2 - Reading Data'
description: 'Intro to Solana development'
pubDate: 'Mar 21 2024'
heroImage: '/munwalker-blog/banner.png'
---

In this lesson, we will read data from the Solana blockchain. Before we start, lets cover a few basic terms.

**Accounts**: All data stored on Solana is stored in accounts, including SOL, tokens, NFTs, programs, and program data.

**SOL**: SOL is Solana's native token, which is used to pay transaction fees and more. Each SOL is made from 1 billion Lamports. Solana apps typically transfer, spend, store, and compute using Lamports, only converting to SOL for display to users.

**Addresses**: Addresses uniquely identify accounts. Addresses are often shown as base-58 encoded strings. Most addresses on Solana are also public keys.

### Reading data from the Solana network

First we must load our keypair from the previous lesson. Then, we will connect to the Solana dev network (devnet), and check the balance of our account.

```javascript
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("JByGuqeA6zkmcD6hS13iC4nQZdQ614qgCQPsXkvWaemu");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
```

![Alt text](/munwalker-blog/solana/lesson2/1.png)

We have a balance of zero! Let's get some SOL on devnet. SOL on devnet is like Monopoly money. It doesn't have any value, but is useful for testing. To get SOL on devnet, go to https://faucet.solana.com/ and enter our public key to receive SOL on our account.

After we have received some SOL, rerun the previous code again, and this time we should get a balance greater than 0!

![Alt text](/munwalker-blog/solana/lesson2/2.png)

What if we don't want to hardcode addresses in our code? Let's modify our code just a little so that we can pass in our address from the command line.

```javascript
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const publicKey = new PublicKey(suppliedPublicKey);
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
```

![Alt text](/munwalker-blog/solana/lesson2/3.png)

As a final challenge, lets add some checks to make sure that we are working with a valid address, and also, lets try checking the balance of a real account on mainnet. In this example, we will lookup the balance for shaq.sol on mainnet.

```javascript
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

let publicKey: PublicKey | undefined;
try{
    //shaq.sol == BuhYQ3jTMJh1hJMdtc8A3JPJrDrSARamJTA4ZrwHPjdW
    publicKey = new PublicKey("BuhYQ3jTMJh1hJMdtc8A3JPJrDrSARamJTA4ZrwHPjdW");
}
catch (error) {
    console.log("Invalid public key!");
}

if(publicKey){
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
}
```

![Alt text](/munwalker-blog/solana/lesson2/4.png)

We can see that shaq.sol has a balance of 0.00851904 SOL. If we want to verify that this is correct, we can do a lookup on https://solscan.io/. Now we know how to read data from the Solana network!