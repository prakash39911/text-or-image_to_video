import { useSession } from "next-auth/react";

export const useSessionData = () => {
  const session = useSession();

  return session.data?.user?.id;
};
