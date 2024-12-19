import {
  GoalValues,
  UseSpringProps,
  useInView,
  useSpring,
} from "@react-spring/web";

type Params<P> = {
  from: GoalValues<P>;
  to: GoalValues<P>;
} & Omit<UseSpringProps, "from" | "to">;

export function useAppearanceSpring<P extends object>({
  from,
  to,
  ...others
}: Params<P>) {
  const [ref, inView] = useInView({ once: true });
  const spring = useSpring<P>({
    from,
    to: inView ? to : from,
    ...others,
  });

  return { ref, spring };
}
