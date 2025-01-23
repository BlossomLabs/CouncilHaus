export const getCouncilImage = (council: `0x${string}` | undefined) => {
  if (
    council === "0xFa942226E5dd1E2d4D99014982846786B09939DA" ||
    council === "0xB0A240F3887436A94fC2Af895103350971E271da"
  ) {
    return "https://ipfs.blossom.software/ipfs/QmSkDgv6nQEUM5GjKCpqCiuKvMVYs63KqFveNH6DSra9ve";
  }
  return "";
};
