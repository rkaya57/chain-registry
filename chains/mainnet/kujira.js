module.exports = {
    chainID: 'kaiyo-1',
    lcd: 'https://kujira-api.polkachu.com',
    gasAdjustment: 1.75,
    gasPrices: {
        ukuji: 0.00119,
        'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986': 0.000625,
        'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F': 0.0015,
        'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': 0.000125,
        'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23': 0.00126,
        //'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2': 78492936,
        //'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7': 964351,
        /*
        'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07': 0.00652,
        'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10': 617283951,
        'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5': 0.000288,
        'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5': 0.00137,
        'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602': 0.0488,
        */
    },
    prefix: 'kujira',
    coinType: '118',
    baseAsset: 'ukuji',
    name: 'Kujira',
    chainRegistryName: 'kujira',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/Kujira.png',
    gitRepo: 'https://github.com/Team-Kujira/core.git',
    // ibc: {
    //   fromTerra: 'channel-10',
    //   toTerra: 'channel-5',
    //   icsFromTerra: {
    //     contract:
    //       'terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x',
    //     toTerra: 'channel-43',
    //     fromTerra: 'channel-34',
    //   },
    // },
    channels: {
        'phoenix-1': 'channel-5',
        'axelar-dojo-1': 'channel-9',
        'carbon-1': 'channel-46',
        'akashnet-2': 'channel-64',
        'cosmoshub-4': 'channel-0',
        'crescent-1': 'channel-67',
        'mars-1': 'channel-55',
        'migaloo-1': 'channel-58',
        'osmosis-1': 'channel-3',
        'stride-1': 'channel-35',
        'archway-1': 'channel-99',
        'noble-1': 'channel-62',
        'stafihub-1': 'channel-63',
    },
    alliance: true,
    explorer: {
        address: 'https://www.mintscan.io/kujira/account/{}',
        tx: 'https://www.mintscan.io/kujira/txs/{}',
        validator: 'https://www.mintscan.io/kujira/validators/{}',
        block: 'https://www.mintscan.io/kujira/blocks/id/{}',
    },
    tokens: [
        {
            token: 'ukuji',
            symbol: 'KUJI',
            name: 'Kujira',
            icon: process.env.CF_PAGES_URL + '/img/coins/Kuji.svg',
            decimals: 6,
            coinGeckoID: 'kujira',
        },
    ],
    cw20Tokens: require('../../cw20/tokens/mainnet/kujira'),
}
