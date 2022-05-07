// import NFTContractBuild from 'contracts/NFT.json';
import Web3 from 'web3';

let selectedAccount;

// let nftContract;
let erc20SharesContract;
let erc20StaxContract;
let erc20BusdContract;

let isInitialized = false;

export const init = async () => {
    const provider = window.ethereum;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (typeof provider !== 'undefined') {
        provider
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                selectedAccount = accounts[0];
                console.log(`Selected account is ${selectedAccount}`);
            })
            .catch((err) => {
                console.log(err);
            });

        window.ethereum.on('accountsChanged', (accounts) => {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        });
    }

    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();

    const erc20Abi = [
        {
            constant: true,
            inputs: [
                {
                    name: '_owner',
                    type: 'address'
                }
            ],
            name: 'balanceOf',
            outputs: [
                {
                    name: 'balance',
                    type: 'uint256'
                }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function'
        },
        {
            inputs: [],
            name: '_getSoldSHARES',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function'
        },
        {
            constant: true,
            inputs: [],
            name: 'totalSupply',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256'
                }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'samount',
                    type: 'uint256'
                }
            ],
            name: 'PurchaseSHARES',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [],
            name: 'getSTXPrice',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256'
                }
            ],
            stateMutability: 'view',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_staker',
                    type: 'address'
                }
            ],
            name: 'hasStake',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'total_amount',
                            type: 'uint256'
                        },
                        {
                            components: [
                                {
                                    internalType: 'address',
                                    name: 'user',
                                    type: 'address'
                                },
                                {
                                    internalType: 'string',
                                    name: 'stakename',
                                    type: 'string'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'since',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'claimable',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'sharesbonus',
                                    type: 'uint256'
                                }
                            ],
                            internalType: 'struct Stakeable.Stake[]',
                            name: 'stakes',
                            type: 'tuple[]'
                        }
                    ],
                    internalType: 'struct Stakeable.StakingSummary',
                    name: '',
                    type: 'tuple'
                }
            ],
            stateMutability: 'view',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                },
                {
                    internalType: 'uint256',
                    name: 'stake_index',
                    type: 'uint256'
                }
            ],
            name: 'withdrawStake',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address'
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                }
            ],
            name: 'approve',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool'
                }
            ],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256'
                },
                {
                    internalType: 'string',
                    name: '_stakename',
                    type: 'string'
                }
            ],
            name: 'stake',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        }
    ];

    erc20SharesContract = new web3.eth.Contract(erc20Abi, '0xb08CE509caFb6660E4F7b951Fbb8ae63930a6aEE');
    erc20StaxContract = new web3.eth.Contract(erc20Abi, '0xF224398d6d757142eDE2F6AFFa4837DBDa9C04CA');
    erc20BusdContract = new web3.eth.Contract(erc20Abi, '0xd389253265dd6b85C47c410EC5fF0c6A383CE949');

    isInitialized = true;
};
export const ggetOwnBalance = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20SharesContract.methods
        .balanceOf(selectedAccount)
        .call()
        .then((balance) => Web3.utils.toWei(balance, 'wei'));
};
export const sharesTotalSupply = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20SharesContract.methods
        .totalSupply()
        .call()
        .then((totalsupply) => Web3.utils.toWei(totalsupply, 'wei'));
};
export const soldShares = async () => {
    if (!isInitialized) {
        await init();
    }

    // eslint-disable-next-line no-underscore-dangle
    return (
        // eslint-disable-next-line no-underscore-dangle
        erc20SharesContract.methods
            ._getSoldSHARES()
            .call()
            .then((sold) => Web3.utils.toWei(sold, 'wei'))
    );
};
export const getSTXPrice = async () => {
    if (!isInitialized) {
        await init();
    }

    // eslint-disable-next-line no-underscore-dangle
    return erc20SharesContract.methods
        .getSTXPrice()
        .call()
        .then((balance) => Web3.utils.fromWei(balance, 'ether'));
};
export const getSTXPriceFull = async () => {
    if (!isInitialized) {
        await init();
    }

    // eslint-disable-next-line no-underscore-dangle
    return erc20SharesContract.methods
        .getSTXPrice()
        .call()
        .then((balance) => Web3.utils.toWei(balance, 'ether'));
};
export const stakeHas = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.hasStake(selectedAccount).call();
};
export const purchaseSharess = async (value) => {
    if (!isInitialized) {
        await init();
    }
    return erc20SharesContract.methods
        .PurchaseSHARES(value)
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
};
export const stakeStax = async (value2, stakename) => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.stake(value2, stakename).send({ from: selectedAccount });
};

export const approve = async (address, priceToApprove) => {
    if (!isInitialized) {
        await init();
    }
    return erc20BusdContract.methods
        .approve('0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee', priceToApprove)
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
};

export const ggetStaxBalance = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20StaxContract.methods
        .balanceOf(selectedAccount)
        .call()
        .then((balance) => Web3.utils.fromWei(balance, 'ether'));
};
export const ggetBUSDBalance = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20BusdContract.methods
        .balanceOf(selectedAccount)
        .call()
        .then((balance) => Web3.utils.fromWei(balance, 'ether'));
};
export const ggetTotalDividends = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20BusdContract.methods
        .balanceOf('0xb08ce509cafb6660e4f7b951fbb8ae63930a6aee')
        .call()
        .then((balance) => Web3.utils.fromWei(balance, 'ether'));
};
export const ggetTotalSTAXSupply = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20StaxContract.methods
        .totalSupply()
        .call()
        .then((balance) => Web3.utils.fromWei(balance, 'ether'));
};
export const withdrawAmount = async (withdrawAmount, index) => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.withdrawStake(withdrawAmount, index).send({ from: selectedAccount });
};
