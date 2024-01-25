import { useSelector } from 'react-redux'

import {RootState} from "../store";

import { BreakingWord } from './BreakingWord';

export const BreakingName = () => {
  const firstName = useSelector((state: RootState) => state.breakify.breakingFirstName)
  const lastName = useSelector((state: RootState) => state.breakify.breakingLastName)
  return (
    <div className="text-white text-8xl font-semibold text-center space-y-8">
      <BreakingWord word={firstName} />
      <BreakingWord word={lastName} />
    </div>
  );
};
