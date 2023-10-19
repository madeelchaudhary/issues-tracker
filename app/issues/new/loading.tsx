import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <Box className="max-w-xl p-5">
      <Skeleton width={200} height={30} />
      <Skeleton height="20rem" />
      <Skeleton width={200} height={30} />
    </Box>
  );
};

export default loading;
