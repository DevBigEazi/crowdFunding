import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CrowdFundingModule = buildModule("CrowdFundingModule", (m) => {
  const crowdFundingModule = m.contract("CrowdFunding");

  return { crowdFundingModule };
});

export default CrowdFundingModule;
