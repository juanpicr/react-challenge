interface BreakingWordProps {
  word: [string, string, string];
}

export const BreakingWord = ({ word }: BreakingWordProps) => {
  return (
    <p>
      {word[0]}
      {word[1] && <span className="bg-primary px-2">{word[1]}</span>}
      {word[2]}
    </p>
  );
};
