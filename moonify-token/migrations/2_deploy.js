const Moonify = artifacts.require("Moonify");

module.exports = async function (deployer){
    await deployer.deploy(Moonify);
}
