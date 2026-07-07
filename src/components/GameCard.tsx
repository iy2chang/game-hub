import type { Game } from "@/hooks/useGames";
import { Image, Card, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScores from "./CriticScores";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root height="100%" display="flex" flexDirection="column">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body display="flex" flexDirection="column" flex={1}>
        <Heading fontSize="2xl" lineClamp={1}>
          {game.name}
        </Heading>
        <HStack
          justifyContent={"space-between"}
          marginBottom={3}
          marginTop="auto"
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScores score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
