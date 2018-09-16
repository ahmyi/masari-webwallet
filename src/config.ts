let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wwtn.xtlpool.com/api/',

	
	coinUnitPlaces: 2,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero

	mainnetExplorerUrl: "https://explorer.stellite.cash/",
	addressPrefix: 9241,
	integratedAddressPrefix: 28822,
	subAddressPrefix: 52,
	
	testnet: false,
	testnetExplorerUrl: "http://testnet.msrchain.net/",
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefixTestnet: 73,
	
	feePerKB: new JSBigInt('15'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 12, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'XTTL',
	openAliasPrefix: "xtl",
	coinName: 'Stellite',
	coinUriPrefix: 'stellitecoin:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,
};
