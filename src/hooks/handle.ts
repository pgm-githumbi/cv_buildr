import { UIMatch, useMatches } from "react-router-dom";

export function useHandle<D = unknown, Handle = unknown>(
  field: keyof Handle
): (NonNullable<Handle>[keyof Handle] | undefined)[] {
  const matches: UIMatch<D | unknown, Handle | unknown>[] = useMatches();
  const handles = matches
    .filter((match) => Boolean((match.handle as Handle)?.[field]))
    .map((match) => (match.handle as Handle)?.[field]);
  return handles;
}
