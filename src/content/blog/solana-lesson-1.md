---
title: 'Solana Lesson 1 - Key Pairs'
description: 'Intro to Solana development'
pubDate: 'Mar 19 2024'
heroImage: '/munwalker-blog/solana/bg-stars-lg.svg'
---

A keypair is a matching pair of public key and secret key.
The public key is used as an “address” that points to an account on the Solana network. A public key can be shared with anyone.
The secret key is used to verify authority over the account. As the name suggests, you should always keep secret keys secret.
@solana/web3.js provides helper functions for creating a brand new keypair, or for constructing a keypair using an existing secret key.

![Alt text](/munwalker-blog/solana/lesson1-1.jpg)

Since the keypair can be regenerated from the secret key, we usually only store the secret key, and restore the keypair from the secret key.

Additionally, since the secret key gives authority over the address, we don't store secret keys in source code. Instead, we put secret keys in a .env file, and add .env to .gitignore so the .env file is not commited to any source code repository.

If you already have a keypair you’d like to use, you can load a Keypair from an existing secret key stored in the filesystem or an .env file. In node.js, the @solana-developers/helpers npm package includes functions to handle this.

![Alt text](/munwalker-blog/solana/lesson1-2.jpg)

Now we know how to generate and store secret keys for Solana!
