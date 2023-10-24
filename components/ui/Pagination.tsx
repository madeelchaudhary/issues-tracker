"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
}

const Pagination = ({ total, currentPage, perPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pages = Math.ceil(total / perPage);

  if (pages <= 1) return null;

  function handlePageChange(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  }

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pages}
      </Text>
      <Button variant="soft" disabled={currentPage === 1}>
        <RxDoubleArrowLeft />
      </Button>
      <Button variant="soft" disabled={currentPage === 1}>
        <GoChevronLeft />
      </Button>
      <Button variant="soft" disabled={currentPage === pages}>
        <GoChevronRight />
      </Button>
      <Button variant="soft" disabled={currentPage === pages}>
        <RxDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
