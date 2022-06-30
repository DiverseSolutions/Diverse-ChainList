const chainlist = [
    // Ethereum
    {
      name: [ 'Ethereum' ,'Ethereum Mainnet' ],
      chainId: 1,
      rpc: [
        'https://mainnet.infura.io/v3/'
      ],
      faucets: [],
      currency: 'ETH',
      explorers: [ 'https://etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${3}&chainName=${'Ethereum'}&rpcUrl=${'https://mainnet.infura.io/v3/'}&blockExplorerUrl=${'https://etherscan.io'}&iconUrl=${'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022'}&currencyName=${'Ethereum'}&currencySymbol=${'ETH'}&currencyDecimals=${18}`, },
    {
      name: [ 'Ropsten' ,'Ropsten Testnet' ],
      chainId: 3,
      rpc: [
        'https://ropsten.infura.io/v3/'
      ],
      faucets: [
        'https://faucet.metamask.io/',
        'https://faucet.egorfine.com/',
      ],
      currency: 'ETH',
      explorers: [ 'https://ropsten.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${3}&chainName=${'Ropsten'}&rpcUrl=${'https://ropsten.infura.io/v3/'}&blockExplorerUrl=${'https://ropsten.etherscan.io'}&iconUrl=${'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022'}&currencyName=${'Ethereum'}&currencySymbol=${'ETH'}&currencyDecimals=${18}`,
    },
    {
      name: [ 'Kovan' ,'Kovan Testnet' ],
      chainId: 42,
      rpc: [
        'https://ropsten.infura.io/v3/',
        'https://kovan.poa.network',
        'http://kovan.poa.network:8545'
      ],
      faucets: [
        'https://faucet.kovan.network',
        'https://gitter.im/kovan-testnet/faucet',
      ],
      currency: 'ETH',
      explorers: [ 'https://kovan.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${42}&chainName=${'Kovan'}&rpcUrl=${'https://ropsten.infura.io/v3/'}&blockExplorerUrl=${'https://kovan.etherscan.io'}&iconUrl=${'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022'}&currencyName=${'Ethereum'}&currencySymbol=${'ETH'}&currencyDecimals=${18}`,
    },
    {
      name: [ 'Rinkeby' ,'Rinkeby Testnet' ],
      chainId: 4,
      rpc: [
        'https://rinkeby.infura.io/v3/'
      ],
      faucets: [ 'https://faucet.rinkeby.io' ],
      currency: 'ETH',
      explorers: [ 'https://rinkeby.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${4}&chainName=${'Rinkeby'}&rpcUrl=${'https://rinkeby.infura.io/v3/'}&blockExplorerUrl=${'https://rinkeby.etherscan.io'}&iconUrl=${'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022'}&currencyName=${'Ethereum'}&currencySymbol=${'ETH'}&currencyDecimals=${18}`,
    },
    {
      name: [ 'Goerli' ,'Goerli Testnet' ],
      chainId: 5,
      rpc: [
        'https://goerli.infura.io/v3/'
      ],
      faucets: [ 
        'https://goerli-faucet.slock.it'
      ],
      currency: 'ETH',
      explorers: [ 'https://goerli.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${5}&chainName=${'Goerli'}&rpcUrl=${'https://rinkeby.infura.io/v3/'}&blockExplorerUrl=${'https://goerli.etherscan.io'}&iconUrl=${'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022'}&currencyName=${'Ethereum'}&currencySymbol=${'ETH'}&currencyDecimals=${18}`,
    },

    // BSC
    {
      name: [ 'BNB Chain', 'BSC', 'BSC Mainnet' ],
      chainId: 56,
      rpc: [
        'https://bsc-dataseed1.ninicoin.io',
      ],
      faucets: [],
      currency: 'BNB',
      explorers: [ 'https://bscscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${56}&chainName=${'Binance%20Smart%20Chain'}&rpcUrl=${'https://bsc-dataseed1.ninicoin.io'}&blockExplorerUrl=${'https://bscscan.com'}&iconUrl=${'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022'}&currencyName=${'Binance'}&currencySymbol=${'BNB'}&currencyDecimals=${18}`,
    },
    {
      name: [ 'BNB Testnet' ,'BSC Testnet' ],
      chainId: 97,
      rpc: [
        'https://data-seed-prebsc-1-s1.binance.org:8545',
      ],
      faucets: [ 
        'https://testnet.binance.org/faucet-smart',
      ],
      currency: 'BNB',
      explorers: [ 'https://testnet.bscscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?chainId=${97}&chainName=${'Binance%20Smart%20Chain%20Testnet'}&rpcUrl=${'https://data-seed-prebsc-1-s1.binance.org:8545'}&blockExplorerUrl=${'https://testnet.bscscan.com/'}&iconUrl=${'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022'}&currencyName=${'Binance'}&currencySymbol=${'BNB'}&currencyDecimals=${18}`,
    },

    // Polygon
    {
      name: [ 'Polygon', 'Matic Network', 'Polygon Mainnet' ],
      chainId: 137,
      rpc: [
        'https://polygon-rpc.com',
      ],
      faucets: [],
      currency: 'MATIC',
      explorers: [ 'https://polygonscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${137}&`+
      `chainName=${'Polygon'}&`+
      `rpcUrl=${'https://polygon-rpc.com'}&`+
      `blockExplorerUrl=${'https://polygonscan.com'}&`+
      `iconUrl=${'https://cryptologos.cc/logos/polygon-matic-logo.png?v=022'}&`+
      `currencyName=${'Matic'}&`+
      `currencySymbol=${'MATIC'}&`+
      `currencyDecimals=${18}`,
    },
    {
      name: [ 'Mumbai' ,'Mumbai Testnet' ],
      chainId: 80001,
      rpc: [
        'https://matic-mumbai.chainstacklabs.com',
        'https://rpc-mumbai.maticvigil.com',
      ],
      faucets: [ 
        'https://faucet.polygon.technology',
      ],
      currency: 'MATIC',
      explorers: [ 'https://mumbai.polygonscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${80001}&`+
      `chainName=${'Mumbai%20Testnet'}&`+
      `rpcUrl=${'https://matic-mumbai.chainstacklabs.com'}&`+
      `blockExplorerUrl=${'https://mumbai.polygonscan.com'}&`+
      `iconUrl=${'https://cryptologos.cc/logos/polygon-matic-logo.png?v=022'}&`+
      `currencyName=${'Matic'}&`+
      `currencySymbol=${'MATIC'}&`+
      `currencyDecimals=${18}`,
    },

    // Avalanche
    {
      name: [ 'Avalanche', 'Avalanche Mainnet' ],
      chainId: 43114,
      rpc: [
        'https://api.avax.network/ext/bc/C/rpc'
      ],
      faucets: [],
      currency: 'AVAX',
      explorers: [ 'https://snowtrace.io' ],
      logos: [ 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${43114}&`+
      `chainName=${'Avalanche'}&`+
      `rpcUrl=${'https://api.avax.network/ext/bc/C/rpc'}&`+
      `blockExplorerUrl=${'https://snowtrace.io'}&`+
      `iconUrl=${'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022'}&`+
      `currencyName=${'Avalanche'}&`+
      `currencySymbol=${'AVAX'}&`+
      `currencyDecimals=${18}`,
    },
    {
      name: [ 'Fuji', 'Avalanche Testnet', 'Fuji Testnet' ],
      chainId: 43113,
      rpc: [
        'https://api.avax-test.network/ext/bc/C/rpc'
      ],
      faucets: [
        'https://faucet.avax-test.network'
      ],
      currency: 'AVAX',
      explorers: [ 'https://testnet.snowtrace.io' ],
      logos: [ 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${43113}&`+
      `chainName=${'Fuji'}&`+
      `rpcUrl=${'https://api.avax-test.network/ext/bc/C/rpc'}&`+
      `blockExplorerUrl=${'https://testnet.snowtrace.io'}&`+
      `iconUrl=${'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022'}&`+
      `currencyName=${'Avalanche'}&`+
      `currencySymbol=${'AVAX'}&`+
      `currencyDecimals=${18}`,
    },

    // Fantom
    {
      name: ['Fantom', 'Fantom Opera', 'Fantom Mainnet' ],
      chainId: 250,
      rpc: [
        'https://rpcapi.fantom.network/'
      ],
      faucets: [],
      currency: 'FTM',
      explorers: [ 'https://ftmscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${250}&`+
      `chainName=${'Fantom%20Opera'}&`+
      `rpcUrl=${'https://rpcapi.fantom.network/'}&`+
      `blockExplorerUrl=${'https://ftmscan.com/'}&`+
      `iconUrl=${'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022'}&`+
      `currencyName=${'Fantom'}&`+
      `currencySymbol=${'FTM'}&`+
      `currencyDecimals=${18}`,
    },
    {
      name: ['Fantom Testnet' ],
      chainId: 4002,
      rpc: [
        'https://rpc.testnet.fantom.network'
      ],
      faucets: [
        'https://faucet.fantom.network/'
      ],
      currency: 'FTM',
      explorers: [ 'https://testnet.ftmscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${4002}&`+
      `chainName=${'Fantom%20Testnet'}&`+
      `rpcUrl=${'https://rpc.testnet.fantom.network'}&`+
      `blockExplorerUrl=${'https://testnet.ftmscan.com/'}&`+
      `iconUrl=${'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022'}&`+
      `currencyName=${'Fantom'}&`+
      `currencySymbol=${'FTM'}&`+
      `currencyDecimals=${18}`,
    },

    // Corex
    {
      name: ['Corex', 'Corex Mainnet' ],
      chainId: 1104,
      rpc: [
        'https://node.corexchain.io'
      ],
      faucets: [],
      currency: 'CRX',
      explorers: [ 'https://explorer.corexchain.io' ],
      logos: [ 'https://tokenimg.dsolutions.mn/tokens/crx.png' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${1104}&`+
      `chainName=${'Corex'}&`+
      `rpcUrl=${'https://node.corexchain.io'}&`+
      `blockExplorerUrl=${'https://explorer.corexchain.io'}&`+
      `iconUrl=${'https://storage.googleapis.com/i06di2x5g7ox05l3e-i06di2x5g7ox/crx-logo.png'}&`+
      `currencyName=${'Corex'}&`+
      `currencySymbol=${'CRX'}&`+
      `currencyDecimals=${18}`,
    },
    {
      name: ['Corex Testnet' ],
      chainId: 3305,
      rpc: [
        'https://node-testnet.corexchain.io'
      ],
      faucets: [
        'https://faucet.corexchain.io/'
      ],
      currency: 'CRX',
      explorers: [ 'https://explorer-testnet.corexchain.io' ],
      logos: [ 'https://tokenimg.dsolutions.mn/tokens/crx.png' ],
      addChainLink: `https://metamask.dsolutions.mn/add-chain?`+
      `chainId=${3305}&`+
      `chainName=${'Corex%20Testnet'}&`+
      `rpcUrl=${'https://node-testnet.corexchain.io'}&`+
      `blockExplorerUrl=${'https://explorer-testnet.corexchain.io'}&`+
      `iconUrl=${'https://storage.googleapis.com/i06di2x5g7ox05l3e-i06di2x5g7ox/crx-logo.png'}&`+
      `currencyName=${'Corex'}&`+
      `currencySymbol=${'CRX'}&`+
      `currencyDecimals=${18}`,
    },

  ];

export {
  chainlist
};
