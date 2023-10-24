import Pagination from "@/components/ui/Pagination";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Button</Button>
      <Pagination total={100} perPage={10} currentPage={1} />
    </main>
  );
}
