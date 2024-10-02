import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import UserInfo from "@/app/experimentalcomponents/UserInfo";

const queryClient:QueryClient = new QueryClient();
export default function Home() {

    return (
        <>
          <QueryClientProvider client={queryClient}>
            <h2>zeezip project!</h2>
            <UserInfo />
          </QueryClientProvider>
        </>
    );
}
