import IssueSummary from "./_components/IssueSummary";
import LatestIssues from "./_components/LatestIssues";

export default function HomePage() {
  return (
    <main className="p-5">
      {/* <LatestIssues /> */}
      <IssueSummary />
    </main>
  );
}
