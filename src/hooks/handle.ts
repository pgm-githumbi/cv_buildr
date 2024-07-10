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

export function useHandles<Handle = unknown>(
  fields: Array<keyof Handle>
): Record<keyof Handle, Handle[keyof Handle]> {
  const matches: UIMatch<unknown, Handle | unknown>[] = useMatches();

  let handles;
  const result = fields.map((field, index, array) => {
    handles = matches
      .filter((match) => Boolean((match.handle as Handle)?.[field]))
      .map((match) => (match.handle as Handle)?.[field]);
    return [field, handles?.[0]];
  });
  return Object.fromEntries(result);
}
