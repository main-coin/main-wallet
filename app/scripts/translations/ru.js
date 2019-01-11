// Russian
"use strict";
var ru = function() {};
ru.code = "ru";
ru.data = {
  GEN_Help_0: "Уже есть кошелек?",
  GEN_Help_MetaMask: "Очень просто! Ключи хранятся в MetaMask.",

  GEN_Warning_1:
    "**Не потеряйте!** Он не может быть восстановлен в случае потери.",
  GEN_Warning_2:
    "**Не передавайте!** Ваши средства будут украдены в случае использования этого файла на ненадежных сайтах.",
  GEN_Warning_3:
    "**Сделайте резервную копию!** Храните его как миллион долларов которые он может стоить однажды.",

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

  ENS_WrongAddress_1: "The wallet you unlocked does not own the name ",
  ENS_WrongAddress_2: "Please unlock the wallet with address ",

  ENS_Finalize: "Finalize",
  ENS_Finalize_content:
    "Finalizing this name assigns the ENS name to the winning bidder. The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH. Any non-winners will also be refunded.",
  ENS_Finalize_content_1:
    "You are about to finalize the auction & claim the name:",
  ENS_Helper_1: "What is the process like?",
  ENS_Helper_2: "1) Preparation",
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
  ENS_Helper_20: "ENS: Read the Docs",
  ENS_Helper_21: "Announcing the Ethereum Name Service Relaunch Date!",
  ENS_Helper_22: "Knowledge Base: ENS",
  ENS_Helper_23: "Debugging a [BAD INSTRUCTION] Reveal",
  ENS_Helper_24:
    "Please try the above before relying on support for reveal issues as we are severely backlogged on support tickets. We're so sorry. :(",

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

  HELP_2a_Title: "How do I save/backup my wallet? ",

  /* New Generics */
  x_CancelReplaceTx: "Cancel or Replace Transaction",
  x_CancelTx: "Cancel Transaction",
  x_PasswordDesc:
    "Этот пароль * шифрует * закрытый ключ. **Вам понадобится пароль + закрытый ключ для получения доступа к вашему кошельку.**",
  x_ReadMore: "Read More",
  x_ReplaceTx: "Replace Transaction",
  x_TransHash: "Transaction Hash",
  x_TXFee: "TX Fee",
  x_TxHash: "TX Hash",

  /* Check TX Status */
  NAV_CheckTxStatus: "Проверить статус транзакции",
  NAV_TxStatus: "TX статус",
  tx_Details: "Детали транзакции",
  tx_Summary:
    // 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html)**',
    "При высокой загрузке сети транзакции могут ожидать подтверждения часы.",
  tx_notFound: "Транзакция не найдена",
  tx_notFound_1:
    "This TX cannot be found in the TX Pool of the node you are connected to.",
  tx_notFound_2:
    'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
  tx_notFound_3:
    "It could still be in the TX Pool of a different node, waiting to be mined.",
  tx_notFound_4:
    "Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.",
  tx_foundInPending: "Pending Transaction Found",
  tx_foundInPending_1:
    "Your transaction was located in the TX Pool of the node you are connected to. ",
  tx_foundInPending_2: "It is currently pending (waiting to be mined). ",
  tx_foundInPending_3:
    'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
  tx_FoundOnChain: "Transaction Found",
  tx_FoundOnChain_1:
    "Your transaction was successfully mined and is on the blockchain.",
  tx_FoundOnChain_2:
    '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
  tx_FoundOnChain_3:
    "**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.github.io/knowledge-base/diving-deeper/ethereum-list-of-support-and-communities.html). Send them the *link* to your transaction and ask them, nicely, to look into your situation.",

  /* Gen Wallet Updates */
  GEN_Help_1: "Используйте вашу",
  GEN_Help_2: "для доступа к аккаунту.",
  GEN_Help_3: "*Ваше устройство* является кошельком.",
  GEN_Help_4: "Guides & FAQ",
  GEN_Help_5: "How to Create a Wallet",
  GEN_Help_6: "Getting Started",
  GEN_Help_7:
    "Keep it safe · Make a backup · Don't share it with anyone · Don't lose it · It cannot be recovered if you lose it.",
  GEN_Help_8: "Не загружается файл? ",
  GEN_Help_9: "Попробуйте использовать Google Chrome ",
  GEN_Help_10: "Правый клик и сохранить как файл. Имя файла: ",
  GEN_Help_11: "Не открывайте этот файл на вашем компьютере ",
  GEN_Help_12:
    "Используйте его для получения доступа к кошельку через Wallet maincoin.money (или Mist, Geth, Parity и другие типа кошельков.) ",
  GEN_Help_13: "How to Back Up Your Keystore File ",
  GEN_Help_14: "What are these Different Formats? ",
  GEN_Help_15: "Preventing loss &amp; theft of your funds.",
  GEN_Help_16: "What are these Different Formats?",
  GEN_Help_17: "Почему я должен сохранить?",
  GEN_Help_18: "Это второе средство получения доступа.",
  GEN_Help_19: "Для случая если вы забудете пароль.",
  GEN_Help_20: "Для холодного доступа.",
  GET_ConfButton: "Я понимаю. Продолжить.",
  GEN_Label_5: "Сохраните свой `Закрытый ключ`. ",
  GEN_Unlock: "Разблокируйте для того чтоб увидеть свой адрес",
  GAS_PRICE_Desc:
    "Цена газа – это стоимость транзакции которую вы готовы заплатить сети за ее исполнение. Стандартная цена – `41 GWEI`.",
  GAS_LIMIT_Desc:
    "Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.",
  NONCE_Desc:
    "The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.",
  TXFEE_Desc:
    "The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)",
  REC_WAY: "Это рекомендуемый способ посмотреть свой баланс.",
  REC_WAY_TXT:
    "С помощью этой опции вы можете только посмотреть баланс. Для отправки токенов воспользуйтесь другой опцией.",
  NOT_REC_WAY: "Это <u>не</u> оптимальный путь доступа к вашему кошельку.",
  Entering_Private_Key:
    "Ввод вашего закрытого ключа на веб сайте потенциально опасен. В случае, если наш сайт скомпрометирован или вы случайно посетили другой сайт, ваши средства могут быть украдены.",
  If_You_Must:
    "Если входите, то <u>дважды проверьте</u> адрес сайта и наличие SSL сертификата. Адрес должен быть https://wallet.maincoin.money/",

  /* Navigation*/
  NAV_AddWallet: "Добавить кошелёк ",
  NAV_BulkGenerate: "Создать несколько кошельков ",
  NAV_Contact: "Контакты ",
  NAV_Contracts: "контракт ",
  NAV_DeployContract: "Опубликовать контракт ",
  NAV_ENS: "ENS",
  NAV_DomainSale: "DomainSale",
  PHISHING_Warning_1: "",
  NAV_GenerateWallet_alt: "Регистрация кошелька ",
  NAV_GenerateWallet: "Создать кошелёк ",
  NAV_Help: "Справка ",
  NAV_InteractContract: "Interact with Contract ",
  NAV_Multisig: "Multisig ",
  NAV_MyWallets: "Мои кошельки ",
  NAV_Offline: "Оффлайн-перевод ",
  NAV_SendEther: "Вход в MNC кошелек ",
  NAV_SendTokens: "Перевести токены ",
  NAV_SignMsg: "Подписать сообщение ",
  NAV_Swap: "Обмен ",
  NAV_ViewWallet: "Информация о кошельке ",
  NAV_YourWallets: "Ваши кошельки ",

  /* General */
  x_Access: "Подключиться ",
  x_AddessDesc:
    'Это можно назвать "номер Вашего счёта" или "Ваш открытый ключ". Вы сообщаете этот адрес людям, чтобы они могли отправлять Вам maincoin (так и другие криптовалюты). Картинка позволяет легко опознать Ваш адрес среди других адресов. ',
  x_Address: "Ваш адрес ",
  x_Cancel: "Отменить ",
  x_CSV: "Файл CSV (не зашифрован) ",
  x_Download: "Скачать ",
  x_Json: "Файл JSON (не зашифрован) ",
  x_JsonDesc:
    "Это Ваш незашифрованный закрытый ключ в формате JSON, для использования которого не требуется воодить пароль. Любой, у кого есть этот файл, может распоряжаться вашим кошельком и эфиром (ether) без ввода пароля. ",
  x_Keystore: "Файл Keystore (UTC / JSON · рекомендуется · зашифрован) ",
  x_Keystore2: "Файл Keystore (UTC / JSON) ",
  x_KeystoreDesc:
    "Этот файл Keystore использует формат совместимый с Mist. Вы сможете в будущем импортировать его. Рекомендуется скачать этот файл и сделать резервную копию. ",
  x_MetaMask: "MetaMask / Mist ",
  x_MetaMask_txt:
    "MetaMask это расширение браузера, которое позволяет быстро, легко и безопасно получить доступ к кошельку. Это безопасно потому что вам никогда не потребуется вводить закрытый ключ для доступа к кошельку. Это расширение защищает вас от ненадежных сайтов.",
  x_MetaMask_connect: "Подключиться через MetaMask",
  x_Mnemonic: "Кодовая фраза ",
  x_ParityPhrase: "Паритетная фраза  ",
  x_Password: "Пароль ",
  x_Print: "Напечатать бумажный кошелёк ",
  x_PrintDesc:
    'Для профи: Нажмите "Печать" и сохраните это в формате PDF, если у Вас нет принтера! ',
  x_PrintShort: "Печать ",
  x_PrivKey: "Закрытый ключ (не зашифрован) ",
  x_PrivKey2: "Закрытый ключ ",
  x_PrivKeyDesc:
    "Это незашифрованное текстовое представление Вашего закрытого ключа, для использования которого не требуется вводить пароль. Если посторонние узнают Ваш закрытый ключ, они смогут распоряжаться Вашим кошельком без ввода пароля. По этой причине, обычно рекомендуют использовать зашифрованную версию закрытого ключа. ",
  x_Save: "Сохранить ",
  x_TXT: "Файл TXT (не зашифрован) ",
  x_Wallet: "кошелёк ",

  /* Header */
  MEW_Warning_1:
    "Всегда проверяйте URL перед тем, как воспользоваться существующим кошельком или создать новый. Опасайтесь поддельных (фишинговых) сайтов! ",
  CX_Warning_1:
    "Всегда имейте **резервную копию** всех кошельков, которые Вы храните здесь. Различные обстоятельства могут привести к тому, что данные, хранимые в этом расширении браузера Chrome, могут быть потеряны, например если Вы удалите или переустановите расширение. Это расширение облегчает использование Ваших кошельков, но оно **не является** надежным местом для их хранения. ",
  MEW_Tagline: "Ethereum кошелёк на javascript с открытым исходным кодом ",
  CX_Tagline:
    "Ethereum кошелёк на javascript с открытым исходным кодом в виде расширения для браузера Chrome ",

  /* Footer */
  FOOTER_1:
    "Написанный на javascript инструмент с открытым исходным кодом для создания Ethereum кошельков и выполнения транзакций. ",
  FOOTER_1b: "Авторы: ",
  FOOTER_2: "Пожертвования приветствуются: ",
  FOOTER_3: "Создание кошелька на стороне клиента от ",
  FOOTER_4: "Отказ от ответственности ",

  /* Sidebar */
  sidebar_AccountUpdateBalances: "Обновить",
  sidebar_AccountInfo: "Информация о счёте ",
  sidebar_AccountAddr: "Адрес (номер) счёта ",
  sidebar_AccountBal: "Баланс счёта ",
  sidebar_TokenBal: "Балансы токенов ",
  sidebar_Equiv: "Эквивалентные значения ",
  sidebar_TransHistory: "История транзакций ",
  sidebar_donation:
    "MyEtherWallet — это бесплатный сервис с открытым исходным кодом, заботящийся о Вашей безопасности и неприкосновенности Вашей частной жизни. Чем больше пожертвований мы получаем, тем больше времени мы проводим, добавляя новые возможности, прислушиваясь к Вашим пожеланиям и предоставляя Вам то, что Вам необходимо. Мы — всего лишь два человека, пытающиеся изменить Мир. Вы поможете нам? ",
  sidebar_donate: "Пожертвовать ",
  sidebar_thanks: "СПАСИБО!!! ",
  sidebar_DisplayOnTrezor: "Display address on TREZOR",
  sidebar_DisplayOnLedger: "Display address on Ledger",

  /* Decrypt Panel */
  decrypt_Access:
    "Каким способом Вы хотите получать доступ к своему кошельку? ",
  decrypt_Title: "Выберите формат Вашего закрытого ключа: ",
  decrypt_Select: "Выберите кошелёк: ",
  dec_Address: "Поcмотреть адрес кошелька без входа",

  /* Add Wallet */
  ADD_Label_1: "Что Вы хотите сделать? ",
  ADD_Radio_1: "Создать новый кошелёк ",
  ADD_Radio_2: "Выбрать файл с кошельком (Keystore/JSON) ",
  ADD_Radio_2_alt: "Выбрать файл с кошельком ",
  ADD_Radio_2_short: "ВЫБРАТЬ ФАЙЛ С КОШЕЛЬКОМ... ",
  ADD_Radio_3: "Вставить или ввести Ваш закрытый ключ ",
  ADD_Radio_4: "Добавить счёт в список слежения ",
  ADD_Radio_5: "Скопируйте или введите кодовую фразу ",
  ADD_Radio_5_Path: "Select HD derivation path ",
  ADD_Radio_5_woTrezor: "(Jaxx, Metamask, Exodus, imToken)",
  ADD_Radio_5_withTrezor: "(Jaxx, Metamask, Exodus, imToken, TREZOR)",
  ADD_Radio_5_PathAlternative: "(Ledger)",
  ADD_Radio_5_PathTrezor: "(TREZOR)",
  ADD_Radio_5_PathCustom: "(Custom) ",
  ADD_Label_2: "Присвоить название: ",
  ADD_Label_3: "Ваш кошелёк зашифрован.  Пожалуйста, введите пароль ",
  ADD_Label_4: "Добавить счёт в список слежения ",
  ADD_Warning_1:
    'Вы можете добавить счёт в "список слежения" на вкладке "кошельки", не загружая закрытый ключ. Добавление счёта в список слежения не означает, что вы имеете доступ к этому счёту, или можете распоряжаться эфиром (ether), лежащим на нём. ',
  ADD_Label_5: "Введите адрес ",
  ADD_Label_6: "Отпереть кошелёк ",
  ADD_Label_6_short: "Отпереть ",
  ADD_Label_7: "Добавить счёт ",
  ADD_Label_8: "Пароль ",
  HOW_TO_SEE: "Как увидеть все ваши токены.",
  SHOW_ALL_TOKENS: "Показать все токены",
  ONLY_SHOW_BAL: "Только токены с балансом",
  YOU_CAN_ALSO: "Вы так же можете посмотреть баланс на",
  OR: "или",

  /* Generate Wallets */
  GEN_desc:
    "Если Вы хотите создать несколько кошельков, Вы можете сделать это здесь ",
  GEN_Label_1: "Введите сложный пароль (не менее 9 символов) ",
  GEN_Placeholder_1: "Не забудьте сохранить это! ",
  GEN_SuccessMsg: "Поздравляем! Ваш кошелёк успешно создан. ",
  GEN_Label_2:
    "Сохраните Ваш файл Keystore/JSON или закрытый ключ. Не забывайте Ваш пароль! ",
  GEN_Label_3: "Сохраните Ваш адрес. ",
  GEN_Label_4:
    "Напечатайте бумажный кошелёк или сохраните QR код. (по желанию) ",

  /* Bulk Generate Wallets */
  BULK_Label_1: "Сколько кошельков создать ",
  BULK_Label_2: "Создать кошельки ",
  BULK_SuccessMsg: "Поздравляем! Ваши кошельки успешно созданы. ",

  /* Sending Ether and Tokens */
  SEND_addr: "Адрес получателя ",
  SEND_amount: "Сумма перевода ",
  SEND_amount_short: "Сумма ",
  SEND_custom: "Другое ",
  SEND_gas: "Газ ",
  SEND_TransferTotal: "Перевести весь доступный баланс ", // updated to be shorter
  SEND_generate: "Сформировать транзакцию ",
  SEND_raw: "Готовая транзакция ",
  SEND_signed: "Подписанная транзакция ",
  SEND_trans: "Отправить транзакцию ",
  SENDModal_Title: "Внимание! ",
  /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
  SENDModal_Content_1: "Вы собираетесь перевести ",
  SENDModal_Content_2: "на адрес ",
  SENDModal_Content_3: "Вы уверены, что хотите сделать это? ",
  SENDModal_Content_4:
    "К СВЕДЕНИЮ: Если произошла ошибка, Вам скорее всего надо положить ещё немного эфира (ether) на Ваш счёт, чтобы покрыть расходы на газ при пре переводе токенов. Расходы на газ оплачиваются эфиром (ether). ",
  SENDModal_No: "Нет, отменить транзакцию! ",
  SENDModal_Yes: "Да, я уверен! Выполнить транзакцию. ",

  /* Tokens */
  TOKEN_Addr: "Адрес токена",
  TOKEN_Symbol: "Символ токена ",
  TOKEN_Dec: "Дробность (знаков после запятой) ",

  /* Send Transaction */
  TRANS_desc:
    'Если Вы хотите перевести токены, используйте страницу "Отправить токены". ',
  TRANS_warning:
    'Если Вы используете функции "только ETH" или "только ETC", перевод будет выполнен с помощью контракта. У некоторых сервисов могут возникнуть проблемы с приёмом таких переводов. Уточните этот вопрос. ',
  TRANS_advanced: "+Дополнительно: добавить данные ",
  TRANS_data: "Данные ",
  TRANS_sendInfo:
    "Стандартная транзакция, использующая 21000 газа, будет стоить 0,000441 эфира (ether). Мы указываем цену газа немного выше минимально возможной: 0,000000021 эфира (ether), для того, чтобы ускорить выполнение танзакций. Мы не берём комиссию за выполнение транзакций. ",

  /* Send Transaction Modals */
  TRANSModal_Title: 'Транзакции вида "только ETH" и "только ETC" ',
  TRANSModal_Content_0: "О видах транзакций и сервисах: ",
  TRANSModal_Content_1:
    "**Эфир (ether, обычная транзакция): ** Выполняет обычный перевод напрямую с одного адреса на другой. Используется стандартное количесвто газа: 21000. В большинстве случаев, перевод ETH, выполненный этим способом, можно будет продублировать для ETC. ",
  TRANSModal_Content_2:
    "**Только ETH: ** Выполняет перевод через [контракт Тимона Раппа, защищающий от дублирования переводов (рекомендован ВБ)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), поэтому перевод будет выполнен только в **ETH**. ",
  TRANSModal_Content_3:
    "**Только ETC: ** Выполняет перевод через [контракт Тимона Раппа, защищающий от дублирования переводов (рекомендован ВБ)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), поэтому перевод будет выполнен только в **ETC**. ",
  TRANSModal_Content_4:
    '**Coinbase и ShapeShift: ** Отправляйте им только обычные транзакции. Если Вы отправите им транзакцию вида "только ...", то Вам придётся обращаться к их службе поддержки, чтобы они вручную пополнили Ваш баланс или вернули бы Вам Ваш эфир (ether). [Вы также можете попробовать использовать инструмент "split" от Shapeshift.](https://split.shapeshift.io/) ',
  TRANSModal_Content_5:
    "**Kraken & Poloniex:** Проблем не выявлено.  Можно использовать транзакции любого вида. ",
  TRANSModal_Yes: "Спасибо, я всё понял. ",
  TRANSModal_No: "Чёрт, теперь я окончательно запутался.  Помогите мне. ",

  /* Offline Transaction */
  OFFLINE_Title: "Сформировать и отправить оффлайн транзакцию ",
  OFFLINE_Desc:
    "Оффлайн транзакция формируется за тра шага. Вы должны выполнить шаги №1 и №3 на компьютере, подключённом к интернету (на онлайн компьютере), а шаг №2 на компьютере, отсоединённом от сети (на оффлайн компьютере). Это гарантирует, что подключённые к интернет устройства не получат доступа к Вашим закрытым ключам. ",
  OFFLLINE_Step1_Title: "Шаг №1: Подготовка информации (онлайн компьютер) ",
  OFFLINE_Step1_Button: "Подготовка информации ",
  OFFLINE_Step1_Label_1: "Адрес отправителя ",
  OFFLINE_Step1_Label_2:
    'Внимание: Это адрес ОТПРАВИТЕЛЯ, а не адрес получателя. № перевода (nonce) определяется для адреса отправителя. При использовании оффлайн компьютера, физически изолированного от сети, это будет адрес счёта "холодного хранения" (cold-storage). ',
  OFFLINE_Step2_Title: "Шаг №2: Формирование транзакции (оффлайн компьютер) ",
  OFFLINE_Step2_Label_1: "Адрес получателя ",
  OFFLINE_Step2_Label_2: "Сумма перевода ",
  OFFLINE_Step2_Label_3: "Цена газа ",
  OFFLINE_Step2_Label_3b:
    "Это отображалось на шаге №1 на Вашем онлайн компьютере. ",
  OFFLINE_Step2_Label_4: "Лимит газа ",
  OFFLINE_Step2_Label_4b:
    "Лимит газа по умолчанию: 21000. При использовании контрактов или передаче дополнительных данных может быть необходимо указать другое значение. Неистраченный газ будет Вам возвращён. ",
  OFFLINE_Step2_Label_5: "№ перевода (nonce) ",
  OFFLINE_Step2_Label_5b:
    "Это отображалось на шаге №1 на Вашем онлайн компьютере. ",
  OFFLINE_Step2_Label_6: "Данные ",
  OFFLINE_Step2_Label_6b:
    "Это необязательный параметр. Данные обычно указывают при использовании контрактов. ",
  OFFLINE_Step2_Label_7: "Выберите или введите ваш закрытый ключ или JSON. ",
  OFFLINE_Step3_Title: "Шаг №3: Выполнить транзакцию (онлайн компьютер) ",
  OFFLINE_Step3_Label_1:
    'Вставьте подписанную транзакцию с шага №2 и нажмите кнопку "ВЫПОЛНИТЬ ТРАНЗАКЦИЮ". ',

  /* Deploy Contracts */
  DEP_generate: "Сформировать байткод ",
  DEP_generated: "Сформированный байткод ",
  DEP_signtx: "Подписать транзакцию ",
  DEP_interface: "Сформированный интерфейс ",

  /* My Wallet */
  MYWAL_Nick: "Название кошелька ",
  MYWAL_Address: "Адрес кошелька ",
  MYWAL_Bal: "Баланс ",
  MYWAL_Edit: "Редактировать ",
  MYWAL_View: "Просмотреть ",
  MYWAL_Remove: "Удалить ",
  MYWAL_RemoveWal: "Удалить кошелёк: ",
  MYWAL_WatchOnly: "Список слежения ",
  MYWAL_Viewing: "Просматриваемый кошелёк ",
  MYWAL_Hide: "Скрыть информацию о кошельке ",
  MYWAL_Edit_2: "Редактировать кошелёк ",
  MYWAL_Name: "Имя кошелька ",
  MYWAL_Content_1: "Внимание! Вы собираетесь удалить кошелёк ",
  MYWAL_Content_2:
    "Убедитесь, что Вы **сохранили закрытый ключ или файл Keystore / JSON и пароль** от этого кошелька, прежде чем Вы удалите этот кошелёк. ",
  MYWAL_Content_3:
    "Если Вы планируете в будущем использовать этот кошелёк в MyEtherWallet CX, Вам надо будет вручную заново добавить его, указав закрытый ключ или файл JSON и пароль. ",

  /* View Wallet Details */
  VIEWWALLET_Subtitle:
    "Позволяет скачать закрытые ключи в различных форматах, а также повторно напечатать Ваши бумажные кошельки. Вам это понадобится, когда Вы захотите [импортировать Ваши счета в geth или Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Для проверки баланса Ваших счетов мы рекомендуем использовать браузер блокчейна, например [etherscan.io](https://etherscan.io/). ",
  VIEWWALLET_Subtitle_Short:
    "Позволяет Вам скачать Ваши закрытые ключи в различных форматах, а также повторно напечатать Ваши бумажные кошельки. ",
  VIEWWALLET_SuccessMsg: "Поздравляем! Вот информация о Вашем кошельке. ",
  VIEWWALLET_ShowPrivKey: "(show)",
  VIEWWALLET_HidePrivKey: "(hide)",

  /* Chrome Extension */
  CX_error_1:
    'У Вас нет сохранённых кошельков. Чтобы создать кошелёк, нажмите ["Создать кошелёк"](/cx-wallet.html#add-wallet)! ',
  CX_quicksend: "Моментальный перевод ", // if no appropriate translation, just use "Send"

  /* Node Switcher */
  NODE_Title: "Настроить собственный узел",
  NODE_Subtitle: "Для подключения к локальному узлу...",
  NODE_Warning:
    "Ваш узел должен использовать протокол HTTPS, чтобы MyEtherWallet.com мог с ним работать. Вы можете [скачать репозиторий MyEtherWallet & и запустить его локально](https://github.com/kvhnuke/etherwallet/releases/latest) чтобы иметь возможность работать с любыми узлами, или получите бесплатный SSL сертификат на [LetsEncrypt](https://letsencrypt.org/)",
  NODE_Name: "Имя узла",
  NODE_Port: "Порт узла",
  NODE_CTA: "Сохранить и подключиться к собственному узлу",

  /* Contracts */
  CONTRACT_Title: "Адрес контракта ",
  CONTRACT_Title_2: "Выбрать имеющийся контракт ",
  CONTRACT_Json: "ABI / JSON интерфейс ",
  CONTRACT_Interact_Title: "Прочитать / записать контракт ",
  CONTRACT_Interact_CTA: "Выбрать функцию ",
  CONTRACT_ByteCode: "Байткод ",
  CONTRACT_Read: "ПРОЧИТАТь ",
  CONTRACT_Write: "ЗАПИСАТЬ ",

  /* Swap / Exchange */
  SWAP_rates: "Текущие котировки ",
  SWAP_init_1: "Я хочу обменять мои ",
  SWAP_init_2: " на ", // "I want to swap my X ETH for X BTC"
  SWAP_init_CTA: "Поехали! ", // or "Continue"
  SWAP_information: "Информация об операции",
  SWAP_send_amt: "Сумма для отправки ",
  SWAP_rec_amt: "Сумма к получению ",
  SWAP_your_rate: "Ваш курс ",
  SWAP_rec_add: "Адрес получателя ",
  SWAP_start_CTA: "Начать обмен ",
  SWAP_ref_num: "Идентификатор операции ",
  SWAP_time: "Время до отправки ",
  SWAP_elapsed: "Time elapsed since sent ",
  SWAP_progress_1: "Заявка выставлена ",
  SWAP_progress_2: "Ждём получения ваших ", // Waiting for your BTC...
  SWAP_progress_3: "Получено! ", // ETH Received!
  SWAP_progress_4: "Отправляем ваши {{orderResult.output.currency}} ",
  SWAP_progress_5: "Заявка выполнена ",
  SWAP_order_CTA: "Пожалуйста, отправьте ", // Please send 1 ETH...
  SWAP_unlock:
    "Отоприте ваш кошелёк для отправки ETH или Tokens непосредственно с этой страницы. ",

  /* Sign Message */
  MSG_message: "Сообщение ",
  MSG_date: "Дата ",
  MSG_signature: "Подпись ",
  MSG_verify: "Проверить сообщение ",
  MSG_info1:
    "Укажите сегдоняшную дату, чтобы подпись не могла быть повторно использована в другой день. ",
  MSG_info2:
    "Укажите ваш псевдоним и то, где вы этот псевдоним используете, чтобы никто другой не смог его использовать. ",
  MSG_info3:
    "Укажите цель отправки сообщения, чтобы оно не могло быть использовно с другой целью. ",

  /* Mnemonic */
  MNEM_1: "Пожалуйста, выберите адрес для выполнения операции. ",
  MNEM_2:
    "Одна кодовая фраза может использоваться для получения доступа к нескольким кошелькам или адресам. Пожалуйста, выберите адрес, который вы хотите использовать в этот раз. ",
  MNEM_more: "Следующие адреса ",
  MNEM_prev: "Предыдущие адреса ",
  SEND_custom: "Добавить свой токен ",
  TOKEN_hide: "Спрятать токены ",
  TOKEN_show: "Отправить все токены ",
  TRANS_gas: "Лимит газа ", // changd in ENG to Gas Limit:
  WARN_Send_Link:
    "Вы попали сюда по ссылке, которая уже содержит в себе адрес, сумму, лимит газа и дополнительные параметры транзакции. ВЫ можете изменить эти данные перед отправкой транзакции. Для начала отоприте ваш кошелёк. ",

  /* Hardware wallets */
  x_Ledger: "Ledger Wallet ",
  ADD_Ledger_1: "Присоедините ваш Ledger Wallet ",
  ADD_Ledger_2: "Запустите приложение Ethereum (или приложение контракта) ",
  ADD_Ledger_2_Exp: "Запустите приложение Expanse (или приложение контракта) ",
  ADD_Ledger_2_Ubq: "Запустите приложение Ubiq (или приложение контракта) ",
  ADD_Ledger_3:
    "Убедитесь, что использование из браузера разрешено в настройках ",
  ADD_Ledger_4:
    "Если в настройках нет использования из браузера, убедитесь, что у вас [прошивка версии >1.2](https://www.ledgerwallet.com/apps/manager) ",
  ADD_Ledger_0a:
    "Перезапустите MyEtherWallet через безопасное (SSL) соединение ",
  ADD_Ledger_0b:
    "Перезапустите MyEtherWallet с браузере [Chrome](https://www.google.com/chrome/browser/desktop/) или [Opera](https://www.opera.com/) ",
  ADD_Ledger_scan: "Подключиться к Ledger Wallet ",

  ADD_MetaMask: "Connect to MetaMask ",

  x_Trezor: "TREZOR ",
  ADD_Trezor_scan: "Подключиться к TREZOR ",
  ADD_Trezor_select: "Это код восстановления TREZOR ",
  x_DigitalBitbox: "Digital Bitbox ",
  ADD_DigitalBitbox_0a:
    "Перезапустите MyEtherWallet через безопасное (SSL) соединение ",
  ADD_DigitalBitbox_0b:
    "Перезапустите MyEtherWallet с браузере [Chrome](https://www.google.com/chrome/browser/desktop/) или [Opera](https://www.opera.com/) ",
  ADD_DigitalBitbox_scan: "Подключиться к Digital Bitbox ",
  x_Secalot: "Secalot ",
  ADD_Secalot_0a: "Re-open MyEtherWallet on a secure (SSL) connection ",
  ADD_Secalot_0b:
    "Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ",
  ADD_Secalot_scan: "Connect your Secalot ",

  Hardware_Wallet:
    "Аппаратный кошелек в виде маленького USB устройства, которое позволяет вам получит доступ к кошельку быстро, безопасно и легко. Это безопасно потому что ваш закрытый ключ никогда не покидает пределов аппаратного кошелька.",
  Password: "Пароль",
  /* Error Messages */
  ERROR_0: "Пожалуйста, введите сумму корректно. ",
  ERROR_1:
    "Пароль должен содержать не менее 9 символов. Пожалуйста, используйте сложный пароль. ",
  ERROR_2: "К сожалению, мы не смогли определить формат файла кошелька. ",
  ERROR_3: "Этот файл не является файлом кошелька. ",
  ERROR_4:
    "Такая единица измерения не существует. Пожалуйста, укажите одну из следующих единиц измерения ",
  ERROR_5: "Неправильный адрес. ",
  ERROR_6: "Неверный пароль. ",
  ERROR_7: "Некорректная сумма. (Must be integer. Try 0-18.) ", // 7
  ERROR_8:
    "Некорректно указан лимит газа. (Must be integer. Try 21000-4000000.) ", // 8
  ERROR_9: "Недопустимые данные. (Must be hex.) ", // 9
  ERROR_10:
    "Некорректно указано количество газа. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ",
  ERROR_11: "Неверный номер перевода (nonce). (Must be integer.) ", // 11
  ERROR_12: "Подписанная транзакция некорректна. ",
  ERROR_13: "Кошелёк с таким названием уже существует. ",
  ERROR_14: "Кошелёк не найден. ",
  ERROR_15:
    "Предложение с таким идентификатором не существует или при чтении предложения произошла ошибка. ",
  ERROR_16:
    "Кошелёк с таким адресом уже находится в хранилище. Просмотрите в списке кошельков. ",
  ERROR_17:
    "Недостаточно средств. На счёте, с которого вы пытаетесь отправить транзакцию, не хватает средств. Вам необходимо иметь не менее 0.01 эфира (ether) на Вашем счету, чтобы покрыть расходы на газ. Пожалуйста, пложите немного эфира (ether) на счёт и попробуйте снова. ",
  ERROR_18:
    "Транзакция могла бы истратить весь газ. Это значит, что Вы уже голосовали по данному предложению, или период обсуждения данного предложения закончился. ",
  ERROR_19: "Неправильный символ ",
  ERROR_20: "Not a valid ERC-20 token", // 20
  ERROR_21:
    "Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.", // 21
  ERROR_22: "Пожалуйста укажите валидное имя узла сети", // 22
  ERROR_23:
    "Пожалуйста укажите валидный a valid URL. If you are on https, your URL must be https", // 23
  ERROR_24: "Пожалуйста укажите валидный порт подключения", // 24
  ERROR_25: "Пожалуйста укажите валидный идентификатор сети", // 25
  ERROR_26: "Пожалуйста укажите валидный ABI", // 26
  ERROR_27: "Минимальное количество: 0.01. Максимальное: ",
  ERROR_28:
    "В будущем, для доступа к этому кошельку **Вам понадобится либо файл Keystore/JSON вместе с паролем,  либо закрытый ключ**. Пожалуйста, сохраните их и сделайте резервную копию! Если Вы потеряете их, то не сможете восстановить доступ к Вашему кошельку. Обратитесь к [справке](https://www.myetherwallet.com/#help) за инструкциями. ",
  ERROR_29: "Пожалуйста укажите валидную пару логина и пароля. ", // 29
  ERROR_30:
    "Пожалуйста укажите валидное имя (7+ символов, ограниченная пунктуация) ", // 30
  ERROR_31: "Пожалуйста укажите валидную секретную фразу", // 31
  ERROR_32:
    "Соединение с узлом не установлено. Обновите страницу или попробуйте другой узел (выбор в верхнем правом углу). Советуем проверить настройки фаервола", // 32
  ERROR_33: "Разблокированный адрес кошелька несоответствует адресу владельца", // 33
  ERROR_34: "Имена не совпадают", // 34
  ERROR_35:
    'Адрес имеет некорректную чексумму. <a href="https://myetherwallet.github.io/knowledge-base/addresses/not-checksummed-shows-when-i-enter-an-address.html" target="_blank" rel="noopener noreferrer">Подробнее</a>', // 35
  ERROR_36: "Введите валидный адрес транзакции", // 36
  ERROR_37: "Введите валидное HEX-значение (0-9, a-f)", // 37
  ERROR_38: "...",
  ERROR_39: "...",
  ERROR_40: "Пожалуйста укажите валидный приватный ключ",

  SUCCESS_1: "Адрес указан верно ",
  SUCCESS_2: "Кошелёк успешно расшифрован ",
  SUCCESS_3:
    "Ваша транзакция отправлена в сеть. Добавление транзакции в блок может занять время.",
  SUCCESS_4: "Ваш кошелёк успешно добавлен ",
  SUCCESS_5: "Выбранный файл ",
  SUCCESS_6: "Вы успешно подключились",
  SUCCESS_7: "Подпись сообщения верифицирована",

  /* Geth Error Messages */
  GETH_InvalidSender: "Неверный адрес отправителя ",
  GETH_Nonce: "Номер перевода (nonce) слишком мал ",
  GETH_Cheap: "Цена газа слишком низкая ",
  GETH_Balance: "Баланс недостаточен ",
  GETH_NonExistentAccount: "Счёт не существует или баланс счёта слишком мал ",
  GETH_InsufficientFunds: "Недостаточно средств для ГАЗ * ЦЕНА + СУММА ",
  GETH_IntrinsicGas: "Недостаточно газа для выполнения транзакции ",
  GETH_GasLimit: "Превышен лимит газа на блок ",
  GETH_NegativeValue: "Отрицательная сумма ",

  /* Parity Error Messages */
  PARITY_AlreadyImported: "Транзакция с данным хэшем уже импортирована.",
  PARITY_Old:
    "Номер перевода (nonce) слишком маленький. Попробуйте увеличить номер перевода (nonce).",
  PARITY_TooCheapToReplace:
    "Комиссия транзакции слишком низкая. В очереди уже есть другая транзакция с таким же номером перевода (nonce). Попробуйте увеличитьразмер комиссии или номер перевода (nonce).",
  PARITY_LimitReached:
    "Слишком много транзакций в очереди. Ваша транзакция была удалена из-за превышения лимита. Попробуйте увеличить размер комиссии.",
  PARITY_InsufficientGasPrice:
    "Комиссия транзакции слишком низкая. Она не соответствует минимальному размеру комиссии для вашего узла (минимальная комиссия: {}, ваша комиссия: {}). Попробуйте увеличить размер комиссии.",
  PARITY_InsufficientBalance:
    "Недостаточно средств. На счёте, с которого вы пытаетесь отправить транзакцию, не хватает средств. Требуется {}, а имеется только: {}.",
  PARITY_GasLimitExceeded:
    "Цена транзакции превышает текущий лимит газа. Лимит: {}, цена: {}. Поробуйте уменьшить отведённое количество газа.",
  PARITY_InvalidGasLimit: "Отведённое количество газа меньше лимита.",

  /* Tranlsation Info */
  translate_version: "0.3 ",
  Translator_Desc: "Спасибо нашим переводчикам ",
  TranslatorName_1:
    "[Михаил Владимиров](https://www.myetherwallet.com/?gaslimit=21000&to=0x6ff323e36bfdb20502b23780695f4e77e36cde95&value=1.0#send-transaction) ",
  TranslatorAddr_1: "0x6ff323e36bfdb20502b23780695f4e77e36cde95 ",
  /* Translator 1             : Insert Comments Here */
  TranslatorName_2: "",
  TranslatorAddr_2: "",
  /* Translator 2             : Insert Comments Here */
  TranslatorName_3: "",
  TranslatorAddr_3: "",
  /* Translator 3             : Insert Comments Here */
  TranslatorName_4: "",
  TranslatorAddr_4: "",
  /* Translator 4             : Insert Comments Here */
  TranslatorName_5: "",
  TranslatorAddr_5: "",
  /* Translator 5             : Insert Comments Here */

  /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
  HELP_Warning:
    "If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. ",
  HELP_Desc:
    "Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! ",
  HELP_Remind_Title: "Some reminders ",
  HELP_Remind_Desc_1:
    "**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. ",
  HELP_Remind_Desc_2:
    'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. ',
  HELP_Remind_Desc_3:
    "If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! ",

  HELP_0_Title: "0) I'm new. What do I do? ",
  HELP_0_Desc_1:
    "MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**. ",
  HELP_0_Desc_2: "Create a new wallet. ",
  HELP_0_Desc_3: "Back the wallet up. ",
  HELP_0_Desc_4:
    "Verify you have access to this new wallet and have correctly saved all necessary information. ",
  HELP_0_Desc_5: "Transfer Ether to this new wallet. ",

  HELP_1_Title: "1) How do I create a new wallet? ",
  HELP_1_Desc_1: 'Go to the "Generate Wallet" page. ',
  HELP_1_Desc_2: 'Go to the "Add Wallet" page & select "Generate New Wallet" ',
  HELP_1_Desc_3:
    "Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. ",
  HELP_1_Desc_4: 'Click "GENERATE". ',
  HELP_1_Desc_5: "Your wallet has now been generated. ",

  HELP_2a_Desc_1:
    "You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. ",
  HELP_2a_Desc_2:
    "Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. ",
  HELP_2a_Desc_3:
    "Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys: ",
  HELP_2a_Desc_4:
    "Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. ",
  HELP_2a_Desc_5:
    "Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. ",
  HELP_2a_Desc_6:
    "Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). ",

  HELP_2b_Title:
    "2b) How do I safely / offline / cold storage with MyEtherWallet? ",
  HELP_2b_Desc_1:
    "Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ",
  HELP_2b_Desc_2: "Click on `etherwallet-vX.X.X.X.zip`. ",
  HELP_2b_Desc_3: "Move zip to an airgapped computer. ",
  HELP_2b_Desc_4: "Unzip it and double-click `index.html`. ",
  HELP_2b_Desc_5: "Generate a wallet with a strong password. ",
  HELP_2b_Desc_6:
    "Save the address. Save versions of the private key. Save the password if you might not remember it forever. ",
  HELP_2b_Desc_7:
    "Store these papers / USBs in multiple physically separate locations. ",
  HELP_2b_Desc_8:
    'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. ',

  HELP_3_Title: "3) How do I verify I have access to my new wallet? ",
  HELP_3_Desc_1:
    "**Before you send any Ether to your new wallet**, you should ensure you have access to it. ",
  HELP_3_Desc_2: 'Navigate to the "View Wallet Info" page. ',
  HELP_3_Desc_3: 'Navigate to the MyEtherWallet.com "View Wallet Info" page. ',
  HELP_3_Desc_4:
    "Select your wallet file -or- your private key and unlock your wallet. ",
  HELP_3_Desc_5:
    "If the wallet is encrypted, a text box will automatically appear. Enter the password. ",
  HELP_3_Desc_6: 'Click the "Unlock Wallet" button. ',
  HELP_3_Desc_7:
    "Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ",
  HELP_3_Desc_8:
    "If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ",

  HELP_4_Title: "4) How do I send Ether from one wallet to another? ",
  HELP_4_Desc_1:
    "If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. ",
  HELP_4_Desc_2: 'Navigate to the "Перевести эфир (ether) и токены" page. ',
  HELP_4_Desc_3:
    "Select your wallet file -or- your private key and unlock your wallet. ",
  HELP_4_Desc_4:
    "If the wallet is encrypted, a text box will automatically appear. Enter the password. ",
  HELP_4_Desc_5: 'Click the "Unlock Wallet" button. ',
  HELP_4_Desc_6:
    'Enter the address you would like to send to in the "To Address:" field. ',
  HELP_4_Desc_7:
    'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
  HELP_4_Desc_9: 'Click "Generate Transaction". ',
  HELP_4_Desc_10:
    "A couple more fields will appear. This is your browser generating the transaction. ",
  HELP_4_Desc_11: 'Click the blue "Send Transaction" button below that. ',
  HELP_4_Desc_12:
    'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
  HELP_4_Desc_13:
    "The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ",

  HELP_4CX_Title: "4) How do I send Ether using MyEtherWallet CX? ",
  HELP_4CX_Desc_1:
    'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Перевести эфир (ether) и токены" page. ',
  HELP_4CX_Desc_2: "QuickSend: ",
  HELP_4CX_Desc_3: "Click the Chrome Extension Icon. ",
  HELP_4CX_Desc_4: 'Click the "QuickSend" button. ',
  HELP_4CX_Desc_5: "Select the wallet you wish to send from. ",
  HELP_4CX_Desc_6:
    'Enter the address you would like to send to in the "To Address:" field. ',
  HELP_4CX_Desc_7:
    'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
  HELP_4CX_Desc_8: 'Click "Send Transaction". ',
  HELP_4CX_Desc_9:
    "Verify the address and the amount you are sending is correct. ",
  HELP_4CX_Desc_10: "Enter the password for that wallet. ",
  HELP_4CX_Desc_11: 'Click "Send Transaction." ',
  HELP_4CX_Desc_12: 'Using "Перевести эфир (ether) и токены" Page ',

  HELP_5_Title: "5) How do I run MyEtherWallet.com offline/locally? ",
  HELP_5_Desc_1:
    'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. ',
  HELP_5_Desc_7: "MyEtherWallet.com is now running entirely on your computer. ",
  HELP_5_Desc_8:
    "In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don't touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. ",
  HELP_5_Desc_9:
    "As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. ",

  HELP_5CX_Title:
    "5) How can I install this extension from the repo instead of the Chrome Store? ",
  HELP_5CX_Desc_2: "Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ",
  HELP_5CX_Desc_3:
    "Go to Google Chrome and find you settings (in the menu in the upper right). ",
  HELP_5CX_Desc_4: 'Click "Extensions" on the left. ',
  HELP_5CX_Desc_5:
    'Check the "Developer Mode" button at the top of that page. ',
  HELP_5CX_Desc_6: 'Click the "Load unpacked extension..." button. ',
  HELP_5CX_Desc_7:
    'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
  HELP_5CX_Desc_8:
    "The extension should now show up in your extensions and in your Chrome Extension bar. ",

  HELP_7_Title: "7) How do I send Tokens & add custom tokens? ",
  HELP_7_Desc_0:
    "[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ",
  HELP_7_Desc_1: 'Navigate to the "Перевести эфир (ether) и токены" page. ',
  HELP_7_Desc_2: "Unlock your wallet. ",
  HELP_7_Desc_3:
    'Enter the address you would like to send to in the "To Address:" field. ',
  HELP_7_Desc_4: "Enter the amount you would like to send. ",
  HELP_7_Desc_5: "Select which token you would like to send. ",
  HELP_7_Desc_6: "If you do not see the token listed: ",
  HELP_7_Desc_7: 'Click "Custom". ',
  HELP_7_Desc_8:
    'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
  HELP_7_Desc_9: 'Click "Save". ',
  HELP_7_Desc_10:
    "You can now send that token as well as see it's balance in the sidebar. ",
  HELP_7_Desc_11: 'Click "Generate Transaction". ',
  HELP_7_Desc_12:
    "A couple more fields will appear. This is your browser generating the transaction. ",
  HELP_7_Desc_13: 'Click the blue "Send Transaction" button below that. ',
  HELP_7_Desc_14:
    'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
  HELP_7_Desc_15:
    "The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ",

  HELP_8_Title: "8) What happens if your site goes down? ",
  HELP_8_Desc_1:
    "MyEtherWallet is not a web wallet. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. ",
  HELP_8_Desc_2:
    "If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn't have to \"get\" your Ether out of MyEtherWallet because it's not in MyEtherWallet. It's in whatever wallet your generated via our site. ",
  HELP_8_Desc_3:
    "You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. ",
  HELP_8_Desc_4:
    "In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren't storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. ",

  HELP_8CX_Title: "8) What happens if MyEtherWallet CX disappears? ",
  HELP_8CX_Desc_1:
    "First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it's all saved on your own computer. ",
  HELP_8CX_Desc_2:
    "That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. ",
  HELP_8CX_Desc_3:
    "If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. ",

  HELP_9_Title: '9) Is the "Перевести эфир (ether) и токены" page offline? ',
  HELP_9_Desc_1:
    'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

  HELP_10_Title: "10) How do I make an offline transaction? ",
  HELP_10_Desc_1:
    'Navigate to the "Offline Transaction" page via your online computer. ',
  HELP_10_Desc_2:
    'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
  HELP_10_Desc_3:
    'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
  HELP_10_Desc_4:
    'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
  HELP_10_Desc_5:
    'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
  HELP_10_Desc_6:
    'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
  HELP_10_Desc_7:
    "If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ",
  HELP_10_Desc_8:
    "Select your wallet file -or- your private key and unlock your wallet. ",
  HELP_10_Desc_9: 'Press the "GENERATE SIGNED TRANSACTION" button. ',
  HELP_10_Desc_10:
    "The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ",
  HELP_10_Desc_11:
    "On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. ",

  HELP_12_Title:
    "12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ",
  HELP_12_Desc_1: "Using an Geth/Mist JSON file from MyEtherWallet v2+.... ",
  HELP_12_Desc_2: 'Go to the "View Wallet Info" page. ',
  HELP_12_Desc_3:
    "Unlock your wallet using your **encrypted** private key or JSON file. ",
  HELP_12_Desc_4: 'Go to the "My Wallets" page. ',
  HELP_12_Desc_5:
    'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
  HELP_12_Desc_6:
    'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
  HELP_12_Desc_7: "Open the Ethereum Wallet application. ",
  HELP_12_Desc_8: 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
  HELP_12_Desc_9:
    "This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ",
  HELP_12_Desc_10: 'Your account should show up immediately under "Accounts." ',
  HELP_12_Desc_11: "Using your unencrypted private key... ",
  HELP_12_Desc_12:
    'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
  HELP_12_Desc_13:
    "Select your wallet file -or- enter/paste your private key to unlock your wallet. ",
  HELP_12_Desc_14: "Copy Your Private Key (unencrypted). ",
  HELP_12_Desc_15: "If you are on a Mac: ",
  HELP_12_Desc_15b: "Если вы используете ПК: ",
  HELP_12_Desc_16: "Open Text Edit and paste this private key. ",
  HELP_12_Desc_17:
    'Go to the menu bar and click "Format" -> "Make Plain Text". ',
  HELP_12_Desc_18:
    'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
  HELP_12_Desc_19:
    "Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ",
  HELP_12_Desc_20:
    "This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it. ",
  HELP_12_Desc_21:
    "After successful import, delete `nothing_special_delete_me.txt` ",
  HELP_12_Desc_22:
    'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
  HELP_12_Desc_23: "Open Notepad & paste the private key ",
  HELP_12_Desc_24: "Save the file as `nothing_special_delete_me.txt` at `C:` ",
  HELP_12_Desc_25:
    "Run the command, `geth account import C:\\nothing_special_delete_me.txt` ",
  HELP_12_Desc_26:
    "This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it. ",
  HELP_12_Desc_27:
    "After successful import, delete `nothing_special_delete_me.txt` ",
  HELP_12_Desc_28:
    'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

  HELP_13_Title:
    '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
  HELP_13_Desc_1:
    "This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ",

  HELP_14_Title:
    "14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe? ",
  HELP_14_Desc_1:
    "While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ",

  HELP_15_Title:
    "15) Why hasn't the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ",
  HELP_15_Desc_1:
    "Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ",

  HELP_16_Title: "16) How do I check the balance of my account? ",
  HELP_16_Desc_1:
    "You can use a blockchain explorer like [etherscan.io](https://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here's what our [donation account](https://etherscan.io/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D) looks like on etherscan.io ",

  HELP_17_Title:
    "17) Why isn't my balance showing up when I unlock my wallet? ",
  HELP_17_Desc_1:
    "This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ",

  HELP_18_Title: "18) Where is my geth wallet file? ",

  HELP_19_Title: "19) Where is my Mist wallet file? ",
  HELP_19_Desc_1:
    'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

  HELP_20_Title: "20) Where is my pre-sale wallet file? ",
  HELP_20_Desc_1:
    'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

  HELP_21_Title:
    "21) Couldn't everybody put in random private keys, look for a balance, and send to their own address? ",
  HELP_21_Desc_1:
    "Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ",
  HELP_21_Desc_2:
    "Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ",
  HELP_21_Desc_3:
    "In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ",
  HELP_21_Desc_4:
    "Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ",
  HELP_21_Desc_5:
    'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
  HELP_21_Desc_6:
    "If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ",
  HELP_21_Desc_7:
    "[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ",
  HELP_21_Desc_8:
    "Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that's a separate issue that can wait for another day. ",

  HELP_SecCX_Title: "Security - MyEtherWallet CX ",
  HELP_SecCX_Desc_1: "Where is this extension saving my information? ",
  HELP_SecCX_Desc_2:
    "The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. ",
  HELP_SecCX_Desc_3: "What information is saved? ",
  HELP_SecCX_Desc_4:
    "The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. ",
  HELP_SecCX_Desc_5: "Why aren't the nickname and wallet address encrypted? ",
  HELP_SecCX_Desc_6:
    "If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. ",

  HELP_Sec_Title: "Security ",
  HELP_Sec_Desc_1:
    'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. ',
  HELP_Sec_Desc_2:
    'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. ',
  HELP_Sec_Desc_3:
    'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. ',
  HELP_Sec_Desc_4:
    "Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ",
  HELP_Sec_Desc_5:
    "For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ",
  HELP_Sec_Desc_6:
    'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
  HELP_Sec_Desc_8:
    "If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ",

  HELP_FAQ_Title: "More Helpful Answers to Frequent Questions ",
  HELP_Contact_Title: "Ways to Get in Touch"
};

module.exports = ru;
