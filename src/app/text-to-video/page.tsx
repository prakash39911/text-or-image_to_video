import ChatWindow from "@/components/ChatWindow";

export default function Page() {
  return (
    <div className="bg-muted/50 vertical-center w-full">
      <div className="flex justify-center items-center text-white h-full">
        <ChatWindow />
      </div>
    </div>
  );
}
