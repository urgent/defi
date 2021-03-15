const Factory = artifacts.require("UniswapV2Factory.so");

module.exports = async function (deployer, _network, addresses) {
    await deployer.deploy(Factory, addresses[0]);
};
