import { GameParams } from "@/components/Game";
import Game from "@/components/Game";

export default function GamePage({ params }: { params: GameParams }) {
  return <Game {...params} />;
}
