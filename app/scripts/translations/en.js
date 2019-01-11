// English
"use strict";
var en = function() {};
en.code = "en";
en.data = {
  GEN_Help_0: "Already have a wallet somewhere?",
  GEN_Help_MetaMask:
    "So easy! Keys stay in MetaMask, not on a phishing site! Try it today.",

  GEN_Warning_1: "**Do not lose it!** It cannot be recovered if you lose it.",
  GEN_Warning_2:
    "**Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.",
  GEN_Warning_3:
    "**Make a backup!** Secure it like the millions of dollars it may one day be worth.",

  GAS_Price_1: "Not So Fast",
  GAS_Price_2: "Fast",
  GAS_Price_3: "Fast AF",

  CONTRACT_Helper_1:
    "Please change the address to your own Multisig Contract Address.",
  CONTRACT_Warning_1: "You are about to **deploy a contract**.",
  CONTRACT_Warning_2: "It will be deployed on the following network:",
  CONTRACT_Warning_3: "You are about to **execute a function on contract**.",

  SEND_Helper_Contract: "In most cases you should leave this as 0.",
  SEND_ViewOnly:
    "You cannot send with only your address. You must use one of the other options to unlock your wallet in order to send.",
  SEND_LoadTokens: "Load Tokens",
  SEND_CustomAddrMsg: "A message regarding",

  SWAP_Warning_1:
    "Warning! You do not have enough funds to complete this swap.",
  SWAP_Warning_2:
    "Please add more funds to your wallet or access a different wallet.",

  X_Advanced: "Advanced Users Only.",
  X_HelpfulLinks: "Helpful Links & FAQs",
  X_HelpfulLinks_1: "How to Access your Wallet",
  X_HelpfulLinks_2: "I lost my private key",
  X_HelpfulLinks_3: "My private key opens a different address",
  X_HelpfulLinks_4: "Migrating to/from MyEtherWallet",
  X_Network: "Network", // aka "node" or "chain" - used in the dropdown in header
  X_Network_Custom: "Add Custom Network / Node",

  DOMAIN_Buy: "Buy the domain",
  DOMAIN_BuyItNow: "Price to buy the domain immediately:",
  DOMAIN_bid: "Bid for the domain",
  DOMAIN_bid_0:
    "You are currently winning this auction with the highest bid. You can bid higher if you want, but it will delay the close of the auction for 24 hours.",
  DOMAIN_bid_1: "Bid at least",
  DOMAIN_bid_2: "on the domain.",
  DOMAIN_bid_3:
    "You will win the domain if no higher bids are placed within the next 24 hours.",
  DOMAIN_bid_4: "Note that the domain has a locked value of",
  DOMAIN_bid_5:
    "As part of the sale you will receive the deed with this value but cannot claim it unless you release the name.",
  DOMAIN_Finish_1: "Not related to that auction",
  DOMAIN_Finish_2:
    "This address is neither the winner nor the seller of the auction.",
  DOMAIN_Finish_3: "Finish the auction",
  DOMAIN_Finish_4:
    "Finish the auction to allocate the domain to the winner and the funds to the seller.",
  DOMAIN_Finish_5:
    "Click your TX hash to see if you successfully transferred the domain to DomainSale.",
  DOMAIN_offer_1: "Incorrect Wallet",
  DOMAIN_offer_2: "The wallet you unlocked does not own this name.",
  DOMAIN_offer_3:
    "In order to offer this name, please unlock the wallet with address:",
  DOMAIN_offer_4: "Offer For Sale:",
  DOMAIN_offer_5:
    "Set either of both of the prices below to offer your domain for sale.  Remember that any funds you have locked in the domain's deed will go to the buyer and 10% of the funds when sold goes to referrers.",
  DOMAIN_offer_7: "Alter Your Offer for:",
  DOMAIN_offer_8:
    "Change either of both of the prices below to alter your domain sale offer.  Remember that any funds you have locked in the domain's deed will go to the buyer and 10% of the funds when sold goes to referrers.",
  DOMAIN_offer_9: "Buy price",
  DOMAIN_offer_10:
    "This is the price at which someone can buy the domain immediately. 0 means that the domain cannot be purchased immediately.",
  DOMAIN_offer_11:
    "This is the price at which someone can start an auction for the domain.  0 means that the domain will not be available for auction.",
  DOMAIN_offer_12: "Offer your domain",
  DOMAIN_offer_13: "Alter your sale",
  DOMAIN_offer_14: "Cancel your sale",
  DOMAIN_offer_15:
    "You can cancel your domain sale, which will return the domain to you with no charge.  This is only available before any bids have been received for the domain.",

  ENS_Bid_Title: "Place a Bid",
  ENS_Finalize: "Finalize",
  ENS_Finalize_content:
    "Finalizing this name assigns the ENS name to the winning bidder. The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH. Any non-winners will also be refunded.",
  ENS_Finalize_content_1:
    "You are about to finalize the auction & claim the name:",
  ENS_Helper_1: "What is the process like?",
  ENS_Helper_10: "**If you do not reveal your bid, you will not be refunded.**",
  ENS_Helper_11: "Reveal Period lasts 2 days (48 hours).",
  ENS_Helper_12:
    "You will unlock your account, enter the <u>Bid Amount</u>, and the <u>Secret Phrase</u>.",
  ENS_Helper_13:
    "In the event that two parties bid exactly the same amount, the first bid revealed will win.",
  ENS_Helper_14: "4) Finalize the Auction",
  ENS_Helper_15:
    "Once the auction has ended (after 5 days / 120 hours), the winner needs to finalize the auction in order to claim their new name.",
  ENS_Helper_16:
    "The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH.",
  ENS_Helper_17: "More Information",
  ENS_Helper_18:
    "The auction for this registrar is a blind auction, and is described in",
  ENS_Helper_19: "Basically, no one can see *anything* during the auction.",
  ENS_Helper_2: "1) Preparation",
  ENS_Helper_20: "ENS: Read the Docs",
  ENS_Helper_21: "Announcing the Ethereum Name Service Relaunch Date!",
  ENS_Helper_22: "Knowledge Base: ENS",
  ENS_Helper_23: "Debugging a [BAD INSTRUCTION] Reveal",
  ENS_Helper_24:
    "Please try the above before relying on support for reveal issues as we are severely backlogged on support tickets. We're so sorry. :(",
  ENS_Helper_3:
    "Decide which account you wish to own the name & ensure that you have multiple backups of that account.",
  ENS_Helper_4:
    "Decide the maximum amount of ETH you are willing to pay for the name (your <u>Bid Amount</u>). Ensure that the account has enough to cover your bid + 0.01 ETH for gas.",
  ENS_Helper_5: "2) Start an Auction / Place a Bid",
  ENS_Helper_6: "Bidding period lasts 3 days (72 hours).",
  ENS_Helper_7:
    "You will enter the <u>name</u>, <u>Actual Bid Amount</u>, <u>Bid Mask</u>, which is protected by a <u>Secret Phrase</u>.",
  ENS_Helper_8:
    "This places your bid, but this information is kept secret until you reveal it.",
  ENS_Helper_9: "3) Reveal your Bid",
  ENS_Reveal_Title: "Reveal your Bid",
  ENS_Start_Title: "Start an Auction",
  ENS_WrongAddress_1: "The wallet you unlocked does not own the name ",
  ENS_WrongAddress_2: "Please unlock the wallet with address ",

  EOS_01: "**Generate EOS Key-pair**",
  EOS_02: "**Register / Map your EOS Key**",
  EOS_03: "Select `register`",
  EOS_04: "Enter your **EOS Public Key** <--- CAREFUL! EOS PUBLIC KEY!",
  EOS_05: "Fund EOS Contract on Send Page",
  EOS_06: "Go to Send Ether & Tokens Page",
  EOS_07: "Unlock same wallet you are unlocking here.",
  EOS_08:
    "Send Amount you want to Contribute to `0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf`",
  EOS_09: "Claim EOS Tokens",
  EOS_10: "Select `claimAll`.",

  /* Onboarding */
  ONBOARD_welcome_title: "Welcome to MyEtherWallet.com",
  ONBOARD_welcome_content__1:
    "Please take some time to understand this for your own safety. 🙏",
  ONBOARD_welcome_content__2:
    "Your funds will be stolen if you do not heed these warnings.",
  ONBOARD_welcome_content__3:
    "We know this click-through stuff is annoying. We are sorry.",
  ONBOARD_welcome_content__4: "What is MEW? ",
  ONBOARD_welcome_content__5:
    "MyEtherWallet is a free, open-source, client-side interface.",
  ONBOARD_welcome_content__6:
    "We allow you to interact directly with the blockchain while remaining in full control of your keys &amp; your funds.",
  ONBOARD_welcome_content__7:
    "**You** and **only you** are responsible for your security.",
  ONBOARD_welcome_content__8:
    "We cannot recover your funds or freeze your account if you visit a phishing site or lose your private key.",
  ONBOARD_bank_title: "MyEtherWallet is not a Bank",
  ONBOARD_bank_content__1:
    "When you open an account with a bank or exchange, they create an account for you in their system.",
  ONBOARD_bank_content__2:
    "The bank keeps track of your personal information, account passwords, balances, transactions and ultimately your money.",
  ONBOARD_bank_content__3:
    "The bank charge fees to manage your account and provide services, like refunding transactions when your card gets stolen.",
  ONBOARD_bank_content__4:
    "The bank allows you to write a check or charge your debit card to send money, go online to check your balance, reset your password, and get a new debit card if you lose it.",
  ONBOARD_bank_content__5:
    "You have an account *with the bank or exchange* and they decide how much money you can send, where you can send it, and how long to hold on a suspicious deposit. All for a fee.",
  ONBOARD_welcome_title__alt: "Introduction",
  ONBOARD_interface_title: "MyEtherWallet is an Interface",
  ONBOARD_interface_content__1:
    "When you create an account on MyEtherWallet you are generating a cryptographic set of numbers: your private key and your public key (address).",
  ONBOARD_interface_content__2:
    "The handling of your keys happens entirely on your computer, inside your browser.",
  ONBOARD_interface_content__3:
    "We never transmit, receive or store your private key, password, or other account information.",
  ONBOARD_interface_content__4: "We do not charge a transaction fee.",
  ONBOARD_interface_content__5:
    "You are simply using our **interface** to interact **directly with the blockchain**.",
  ONBOARD_interface_content__6:
    "If you send your *public key (address)* to someone, they can send you ETH or tokens. 👍",
  ONBOARD_interface_content__7:
    "If you send your *private key* to someone, they now have full control of your account. 👎",
  ONBOARD_bank_title__alt: "MEW isn't a Bank",
  ONBOARD_blockchain_title__alt: "WTF is a Blockchain?",
  ONBOARD_blockchain_skip: "I already know what a blockchain is...",
  ONBOARD_blockchain_title: "Wait, WTF is a Blockchain?",
  ONBOARD_blockchain_content__1:
    "The blockchain is like a huge, global, decentralized spreadsheet.",
  ONBOARD_blockchain_content__2:
    "It keeps track of who sent how many coins to whom, and what the balance of every account is.",
  ONBOARD_blockchain_content__3:
    "It is stored and maintained by thousands of people (miners) across the globe who have special computers.",
  ONBOARD_blockchain_content__4:
    "The blocks in the blockchain are made up of all the individual transactions sent from MyEtherWallet, MetaMask, Exodus, Mist, Geth, Parity, and everywhere else.",
  ONBOARD_blockchain_content__5:
    "When you see your balance on MyEtherWallet.com or view your transactions on [etherscan.io](https://etherscan.io), you are seeing data on the blockchain, not in our personal systems.",
  ONBOARD_blockchain_content__6: "Again: **we are not a bank**.",
  ONBOARD_interface_title__alt: "MEW is an Interface",
  ONBOARD_why_title__alt: "But...why does this matter?",
  ONBOARD_why_title: "Why are you making me read all this?",
  ONBOARD_why_content__1:
    "Because we need you to understand that we **cannot**...",
  ONBOARD_why_content__2: "Access your account or send your funds for you X.",
  ONBOARD_why_content__3: "Recover or change your private key.",
  ONBOARD_why_content__4: "Recover or reset your password.",
  ONBOARD_why_content__5: "Reverse, cancel, or refund transactions.",
  ONBOARD_why_content__6: "Freeze accounts.",
  ONBOARD_why_content__7:
    "**You** and **only you** are responsible for your security.",
  ONBOARD_why_content__8:
    "Be diligent to keep your private key and password safe. Your private key is sometimes called your mnemonic phrase, keystore file, UTC file, JSON file,  wallet file.",
  ONBOARD_why_content__9:
    "If you lose your private key or password, no one can recover it.",
  ONBOARD_why_content__10:
    "If you enter your private key on a phishing website, you will have **all your funds taken**.",
  ONBOARD_blockchain_title__alt: "WTF is a Blockchain?",
  ONBOARD_point_title__alt: "What's the Point of MEW then?",
  ONBOARD_whymew_title:
    "If MyEtherWallet can't do those things, what's the point?",
  ONBOARD_whymew_content__1:
    "Because that is the point of decentralization and the blockchain.",
  ONBOARD_whymew_content__2:
    "You don't have to rely on your bank, government, or anyone else when you want to move your funds.",
  ONBOARD_whymew_content__3:
    "You don't have to rely on the security of an exchange or bank to keep your funds safe.",
  ONBOARD_whymew_content__4:
    "If you don't find these things valuable, ask yourself why you think the blockchain and cryptocurrencies are valuable. 😉",
  ONBOARD_whymew_content__5:
    "If you don't like the sound of this, consider using [Coinbase](https://www.coinbase.com/) or [Blockchain.info](https://blockchain.info/wallet/#/signup). They have more familiar accounts with usernames & passwords.",
  ONBOARD_whymew_content__6:
    "If you are scared but want to use MEW, [get a hardware wallet](https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html)! These keep your keys secure.",
  ONBOARD_why_title__alt: "But...why?",
  ONBOARD_secure_title: "How To Protect Yourself & Your Funds",
  ONBOARD_secure_1_title: "How To Protect Yourself from Phishers",
  ONBOARD_secure_1_content__1:
    "Phishers send you a message with a link to a website that looks just like MyEtherWallet, EtherDelta, Paypal, or your bank, but is not the real website. They steal your information and then steal your money.",
  ONBOARD_secure_1_content__2:
    "Install [EAL](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn) or [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) or [Cryptonite by Metacert](https://chrome.google.com/webstore/detail/cryptonite-by-metacert/keghdcpemohlojlglbiegihkljkgnige) or the [MyEtherWallet Chrome Extension](https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm) to block malicious websites.",
  ONBOARD_secure_1_content__3:
    "Always check the URL: `https://www.myetherwallet.com`.",
  ONBOARD_secure_1_content__4:
    "Always make sure the URL bar has `MYETHERWALLET INC` in green.",
  ONBOARD_secure_1_content__5:
    "Do not trust messages or links sent to you randomly via email, Slack, Reddit, Twitter, etc.",
  ONBOARD_secure_1_content__6:
    "Always navigate directly to a site before you enter information. Do not enter information after clicking a link from a message or email.",
  ONBOARD_secure_1_content__7:
    "[Install an AdBlocker](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) and do not click ads on your search engine (e.g. Google).",
  ONBOARD_point_title__alt_2: "What's the point?",
  ONBOARD_secure_2_title: "How To Protect Yourself from Scams",
  ONBOARD_secure_2_content__1:
    "People will try to get you to give them money in return for nothing.",
  ONBOARD_secure_2_content__2: "If it is too good to be true, it probably is.",
  ONBOARD_secure_2_content__3:
    "Research before sending money to someone or some project. Look for information on a variety of websites and forums. Be wary.",
  ONBOARD_secure_2_content__4:
    "Ask questions when you don't understand something or it doesn't seem right.",
  ONBOARD_secure_2_content__5:
    'Don\'t let fear, FUD, or FOMO win over common sense. If something is very urgent, ask yourself "why?". It may be to create FOMO or prevent you from doing research.',
  ONBOARD_secure_3_title__alt: "Phuck Phishers",
  ONBOARD_secure_3_title: "How To Protect Yourself from Loss",
  ONBOARD_secure_3_content__1:
    "If you lose your private key or password, it is gone forever. Don't lose it.",
  ONBOARD_secure_3_content__2:
    "Make a backup of your private key and password. Do NOT just store it on your computer. Print it out on a piece of paper or save it to a USB drive.",
  ONBOARD_secure_3_content__3:
    "Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.",
  ONBOARD_secure_3_content__4:
    "Do not store your private key in Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.",
  ONBOARD_secure_3_content__5:
    "If you have more than 1-week's worth of pay worth of cryptocurrency, get a hardware wallet. No excuses. It's worth it. I promise.",
  ONBOARD_secure_3_content__6:
    "[Even more Security Tips!](https://myetherwallet.github.io/knowledge-base/getting-started/protecting-yourself-and-your-funds.html)",
  ONBOARD_secure_2_title__alt_2: "Screw Scams",
  ONBOARD_final_title__alt: "One more click & you're done! 🤘",
  ONBOARD_final_title: "Alright, I'm done lecturing you!",
  ONBOARD_final_subtitle: "Sorry for being like this. Onwards!",
  ONBOARD_final_content__1: "Create a wallet",
  ONBOARD_final_content__2: "Get a hardware wallet",
  ONBOARD_final_content__3: "How to Set up MEW + MetaMask",
  ONBOARD_final_content__4: "How to Run MEW Offline / Locally",
  ONBOARD_final_content__5: "How to Send via Ledger hardware wallet",
  ONBOARD_final_content__6: "How to Send via TREZOR hardware wallet",
  ONBOARD_final_content__7: "How to Send via MetaMask",
  ONBOARD_final_content__8: "Learn More or Contact Us",
  ONBOARD_final_content__9: "OMG, please just let me send FFS.",
  ONBOARD_resume:
    "It looks like you didn't finish reading through these slides last time. ProTip: Finish reading through the slides 😉",

  /* Old */
  ADD_DigitalBitbox_0a: "Re-open MyEtherWallet on a secure (SSL) connection",
  ADD_DigitalBitbox_0b:
    "Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/)",
  ADD_DigitalBitbox_scan: "Connect your Digital Bitbox",
  ADD_Secalot_0a: "Re-open MyEtherWallet on a secure (SSL) connection ",
  ADD_Secalot_0b:
    "Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ",
  ADD_Secalot_scan: "Connect your Secalot ",
  ADD_Label_1: "What would you like to do?",
  ADD_Label_2: "Create a Nickname",
  ADD_Label_3: "Your wallet is encrypted. Good! Please enter the password.",
  ADD_Label_4: "Add an Account to Watch",
  ADD_Label_5: "Enter the Address",
  ADD_Label_6: "Unlock your Wallet",
  ADD_Label_6_short: "Unlock",
  ADD_Label_7: "Add Account",
  ADD_Label_8: "Password (optional):",
  ADD_Ledger_0a:
    "Please use MyEtherWallet on a secure (SSL / HTTPS) connection to connect.",
  ADD_Ledger_0b:
    "Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/)",
  ADD_Ledger_1: "Connect your Ledger Wallet",
  ADD_Ledger_2: "Open the Ethereum application (or a contract application)",
  ADD_Ledger_2_Exp: "Open the Expanse application (or a contract application)",
  ADD_Ledger_2_Ubq: "Open the Ubiq application (or a contract application)",
  ADD_Ledger_3: "Verify that Browser Support is enabled in Settings",
  ADD_Ledger_4:
    "If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager)",
  ADD_Ledger_scan: "Connect to Ledger Wallet",
  ADD_MetaMask: "Connect to MetaMask",
  ADD_Radio_1: "Generate New Wallet",
  ADD_Radio_2: "Select Your Wallet File (Keystore / JSON)",
  ADD_Radio_2_alt: "Select Your Wallet File",
  ADD_Radio_2_short: "SELECT WALLET FILE...",
  ADD_Radio_3: "Paste Your Private Key",
  ADD_Radio_4: "Add an Account to Watch",
  ADD_Radio_5: "Paste Your Mnemonic",
  ADD_Radio_5_Path: "Select HD derivation path",
  ADD_Radio_5_PathAlternative: "(Ledger)",
  ADD_Radio_5_PathCustom: "Custom",
  ADD_Radio_5_PathTrezor: "(TREZOR)",
  ADD_Radio_5_withTrezor: "(Jaxx, Metamask, Exodus, imToken, TREZOR)",
  ADD_Radio_5_woTrezor: "(Jaxx, Metamask, Exodus, imToken)",
  ADD_Trezor_scan: "Connect to TREZOR",
  ADD_Warning_1:
    'You can add any account to "watch" on the wallets tab without uploading a private key. This does ** not ** mean you have access to this wallet, nor can you transfer Ether from it.',

  BULK_Label_1: "Number of Wallets To Generate",
  BULK_Label_2: "Generate Wallets",
  BULK_SuccessMsg: "Success! Your wallets have been generated.",

  CONTRACT_ByteCode: "Byte Code",
  CONTRACT_Interact_CTA: "Select a function",
  CONTRACT_Interact_Title: "Read / Write Contract",
  CONTRACT_Json: "ABI / JSON Interface",
  CONTRACT_Read: "READ",
  CONTRACT_Title: "Contract Address",
  CONTRACT_Title_2: "Select Existing Contract",
  CONTRACT_Write: "WRITE",

  CX_error_1:
    'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one!',
  CX_quicksend: "QuickSend", // if no appropriate translation, just use "Send"
  CX_Tagline:
    "Open Source JavaScript Client-Side Ether Wallet Chrome Extension",
  CX_Warning_1:
    "Make sure you have **external backups** of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, **not** a way to back them up.",

  decrypt_Access: "How would you like to access your wallet?",
  decrypt_Select: "Select a Wallet",
  decrypt_Title: "Select the format of your private key",

  DEP_generate: "Generate Bytecode",
  DEP_generated: "Generated Bytecode",
  DEP_interface: "Generated Interface",
  DEP_signtx: "Sign Transaction",

  ERROR_0: "(error_01) Please enter a valid amount.",
  ERROR_1:
    "(error_02) Your password must be at least 9 characters. Please ensure it is a strong password.",
  ERROR_2: "(error_03) Sorry! We don't recognize this type of wallet file.",
  ERROR_3: "(error_04) This is not a valid wallet file.",
  ERROR_4:
    "(error_05) This unit doesn't exists, please use the one of the following units",
  ERROR_5: "(error_06) Please enter a valid address.",
  ERROR_6: "(error_07) Please enter a valid password.",
  ERROR_7:
    "(error_08) Please enter valid decimals     (Must be an integer. Try 0-18.)",
  ERROR_8:
    "(error_09) Please enter a valid gas limit  (Must be an integer. Try 21000-4000000.)",
  ERROR_9: "(error_10) Please enter a valid data value (Must be hex.)",
  ERROR_10:
    "(error_11) Please enter a valid gas price. (Must be an integer. Try 20 GWEI / 20000000000 WEI.)",
  ERROR_11: "(error_12) Please enter a valid nonce (Must be an integer.)",
  ERROR_12: "(error_13) Invalid signed transaction.",
  ERROR_13: "(error_14) A wallet with this nickname already exists.",
  ERROR_14: "(error_15) Wallet not found.",
  ERROR_15:
    "(error_16) Whoops. It doesn't look like a proposal with this ID exists yet or there is an error reading this proposal.",
  ERROR_16:
    "(error_17) A wallet with this address already exists in storage. Please check your wallets page.",
  ERROR_17:
    '(error_18) Insufficient balance. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)',
  ERROR_18:
    "(error_19) All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.",
  ERROR_19: "(error_20) Please enter a valid symbol",
  ERROR_20: "(error_21) Not a valid ERC-20 token",
  ERROR_21:
    "(error_22) Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.",
  ERROR_22: "(error_23) Please enter a valid node name",
  ERROR_23:
    "(error_24) Please enter a valid URL. If you are on https, your URL must be https",
  ERROR_24: "(error_25) Please enter a valid port.",
  ERROR_25: "(error_26) Please enter a valid chain ID.",
  ERROR_26: "(error_27) Please enter a valid ABI.",
  ERROR_27: "(error_28) Minimum amount: 0.01. Max amount:",
  ERROR_28:
    "(error_29) You need this `Keystore File + Password` or the `Private Key` (next page) to access this wallet in the future. ",
  ERROR_29: "(error_30) Please enter a valid user and password.",
  ERROR_30:
    "(error_31) Please enter a valid name (7+ characters, limited punctuation)",
  ERROR_31: "(error_32) Please enter a valid secret phrase.",
  ERROR_32:
    "(error_33) Could not connect to the node. Refresh your page, try a different node (top-right corner), check your firewall settings. If custom node, check your configs.",
  ERROR_33:
    "(error_34) The wallet you have unlocked does not match the owner's address.",
  ERROR_34:
    "(error_35) The name you are attempting to reveal does not match the name you have entered.",
  ERROR_35:
    '(error_36) Input address is not checksummed. <a href="https://myetherwallet.github.io/knowledge-base/addresses/not-checksummed-shows-when-i-enter-an-address.html" target="_blank" rel="noopener noreferrer">What does that mean?</a>',
  ERROR_36: "(error_37) Please enter a valid TX hash",
  ERROR_37:
    "(error_38) Please enter valid hex string. Hex only contains: 0x, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, a, b, c, d, e, f",
  ERROR_38:
    "(error_39) Offer must have either price or reserve set to more than 0",
  ERROR_39: "(error_40) Bid must be more than the specified minimum",
  ERROR_40: "(error_41) Please enter a valid private key",

  GETH_Balance:
    '(geth-01) Insufficient balance. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)',
  GETH_Cheap:
    "(geth-02) Gas price too low for acceptance. Try raising the gas price to 21 GWEI via the dropdown in top-right.",
  GETH_GasLimit:
    "(geth-03) Exceeds block gas limit. Transaction cost exceeds current gas limit. Limit: (d+), got: (d+). Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again. [Learn More](https://myetherwallet.github.io/knowledge-base/gas/what-is-gas-ethereum.html)",
  GETH_InsufficientFunds:
    '(geth-04) Insufficient balance. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)',
  GETH_IntrinsicGas:
    "(geth-05) Intrinsic gas too low. Try raising the gas price to 21 GWEI via the dropdown in top-right or the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again.",
  GETH_InvalidSender: "(geth-06) Invalid sender.",
  GETH_NegativeValue: "(geth-07) Negative value.",
  GETH_Nonce:
    "(geth-08) This TX's [nonce](https://myetherwallet.github.io/knowledge-base/transactions/what-is-nonce.html) is too low. Try incrementing the nonce by pressing the Generate button again, or [replace the pending transaction](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html).",
  GETH_NonExistentAccount:
    "(geth-09) Account does not exist or account balance too low",

  PARITY_AlreadyImported:
    "(parity-01) A transaction with the same hash was already imported. It was probably already broadcast. To avoid duplicate transactions, check your address on [etherscan.io](https://etherscan.io) & wait 10 minutes before attempting to send again. [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)",
  PARITY_GasLimitExceeded:
    "(parity-02) Transaction cost exceeds current gas limit. Limit: (d+), got: (d+). Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again. [Learn More](https://myetherwallet.github.io/knowledge-base/gas/what-is-gas-ethereum.html)",
  PARITY_InsufficientBalance:
    "(parity-03) Insufficient balance. The account you tried to send transaction from does not have enough funds. If you believe this is in error, try using the 'Send Entire Balance' button, or pressing generate again. Required (d+) and got: (d+). [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)",
  PARITY_InsufficientGasPrice:
    "(parity-04) There is another transaction with same nonce in the queue, or the transaction fee is too low. Try incrementing the nonce by clicking the Generate button again. [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)",
  PARITY_InvalidGasLimit:
    "(parity-05) Supplied gas limit is beyond limit. Try lowering the gas limit to 21000. [Learn More.](https://myetherwallet.github.io/knowledge-base/gas/what-is-gas-ethereum.html)",
  PARITY_LimitReached:
    "(parity-06) There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the gas price. [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)",
  PARITY_Old:
    "(parity-07) There is already a transaction with this [nonce](https://myetherwallet.github.io/knowledge-base/transactions/what-is-nonce.html). Try incrementing the nonce by pressing the Generate button again, or [replace the pending transaction](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html).",
  PARITY_TooCheapToReplace:
    "(parity-08) TX Fee is too low. It does not satisfy your node's minimal fee (minimal: (d+), got: (d+)). Try increasing the gas price and/or gas limit. [Learn More.](https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html)",

  FOOTER_1:
    "Free, open-source, client-side interface for generating Ethereum wallets &amp; more. Interact with the Ethereum blockchain easily &amp; securely. Double-check the URL ( myetherwallet.com ) before unlocking your wallet.",
  FOOTER_1b: "Created by",
  FOOTER_2: "Donations greatly appreciated",
  FOOTER_3: "Client-side wallet generation by",
  FOOTER_4: "Disclaimer",

  GAS_LIMIT_Desc:
    "Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.",
  GAS_PRICE_Desc:
    "Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `41 GWEI`.",

  GEN_desc: "If you want to generate multiple wallets, you can do so here",
  GEN_Help_1: "Use your",
  GEN_Help_10: "Right click & save file as. Filename:",
  GEN_Help_11: "Don't open this file on your computer",
  GEN_Help_12:
    "Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.)",
  GEN_Help_13: "How to Back Up Your Keystore File",
  GEN_Help_14: "What are these Different Formats?",
  GEN_Help_15: "Preventing loss &amp; theft of your funds.",
  GEN_Help_16: "What are these Different Formats?",
  GEN_Help_17: "Why Should I?",
  GEN_Help_18: "To have a secondary backup.",
  GEN_Help_19: "In case you ever forget your password.",
  GEN_Help_2: "to access your account.",
  GEN_Help_20: "Cold Storage",
  GEN_Help_3: "Your device * is * your wallet.",
  GEN_Help_4: "Guides & FAQ",
  GEN_Help_5: "How to Create a Wallet",
  GEN_Help_6: "Getting Started",
  GEN_Help_7:
    "Keep it safe · Make a backup · Don't share it with anyone · Don't lose it · It cannot be recovered if you lose it.",
  GEN_Help_8: "Not Downloading a File?",
  GEN_Help_9: "Try using Google Chrome",
  GEN_Label_1: "Enter a password",
  GEN_Label_2: "Save your `Keystore` File.",
  GEN_Label_3: "Save Your Address.",
  GEN_Label_4: "Print paper wallet or a QR code.",
  GEN_Label_5: "Save Your `Private Key`.",
  GEN_Placeholder_1: "Do NOT forget to save this!",
  GEN_SuccessMsg: "Success! Your wallet has been generated.",
  GEN_Unlock: "Unlock your wallet to see your address",
  GET_ConfButton: "I understand. Continue.",

  MEW_Tagline: "Open Source JavaScript Client-Side Ether Wallet",
  MEW_Warning_1:
    "Always check the URL before accessing your wallet or creating a new wallet. Beware of phishing sites!",

  MNEM_1: "Please select the address you would like to interact with.",
  MNEM_2:
    "Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time.",
  MNEM_more: "More Addresses",
  MNEM_prev: "Previous Addresses",

  MSG_date: "Date",
  MSG_info1:
    "Include the current date so the signature cannot be reused on a different date.",
  MSG_info2:
    "Include your nickname and where you use the nickname so someone else cannot use it.",
  MSG_info3:
    "Include a specific reason for the message so it cannot be reused for a different purpose.",
  MSG_message: "Message",
  MSG_signature: "Signature",
  MSG_verify: "Verify Message",

  MYWAL_Address: "Wallet Address",
  MYWAL_Bal: "Balance",
  MYWAL_Content_1: "Warning! You are about to remove your wallet",
  MYWAL_Content_2:
    "Be sure you have **saved the private key and/or Keystore File and the password** before you remove it.",
  MYWAL_Content_3:
    "If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add it using the private key/JSON and password.",
  MYWAL_Edit: "Edit",
  MYWAL_Edit_2: "Edit Wallet",
  MYWAL_Hide: "Hide Wallet Info",
  MYWAL_Name: "Wallet Name",
  MYWAL_Nick: "Wallet Nickname",
  MYWAL_Remove: "Remove",
  MYWAL_RemoveWal: "Remove Wallet",
  MYWAL_View: "View",
  MYWAL_Viewing: "Viewing Wallet",
  MYWAL_WatchOnly: "Your Watch-Only Accounts",

  NAV_AddWallet: "Add Wallet",
  NAV_BulkGenerate: "Bulk Generate",
  NAV_CheckTxStatus: "Check TX Status",
  NAV_Contact: "Contact",
  NAV_Contracts: "Contracts",
  NAV_DeployContract: "Deploy Contract",
  NAV_DomainSale: "DomainSale",
  NAV_ENS: "ENS",
  NAV_GenerateWallet: "Create New Wallet",
  NAV_GenerateWallet_alt: "New Wallet",
  NAV_Help: "Help",
  NAV_InteractContract: "Interact with Contract",
  NAV_Multisig: "Multisig",
  NAV_MyWallets: "My Wallets",
  NAV_Offline: "Send Offline",
  NAV_SendEther: "Send MainCoin (MNC) & Tokens",
  NAV_SendTokens: "Send Tokens",
  NAV_SignMsg: "Sign Message",
  NAV_Swap: "Swap",
  NAV_TxStatus: "TX Status",
  NAV_ViewWallet: "View Wallet Info",
  NAV_YourWallets: "Your Wallets",

  NODE_CTA: "Save & Use Custom Node",
  NODE_Name: "Node Name",
  NODE_Port: "Node Port",
  NODE_Subtitle: "To connect to a local node...",
  NODE_Title: "Set Up Your Custom Node",
  NODE_Warning:
    "Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)",

  NONCE_Desc:
    "The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.",

  OFFLINE_Desc:
    "Generating offline transactions can be done in three steps. You will complete steps 1 and 3 on an online computer, and step 2 on an offline/airgapped computer. This ensures your private keys do not touch an internet-connected device.",
  OFFLINE_Step1_Button: "Generate Information",
  OFFLINE_Step1_Label_1: "From Address",
  OFFLINE_Step1_Label_2:
    "Note: This is the FROM address, not the TO address. Nonce is generated from the originating account. If using an airgapped computer, it would be the address of the cold-storage account.",
  OFFLINE_Step2_Label_1: "To Address",
  OFFLINE_Step2_Label_2: "Value / Amount to Send",
  OFFLINE_Step2_Label_3: "Gas Price",
  OFFLINE_Step2_Label_3b:
    "This was displayed in Step 1 on your online computer.",
  OFFLINE_Step2_Label_4: "Gas Limit",
  OFFLINE_Step2_Label_4b:
    "21000 is the default gas limit. When you send contracts or add'l data, this may need to be different. Any unused gas will be returned to you.",
  OFFLINE_Step2_Label_5: "Nonce",
  OFFLINE_Step2_Label_5b:
    "This was displayed in Step 1 on your online computer.",
  OFFLINE_Step2_Label_6: "Data",
  OFFLINE_Step2_Label_6b:
    "This is optional. Data is often used when you send transactions to contracts.",
  OFFLINE_Step2_Label_7: "Enter / Select your Private Key / JSON.",
  OFFLINE_Step2_Title: "Step 2: Generate Transaction (Offline Computer)",
  OFFLINE_Step3_Label_1:
    'Paste the signed transaction from Step 2 here and press the "SEND TRANSACTION" button.',
  OFFLINE_Step3_Title: "Step 3: Send / Publish Transaction (Online Computer)",
  OFFLINE_Title: "Generate & Send Offline Transaction",
  OFFLLINE_Step1_Title: "Step 1: Generate Information (Online Computer)",

  SEND_addr: "To Address",
  SEND_amount: "Amount to Send",
  SEND_amount_short: "Amount",
  SEND_custom: "Add Custom Token",
  SEND_gas: "Gas",
  SEND_generate: "Generate Transaction",
  SEND_raw: "Raw Transaction",
  SEND_signed: "Signed Transaction",
  SEND_trans: "Send Transaction",
  SEND_TransferTotal: "Send Entire Balance",
  SENDModal_Content_1: "You are about to send",
  SENDModal_Content_2: "to address",
  SENDModal_Content_3: "Are you sure you want to do this?",
  SENDModal_Content_4:
    "NOTE: If you encounter an error, you most likely need to add ether to your account to cover the gas cost of sending tokens. Gas is paid in ether.",
  SENDModal_No: "No, get me out of here!",
  SENDModal_Title: "Warning!",
  SENDModal_Yes: "Yes, I am sure! Make transaction.",

  sidebar_AccountUpdateBalances: "Update",
  sidebar_AccountAddr: "Account Address",
  sidebar_AccountBal: "Account Balance",
  sidebar_AccountInfo: "Account Information",
  sidebar_DisplayOnLedger: "Display address on Ledger",
  sidebar_DisplayOnTrezor: "Display address on TREZOR",
  sidebar_donate: "Donate",
  sidebar_donation:
    "MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us?",
  sidebar_Equiv: "Equivalent Values",
  sidebar_thanks: "THANK YOU!!!",
  sidebar_TokenBal: "Token Balances",
  sidebar_TransHistory: "Transaction History",

  SUCCESS_1: "Valid address",
  SUCCESS_2: "Wallet successfully decrypted",
  SUCCESS_3:
    "Your TX has been broadcast to the network. This does not mean it has been mined & sent. During times of extreme volume, it may take 3+ hours to send. 1) Check your TX below. 2) If it is pending for hours or disappears, use the Check TX Status Page to replace. 3) Use [ETH Gas Station](https://ethgasstation.info/) to see what gas price is optimal. 4) Save your TX Hash in case you need it later:  ",
  SUCCESS_4: "Your wallet was successfully added",
  SUCCESS_5: "File Selected",
  SUCCESS_6: "You are successfully connected",
  SUCCESS_7: "Message Signature Verified",

  SWAP_elapsed: "Time elapsed since sent ",
  SWAP_information: "Your Information ",
  SWAP_init_1: "I want to swap my ",
  SWAP_init_2: " for ", // "I want to swap my X ETH for X BTC"
  SWAP_init_CTA: "Let's do this! ", // or "Continue"
  SWAP_order_CTA: "Please send ", // Please send 1 ETH...
  SWAP_progress_1: "Order Initiated ",
  SWAP_progress_2: "Waiting for your ", // Waiting for your BTC...
  SWAP_progress_3: "Received! ", // ETH Received!
  SWAP_progress_4: "Sending your {{orderResult.output.currency}} ",
  SWAP_progress_5: "Order Complete ",
  SWAP_rates: "Current Rates ",
  SWAP_rec_add: "Your Receiving Address ",
  SWAP_rec_amt: "Amount to receive ",
  SWAP_ref_num: "Your reference number ",
  SWAP_send_amt: "Amount to send ",
  SWAP_start_CTA: "Start Swap ",
  SWAP_time: "Time remaining to send ",
  SWAP_unlock:
    "Unlock your wallet to send ETH or Tokens directly from this page. ",
  SWAP_your_rate: "Your rate ",

  TOKEN_Addr: "Token Contract Address",
  TOKEN_Dec: "Decimals",
  TOKEN_hide: "Hide Tokens",
  TOKEN_show: "Show All Tokens",
  TOKEN_Symbol: "Token Symbol",

  TRANS_advanced: "+Advanced: Add Data",
  TRANS_data: "Data",
  TRANS_desc:
    'If you want to send Tokens, please use the "Send Token" page instead.',
  TRANS_gas: "Gas Limit",
  TRANS_sendInfo:
    "A standard transaction using 21000 gas will cost 0.000441 ETH. We do not take a transaction fee.",

  translate_version: "0.5",
  Translator_Desc: "",
  TranslatorAddr_1: "",
  TranslatorAddr_2: "",
  TranslatorAddr_3: "",
  TranslatorAddr_4: "",
  TranslatorAddr_5: "",
  TranslatorName_1: "",
  TranslatorName_2: "",
  TranslatorName_3: "",
  TranslatorName_4: "",
  TranslatorName_5: "",

  tx_Details: "Transaction Details",
  tx_foundInPending: "Pending Transaction Found",
  tx_foundInPending_1:
    "Your transaction was located in the TX Pool of the node you are connected to.",
  tx_foundInPending_2: "It is currently pending (waiting to be mined).",
  tx_foundInPending_3:
    'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
  tx_FoundOnChain: "Transaction Found",
  tx_FoundOnChain_1:
    "Your transaction was successfully mined and is on the blockchain.",
  tx_FoundOnChain_2:
    '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
  tx_FoundOnChain_3:
    "**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.github.io/knowledge-base/diving-deeper/ethereum-list-of-support-and-communities.html). Send them the *link* to your transaction and ask them, nicely, to look into your situation.",
  tx_notFound: "Transaction Not Found",
  tx_notFound_1:
    "This TX cannot be found in the TX Pool of the node you are connected to.",
  tx_notFound_2:
    'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again.',
  tx_notFound_3:
    "It could still be in the TX Pool of a different node, waiting to be mined.",
  tx_notFound_4:
    "Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.",
  tx_Summary:
    'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html)**',

  TXFEE_Desc:
    "The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)",
  REC_WAY: "This is a recommended way to view your balance.",

  VIEWWALLET_HidePrivKey: "(hide)",
  VIEWWALLET_ShowPrivKey: "(show)",
  VIEWWALLET_Subtitle:
    "This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like [etherscan.io](https://etherscan.io/).",
  VIEWWALLET_Subtitle_Short:
    "This allows you to download different versions of private keys and re-print your paper wallet.",
  VIEWWALLET_SuccessMsg: "Success! Here are your wallet details.",

  WARN_Send_Link:
    "You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started.",

  x_Access: "Access",
  x_AddessDesc:
    "Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere.",
  x_Address: "Your Address",
  x_Cancel: "Cancel",
  x_CancelReplaceTx: "Cancel or Replace Transaction",
  x_CancelTx: "Cancel Transaction",
  x_CSV: "CSV file (unencrypted)",
  x_DigitalBitbox: "Digital Bitbox",
  x_Secalot: "Secalot ",
  x_Download: "Download",
  x_Json: "JSON File (unencrypted)",
  x_JsonDesc:
    "This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.",
  x_Keystore: "Keystore File (UTC / JSON · Recommended · Encrypted)",
  x_Keystore2: "Keystore File (UTC / JSON)",
  x_KeystoreDesc:
    "This Keystore file matches the format used by Mist so you can easily import it in the future. It is the recommended file to download and back up.",
  x_Ledger: "Ledger Wallet",
  x_MetaMask: "MetaMask / Mist",
  x_Mnemonic: "Mnemonic Phrase",
  x_ParityPhrase: "Parity Phrase",
  x_Password: "Password",
  x_PasswordDesc:
    "This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**",
  x_Print: "Print Paper Wallet",
  x_PrintDesc:
    'ProTip: If you cannot print this right now, click "Print" and save it as a PDF until you are able to get it printed. Remove it from your computer afterwards!',
  x_PrintShort: "Print",
  x_PrivKey: "Private Key (unencrypted)",
  x_PrivKey2: "Private Key",
  x_PrivKeyDesc:
    "This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended.",
  x_ReadMore: "Read More",
  x_ReplaceTx: "Replace Transaction",
  x_Save: "Save",
  x_TransHash: "Transaction Hash",
  x_Trezor: "TREZOR",
  x_TXFee: "TX Fee",
  x_TxHash: "TX Hash",
  x_TXT: "TXT file (unencrypted)",
  x_Wallet: "Wallet",

  HELP_0_Desc_1:
    "MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**.",
  HELP_0_Desc_2: "Create a new wallet.",
  HELP_0_Desc_3: "Back the wallet up.",
  HELP_0_Desc_4:
    "Verify you have access to this new wallet and have correctly saved all necessary information.",
  HELP_0_Desc_5: "Transfer Ether to this new wallet.",
  HELP_0_Title: "0) I'm new. What do I do?",
  HELP_10_Desc_1:
    'Navigate to the "Offline Transaction" page via your online computer.',
  HELP_10_Desc_10:
    "The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer.",
  HELP_10_Desc_11:
    "On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction.",
  HELP_10_Desc_2:
    'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.',
  HELP_10_Desc_3:
    'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send.',
  HELP_10_Desc_4:
    'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1.',
  HELP_10_Desc_5:
    'Enter the "NONCE" as it was displayed to you on your online computer in step #1.',
  HELP_10_Desc_6:
    'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.',
  HELP_10_Desc_7:
    "If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.",
  HELP_10_Desc_8:
    "Select your wallet file -or- your private key and unlock your wallet.",
  HELP_10_Desc_9: 'Press the "GENERATE SIGNED TRANSACTION" button.',
  HELP_10_Title: "10) How do I make an offline transaction?",
  HELP_12_Desc_1: "Using an Geth/Mist JSON file from MyEtherWallet v2+....",
  HELP_12_Desc_10: 'Your account should show up immediately under "Accounts."',
  HELP_12_Desc_11: "Using your unencrypted private key...",
  HELP_12_Desc_12:
    'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page.',
  HELP_12_Desc_13:
    "Select your wallet file -or- enter/paste your private key to unlock your wallet.",
  HELP_12_Desc_14: "Copy Your Private Key (unencrypted).",
  HELP_12_Desc_15: "If you are on a Mac",
  HELP_12_Desc_15b: "If you are on a PC",
  HELP_12_Desc_16: "Open Text Edit and paste this private key.",
  HELP_12_Desc_17:
    'Go to the menu bar and click "Format" -> "Make Plain Text".',
  HELP_12_Desc_18:
    'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog.',
  HELP_12_Desc_19:
    "Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt`",
  HELP_12_Desc_2: 'Go to the "View Wallet Info" page.',
  HELP_12_Desc_20:
    "This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it.",
  HELP_12_Desc_21:
    "After successful import, delete `nothing_special_delete_me.txt`",
  HELP_12_Desc_22:
    'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts".',
  HELP_12_Desc_23: "Open Notepad & paste the private key",
  HELP_12_Desc_24: "Save the file as `nothing_special_delete_me.txt` at `C:`",
  HELP_12_Desc_25:
    "Run the command, `geth account import C:\\nothing_special_delete_me.txt`",
  HELP_12_Desc_26:
    "This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it.",
  HELP_12_Desc_27:
    "After successful import, delete `nothing_special_delete_me.txt`",
  HELP_12_Desc_28:
    'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts".',
  HELP_12_Desc_3:
    "Unlock your wallet using your **encrypted** private key or JSON file.",
  HELP_12_Desc_4: 'Go to the "My Wallets" page.',
  HELP_12_Desc_5:
    'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet.',
  HELP_12_Desc_6:
    'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file.',
  HELP_12_Desc_7: "Open the Ethereum Wallet application.",
  HELP_12_Desc_8: 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts"',
  HELP_12_Desc_9:
    "This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder.",
  HELP_12_Title:
    "12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist?",
  HELP_13_Desc_1:
    "This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction.",
  HELP_13_Title:
    '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean?',
  HELP_14_Desc_1:
    "While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).",
  HELP_14_Title:
    "14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe?",
  HELP_15_Desc_1:
    "Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it.",
  HELP_15_Title:
    "15) Why hasn't the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan)",
  HELP_16_Desc_1:
    "You can use a blockchain explorer like [etherscan.io](https://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here's what our [donation account](https://etherscan.io/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D) looks like on etherscan.io",
  HELP_16_Title: "16) How do I check the balance of my account?",
  HELP_17_Desc_1:
    "This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io",
  HELP_17_Title: "17) Why isn't my balance showing up when I unlock my wallet?",
  HELP_18_Title: "18) Where is my geth wallet file?",
  HELP_19_Desc_1:
    'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored.',
  HELP_19_Title: "19) Where is my Mist wallet file?",
  HELP_1_Desc_1: 'Go to the "Generate Wallet" page.',
  HELP_1_Desc_2: 'Go to the "Add Wallet" page & select "Generate New Wallet"',
  HELP_1_Desc_3:
    "Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions.",
  HELP_1_Desc_4: 'Click "GENERATE".',
  HELP_1_Desc_5: "Your wallet has now been generated.",
  HELP_1_Title: "1) How do I create a new wallet?",
  HELP_20_Desc_1:
    'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale.',
  HELP_20_Title: "20) Where is my pre-sale wallet file?",
  HELP_21_Desc_1:
    "Short version: yes, but finding an account with a balance would take longer than the universe...so...no.",
  HELP_21_Desc_2:
    "Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts.",
  HELP_21_Desc_3:
    "In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems.",
  HELP_21_Desc_4:
    "Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password.",
  HELP_21_Desc_5:
    'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match.',
  HELP_21_Desc_6:
    "If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion.",
  HELP_21_Desc_7:
    "[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.",
  HELP_21_Desc_8:
    "Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that's a separate issue that can wait for another day.",
  HELP_21_Title:
    "21) Couldn't everybody put in random private keys, look for a balance, and send to their own address?",
  HELP_2a_Desc_1:
    "You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper.",
  HELP_2a_Desc_2:
    "Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you.",
  HELP_2a_Desc_3:
    "Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys",
  HELP_2a_Desc_4:
    "Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive.",
  HELP_2a_Desc_5:
    "Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive.",
  HELP_2a_Desc_6:
    "Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).",
  HELP_2a_Title: "How do I save/backup my wallet?",
  HELP_2b_Desc_1:
    "Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).",
  HELP_2b_Desc_2: "Click on `etherwallet-vX.X.X.X.zip`.",
  HELP_2b_Desc_3: "Move zip to an airgapped computer.",
  HELP_2b_Desc_4: "Unzip it and double-click `index.html`.",
  HELP_2b_Desc_5: "Generate a wallet with a strong password.",
  HELP_2b_Desc_6:
    "Save the address. Save versions of the private key. Save the password if you might not remember it forever.",
  HELP_2b_Desc_7:
    "Store these papers / USBs in multiple physically separate locations.",
  HELP_2b_Desc_8:
    'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same.',
  HELP_2b_Title:
    "2b) How do I safely / offline / cold storage with MyEtherWallet?",
  HELP_3_Desc_1:
    "**Before you send any Ether to your new wallet**, you should ensure you have access to it.",
  HELP_3_Desc_2: 'Navigate to the "View Wallet Info" page.',
  HELP_3_Desc_3: 'Navigate to the MyEtherWallet.com "View Wallet Info" page.',
  HELP_3_Desc_4:
    "Select your wallet file -or- your private key and unlock your wallet.",
  HELP_3_Desc_5:
    "If the wallet is encrypted, a text box will automatically appear. Enter the password.",
  HELP_3_Desc_6: 'Click the "Unlock Wallet" button.',
  HELP_3_Desc_7:
    "Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet.",
  HELP_3_Desc_8:
    "If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly.",
  HELP_3_Title: "3) How do I verify I have access to my new wallet?",
  HELP_4_Desc_1:
    "If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned.",
  HELP_4_Desc_10:
    "A couple more fields will appear. This is your browser generating the transaction.",
  HELP_4_Desc_11: 'Click the blue "Send Transaction" button below that.',
  HELP_4_Desc_12:
    'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.',
  HELP_4_Desc_13:
    "The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.",
  HELP_4_Desc_2: 'Navigate to the "Send Ether & Tokens" page.',
  HELP_4_Desc_3:
    "Select your wallet file -or- your private key and unlock your wallet.",
  HELP_4_Desc_4:
    "If the wallet is encrypted, a text box will automatically appear. Enter the password.",
  HELP_4_Desc_5: 'Click the "Unlock Wallet" button.',
  HELP_4_Desc_6:
    'Enter the address you would like to send to in the "To Address:" field.',
  HELP_4_Desc_7:
    'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance.',
  HELP_4_Desc_9: 'Click "Generate Transaction".',
  HELP_4_Title: "4) How do I send Ether from one wallet to another?",
  HELP_4CX_Desc_1:
    'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send Ether & Tokens" page.',
  HELP_4CX_Desc_10: "Enter the password for that wallet.",
  HELP_4CX_Desc_11: 'Click "Send Transaction."',
  HELP_4CX_Desc_12: 'Using "Send Ether & Tokens" Page',
  HELP_4CX_Desc_2: "QuickSend",
  HELP_4CX_Desc_3: "Click the Chrome Extension Icon.",
  HELP_4CX_Desc_4: 'Click the "QuickSend" button.',
  HELP_4CX_Desc_5: "Select the wallet you wish to send from.",
  HELP_4CX_Desc_6:
    'Enter the address you would like to send to in the "To Address:" field.',
  HELP_4CX_Desc_7:
    'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance.',
  HELP_4CX_Desc_8: 'Click "Send Transaction".',
  HELP_4CX_Desc_9:
    "Verify the address and the amount you are sending is correct.",
  HELP_4CX_Title: "4) How do I send Ether using MyEtherWallet CX?",
  HELP_5_Desc_1:
    'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page.',
  HELP_5_Desc_7: "MyEtherWallet.com is now running entirely on your computer.",
  HELP_5_Desc_8:
    "In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don't touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.",
  HELP_5_Desc_9:
    "As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo.",
  HELP_5_Title: "5) How do I run MyEtherWallet.com offline/locally?",
  HELP_5CX_Desc_2: "Click on `chrome-extension-vX.X.X.X.zip` and unzip it.",
  HELP_5CX_Desc_3:
    "Go to Google Chrome and find you settings (in the menu in the upper right).",
  HELP_5CX_Desc_4: 'Click "Extensions" on the left.',
  HELP_5CX_Desc_5: 'Check the "Developer Mode" button at the top of that page.',
  HELP_5CX_Desc_6: 'Click the "Load unpacked extension..." button.',
  HELP_5CX_Desc_7:
    'Navigate to the now-unzipped folder that you downloaded earlier. Click "select".',
  HELP_5CX_Desc_8:
    "The extension should now show up in your extensions and in your Chrome Extension bar.",
  HELP_5CX_Title:
    "5) How can I install this extension from the repo instead of the Chrome Store?",
  HELP_7_Desc_0:
    "[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token.",
  HELP_7_Desc_1: 'Navigate to the "Send Ether & Tokens" page.',
  HELP_7_Desc_10:
    "You can now send that token as well as see it's balance in the sidebar.",
  HELP_7_Desc_11: 'Click "Generate Transaction".',
  HELP_7_Desc_12:
    "A couple more fields will appear. This is your browser generating the transaction.",
  HELP_7_Desc_13: 'Click the blue "Send Transaction" button below that.',
  HELP_7_Desc_14:
    'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.',
  HELP_7_Desc_15:
    "The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.",
  HELP_7_Desc_2: "Unlock your wallet.",
  HELP_7_Desc_3:
    'Enter the address you would like to send to in the "To Address:" field.',
  HELP_7_Desc_4: "Enter the amount you would like to send.",
  HELP_7_Desc_5: "Select which token you would like to send.",
  HELP_7_Desc_6: "If you do not see the token listed",
  HELP_7_Desc_7: 'Click "Custom".',
  HELP_7_Desc_8:
    'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist.',
  HELP_7_Desc_9: 'Click "Save".',
  HELP_7_Title: "7) How do I send tokens & add custom tokens?",
  HELP_8_Desc_1:
    "MyEtherWallet is not a web wallet. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain.",
  HELP_8_Desc_2:
    "If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn't have to \"get\" your Ether out of MyEtherWallet because it's not in MyEtherWallet. It's in whatever wallet your generated via our site.",
  HELP_8_Desc_3:
    "You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below.",
  HELP_8_Desc_4:
    "In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren't storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally.",
  HELP_8_Title: "8) What happens if your site goes down?",
  HELP_8CX_Desc_1:
    "First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it's all saved on your own computer.",
  HELP_8CX_Desc_2:
    "That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets.",
  HELP_8CX_Desc_3:
    "If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above.",
  HELP_8CX_Title: "8) What happens if MyEtherWallet CX disappears?",
  HELP_9_Desc_1:
    'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times.',
  HELP_9_Title: '9) Is the "Send Ether & Tokens" page offline?',
  HELP_Contact_Title: "Ways to Get in Touch",
  HELP_Desc:
    "Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future!",
  HELP_FAQ_Title: "More Helpful Answers to Frequent Questions",
  HELP_Remind_Desc_1:
    "**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**.",
  HELP_Remind_Desc_2:
    'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain.',
  HELP_Remind_Desc_3:
    "If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer!",
  HELP_Remind_Title: "Some reminders",
  HELP_Sec_Desc_1:
    'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears.',
  HELP_Sec_Desc_2:
    'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success.',
  HELP_Sec_Desc_3:
    'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere.',
  HELP_Sec_Desc_4:
    "Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com).",
  HELP_Sec_Desc_5:
    "For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above.",
  HELP_Sec_Desc_6:
    'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.',
  HELP_Sec_Desc_8:
    "If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks!",
  HELP_Sec_Title: "Security",
  HELP_SecCX_Desc_1: "Where is this extension saving my information?",
  HELP_SecCX_Desc_2:
    "The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome.",
  HELP_SecCX_Desc_3: "What information is saved?",
  HELP_SecCX_Desc_4:
    "The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted.",
  HELP_SecCX_Desc_5: "Why aren't the nickname and wallet address encrypted?",
  HELP_SecCX_Desc_6:
    "If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension.",
  HELP_SecCX_Title: "Security - MyEtherWallet CX",
  HELP_Warning:
    "If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details.",

  PHISHING_Warning_1: "This address has been flagged: ",
  PHISHING_Warning_2:
    "This address has been flagged in our Phishing list. Please make sure you are sending to the right address",
  APPLE_Mob_Notice_Head: "It seems like you're using an IPhone or an IPad.",
  APPLE_Mob_Notice_Body_1:
    "Just letting you know that generating wallets isn't supported in these devices because of Apple's storage restrictions.",
  APPLE_Mob_Notice_Body_2:
    "Please use the actual website on a laptop or computer.",
  APPLE_Mob_Notice_Understand: "I understand."
};

module.exports = en;
