import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <Box className="p-5">
      <Skeleton className="max-w-xl" />
      <Flex gap="3" my="2">
        <Skeleton width={80} />
        <Skeleton width={112} />
      </Flex>
      <Card className="prose mt-5 markdown">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default loading;
