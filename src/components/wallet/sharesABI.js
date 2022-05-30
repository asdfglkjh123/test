// import NFTContractBuild from 'contracts/NFT.json';
import Web3 from 'web3';

let selectedAccount;

// let nftContract;
let erc20SharesContract;
let erc20StaxContract;
let erc20BusdContract;
let erc20PancakeContract;
let erc20PairContract;

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
            inputs: [],
            name: 'getPrice',
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
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                }
            ],
            name: 'distributeDividends',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [],
            name: 'distributeFirstDividends',
            outputs: [],
            stateMutability: 'nonpayable',
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
            name: 'getPreDividends',
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
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'string',
                                    name: 'stakename',
                                    type: 'string'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'since',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'created',
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
                    internalType: 'address',
                    name: '_staker',
                    type: 'address'
                }
            ],
            name: 'hasStakeSuper',
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
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'string',
                                    name: 'stakenamesuper',
                                    type: 'string'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'since',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'created',
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
                            internalType: 'struct Stakeable.StakeSuper[]',
                            name: 'stakessuper',
                            type: 'tuple[]'
                        }
                    ],
                    internalType: 'struct Stakeable.StakingSummarySuper',
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
            name: 'withdrawStakeSuper',
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
            constant: true,
            inputs: [],
            name: 'getReserves',
            outputs: [
                { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
                { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
                { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' }
            ],
            payable: false,
            stateMutability: 'view',
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
        },
        {
            constant: true,
            inputs: [],
            name: 'getReserves',
            outputs: [
                { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
                { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
                { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function'
        },
        {
            inputs: [],
            name: 'claimDividend',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                }
            ],
            name: 'distributeDividends',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [],
            name: 'distributeFirstDividends',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_amountsuper',
                    type: 'uint256'
                },
                {
                    internalType: 'string',
                    name: '_stakenamesuper',
                    type: 'string'
                }
            ],
            name: 'stakeSuper',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
        },
        {
            inputs: [
                { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
                { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
                { internalType: 'address[]', name: 'path', type: 'address[]' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'deadline', type: 'uint256' }
            ],
            name: 'swapExactTokensForTokens',
            outputs: [{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }],
            stateMutability: 'nonpayable',
            type: 'function'
        }
    ];

    erc20SharesContract = new web3.eth.Contract(erc20Abi, '0x3Ab4b7392788C54BB6E978eB4cCc4290bd1C31AC');
    erc20StaxContract = new web3.eth.Contract(erc20Abi, '0x09712607134d4119a678dE94242505Be98C6Ae42');
    erc20BusdContract = new web3.eth.Contract(erc20Abi, '0xd389253265dd6b85C47c410EC5fF0c6A383CE949');
    erc20PancakeContract = new web3.eth.Contract(erc20Abi, '0xDE2Db97D54a3c3B008a097B2260633E6cA7DB1AF');
    erc20PairContract = new web3.eth.Contract(erc20Abi, '0xC5077a8CDFBc186c041E77CB9653663c1Bc1d18B');

    isInitialized = true;
};
export const swapStaxAndBusd = async (value, slippage, path) => {
    if (!isInitialized) {
        await init();
    }
    return erc20PancakeContract.methods
        .swapExactTokensForTokens(value, slippage, path, selectedAccount, 1952316616)
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
};
export const claimDiv = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20SharesContract.methods
        .claimDividend()
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
};
export const distributeFirstDiv = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20SharesContract.methods
        .distributeFirstDividends()
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
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
export const getsSTXPrice = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20SharesContract.methods
        .getPrice()
        .call()
        .then((balance) => Web3.utils.fromWei(balance, 'ether'));
};
export const getStaxPrice = async () => {
    if (!isInitialized) {
        await init();
    }

    return erc20PairContract.methods.getReserves().call();
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
export const getSTXPriceFull = async () => {
    if (!isInitialized) {
        await init();
    }

    // eslint-disable-next-line no-underscore-dangle
    return erc20SharesContract.methods
        .getPrice()
        .call()
        .then((balance) => Web3.utils.toWei(balance, 'ether'));
};
export const stakeHas = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.hasStake(selectedAccount).call();
};
export const stakeSuperHas = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.hasStakeSuper(selectedAccount).call();
};
export const stakeHasSuper = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.hasStakeSuper(selectedAccount).call();
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
export const stakeStaxSuper = async (value2, stakename) => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.stakeSuper(value2, stakename).send({ from: selectedAccount });
};

export const approve = async (priceToApprove) => {
    if (!isInitialized) {
        await init();
    }
    return erc20BusdContract.methods
        .approve('0x3Ab4b7392788C54BB6E978eB4cCc4290bd1C31AC', priceToApprove)
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
};
export const approveStax = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods
        .approve('0xde2db97d54a3c3b008a097b2260633e6ca7db1af', 1000000000000000000000000000000n)
        .send({ from: selectedAccount })
        .catch((err) => {
            console.log(err);
        });
};
export const approveBusd = async () => {
    if (!isInitialized) {
        await init();
    }
    return erc20BusdContract.methods
        .approve('0xde2db97d54a3c3b008a097b2260633e6ca7db1af', 1000000000000000000000000000000n)
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

    return erc20SharesContract.methods
        .getPreDividends()
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
export const withdrawAmountSuper = async (withdrawAmount, index) => {
    if (!isInitialized) {
        await init();
    }
    return erc20StaxContract.methods.withdrawStakeSuper(withdrawAmount, index).send({ from: selectedAccount });
};
