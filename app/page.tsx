import { InputRepo } from "./InputRepo";
import { RepoList } from "./RepoList";
import { RepoDetailDialog } from "../components/RepoDetailDialog";
import { LoginUserDialog } from "@/components/LoginUserDialog";

export default function Home() {
  return (
    <main className="bg-main pt-12 min-h-screen">
      <div className="container w-11/12 md:w-3/6 max-w-screen-lg mx-auto text-center mt-5">
        <InputRepo />
        <RepoList />
      </div>
      <LoginUserDialog />
      <RepoDetailDialog />
    </main>
  );
}
