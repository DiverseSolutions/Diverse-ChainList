export default function handler(req, res) {
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
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ]
    },
    {
      name: [ 'Ropsten' ,'Ropsten Testnet' ],
      chainId: 3,
      rpc: [ ],
      faucets: [
        'https://faucet.metamask.io/',
        'https://faucet.egorfine.com/',
      ],
      currency: 'ETH',
      explorers: [ 'https://ropsten.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ]
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
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ]
    },
    {
      name: [ 'Rinkeby' ,'Rinkeby Testnet' ],
      chainId: 4,
      rpc: [],
      faucets: [ 'https://faucet.rinkeby.io' ],
      currency: 'ETH',
      explorers: [ 'https://rinkeby.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ]
    },
    {
      name: [ 'Goerli' ,'Goerli Testnet' ],
      chainId: 5,
      rpc: [],
      faucets: [ 
        'https://goerli-faucet.slock.it',
        'https://goerlifaucet.com'
      ],
      currency: 'ETH',
      explorers: [ 'https://goerli.etherscan.io' ],
      logos: [ 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022' ]
    },

    // BSC
    {
      name: [ 'Binance Smart Chain', 'BSC', 'BSC Mainnet' ],
      chainId: 56,
      rpc: [
        'https://bsc-dataseed1.ninicoin.io',
      ],
      faucets: [],
      currency: 'BNB',
      explorers: [ 'https://bscscan.com' ],
      logos: [ 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022' ]
    },
    {
      name: [ 'Binance Smart Chain Testnet' ,'BSC Testnet' ],
      chainId: 97,
      rpc: [
        'https://data-seed-prebsc-1-s1.binance.org:8545',
      ],
      faucets: [ 
        'https://testnet.binance.org/faucet-smart',
      ],
      currency: 'BNB',
      explorers: [ 'https://testnet.bscscan.com/' ],
      logos: [ 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022' ]
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
      logos: [ 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=022' ]
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
      logos: [ 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=022' ]
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
      logos: [ 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022' ]
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
      logos: [ 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022' ]
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
      explorers: [ 'https://ftmscan.com/' ],
      logos: [ 'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022' ]
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
      explorers: [ 'https://testnet.ftmscan.com/' ],
      logos: [ 'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022' ]
    },

  ];


  res.status(200).json(chainlist)
}

