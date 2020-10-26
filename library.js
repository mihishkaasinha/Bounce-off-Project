function isTouching(game_random2, game_random)
{
  if (game_random2.x - game_random.x < game_random.width / 2 + game_random2.width / 2

    && game_random.x - game_random2.x < game_random2.width / 2 + game_random.width / 2

    && game_random2.y - game_random.y < game_random.height / 2 + game_random2.height / 2

    && game_random.y - game_random2.y < game_random2.height / 2 + game_random.height / 2)
    {
    return(true);
    }
else {
  return(false);
}

}