import { Suspense } from "react";
import { InputRepo } from "./components/InputRepo";
import { RepoList } from "./components/RepoList";
import { RepoDetailDialog } from "./components/dialog/RepoDetailDialog";
import { LoginUserDialog } from "@/app/components/dialog/LoginUserDialog";
import { Loading } from "./Loading";

export default function Home() {
  return (
    <main className="bg-main pt-12 min-h-screen">
      <div className="container w-11/12 md:w-3/6 max-w-screen-lg mx-auto text-center mt-5">
        <Suspense fallback={<Loading />}>
          <InputRepo />
        </Suspense>
          <RepoList />
      </div>
      <LoginUserDialog />
      <RepoDetailDialog />
    </main>
  );
}
