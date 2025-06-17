import { auth } from "@/auth";
import BillingTable from "@/components/BillingTable";
import { GetBillingInfo } from "../../actions/DatabaseActions";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session?.user.id) {
    redirect("/");
  }

  const billingData = await GetBillingInfo(session?.user.id);

  return (
    <div className="vertical-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        {billingData ? (
          <BillingTable billingData={billingData} />
        ) : (
          <div className="text-2xl text-teal-500 font-bold flex justify-center items-center min-h-screen">
            No data found...
          </div>
        )}
      </div>
    </div>
  );
}
