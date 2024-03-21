---
title: 'Solana Lesson 1 - Key Pairs'
description: 'Intro to Solana development'
pubDate: 'Mar 20 2024'
heroImage: '/munwalker-blog/banner.png'
---

A keypair is a matching pair of public key and secret key.
The public key is used as an “address” that points to an account on the Solana network. A public key can be shared with anyone.
The secret key is used to verify authority over the account. As the name suggests, you should always keep secret keys secret.
@solana/web3.js provides helper functions for creating a brand new keypair, or for constructing a keypair using an existing secret key.

```javascript
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
```

![Alt text](/munwalker-blog/solana/lesson1-1.png)

Since the keypair can be regenerated from the secret key, we usually only store the secret key, and restore the keypair from the secret key.

Additionally, since the secret key gives authority over the address, we don't store secret keys in source code. Instead, we put secret keys in a .env file, and add .env to .gitignore so the .env file is not commited to any source code repository.

If you already have a keypair you’d like to use, you can load a Keypair from an existing secret key stored in the filesystem or an .env file. In node.js, the @solana-developers/helpers npm package includes functions to handle this.

```javascript
import dotenv from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
```

![Alt text](/munwalker-blog/solana/lesson1-2.png)

Now we know how to generate and store secret keys for Solana!
