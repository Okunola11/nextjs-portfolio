import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import OtherProjects from "./OtherProjects";

export default function AnimatedProjects() {
  const element = OtherProjects();
  return (
    <InfiniteMovingCards element={element} direction="right" speed="normal" />
  );
}
