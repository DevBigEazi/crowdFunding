import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";

const CrowdFundingModule = buildModule("CrowdFundingModule", (m) => {
  const crowdFundingModule = m.contract("CrowdFunding", [
    hre.ethers.parseUnits("20", 18),
  ]);

  return { crowdFundingModule };
});

export default CrowdFundingModule;
