//find the pda

import { PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID,ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
//we will give the add and token mint address 
const useraddress=new PublicKey("");
const tokenaddress=new PublicKey("");

const pda=PublicKey.createProgramAddressSync([
    useraddress.toBuffer(),
    TOKEN_PROGRAM_ID.toBuffer(),
    tokenaddress.toBuffer()
]
,
ASSOCIATED_TOKEN_PROGRAM_ID)

console.log(`pda ${pda}`);