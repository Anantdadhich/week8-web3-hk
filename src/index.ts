//how to create the pda

import { PublicKey } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID,TOKEN_PROGRAM_ID } from "@solana/spl-token";

const useraddress=new PublicKey("");
const tokenmintaddress=new PublicKey("");

//we will derive the associated token address
//the token creater will decide the order of the seed that we need it first or not
const getassociatedTokenAddr=(mintadress:PublicKey,owneradd:PublicKey)=>{
   return PublicKey.findProgramAddressSync([
    owneradd.toBuffer(),
    TOKEN_PROGRAM_ID.toBuffer(),
    mintadress.toBuffer()
   ],
ASSOCIATED_TOKEN_PROGRAM_ID)
};

const [associatedtokenadd,bump]=getassociatedTokenAddr(tokenmintaddress,useraddress);
console.log(`associatedtokenadd ${associatedtokenadd.toBase58()},bump ${bump}`);


