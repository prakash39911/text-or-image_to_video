import { getUserCredits } from "@/app/actions/authActions";
import ChatWindow from "@/components/ChatWindow";

export default async function Page() {
  const credit = await getUserCredits();

  return (
    <div className="bg-muted/50 vertical-center w-full">
      <div className="flex justify-center items-center text-white h-full">
        <ChatWindow credit={credit} />
      </div>
    </div>
  );
}
