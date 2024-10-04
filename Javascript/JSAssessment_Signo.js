// Array to store the NFTs
const NFTs = [];

// NFT objects with its metadata
function mintNFT (_name, _type, _symbol, _collection) {
    const NFT = {
        "name": _name,
        "type": _type,
        "symbol": _symbol,
        "collection": _collection
    }
    NFTs.push(NFT);
}

// loop that reads and displays the NFTs information from the array
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nNFT: \t\t\t" + NFTs[i].name);
        console.log("ID: \t\t\t" + "24JB" + (i + 1));
        console.log("TYPE: \t\t\t" + NFTs[i].type);
        console.log("SYMBOL: \t\t" + NFTs[i].symbol);
        console.log("COLLECTION: \t" + NFTs[i].collection);
    }
}

// Display the total amount of minted NFTs
function getTotalSupply() {
    console.log("\nYOU HAVE MINTED "+ NFTs.length + " COINS");
}

// Function call
console.log("====================== NFT COLLECTIONS ======================");
mintNFT("damascus-sword-20", "Diamond", "Long Blade", "2020 Manila JB-NFT Convention");
mintNFT("spartan-shield-01a", "Silver", "Circle Shield", "Glorious Infantry");
mintNFT("demolisher-iv", "Silver", "Catapult", "MechaMachines - Spring 2021");
mintNFT("scottish-offense", "Bronze", "Long Blade", "2020 Manila JB-NFT Convention");
listNFTs();
console.log("=============================================================");
getTotalSupply();
