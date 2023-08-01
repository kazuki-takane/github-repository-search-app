"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { isUserDialogOpen } from "@/app/state/isUserDialogOpen";
import { loginUserInfo } from "@/app/state/loginUserInfo";
import { loginUserRepos } from "@/app/state/loginUserRepos";

export const LoginUserDialog = () => {
  const [isOpen, setIsOpen] = useRecoilState(isUserDialogOpen);
  const userInfo = useRecoilValue(loginUserInfo);
  const repos = useRecoilValue(loginUserRepos);
  console.log(repos);

  const handleExceptClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    } else return;
  };

  return (
    <>
      {isOpen && (
        <div
          className="bg-gray-400/50 fixed inset-0 w-screen h-screen"
          onClick={handleExceptClick}
        >
          <div className="bg-white fixed inset-0 m-auto w-11/12 max-w-screen-sm h-5/6 rounded-lg p-4 md:p-8 overflow-auto">
            <div className="flex items-center">
              <div className="w-16 md:w-24 mr-8">
                <img
                  className="rounded-full"
                  src={`${userInfo.avatar_url}`}
                  alt={`${userInfo.login}`}
                />
              </div>
              <h3 className="text-base md:text-2xl break-words w-3/5">{userInfo.login}</h3>
            </div>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              フォロー数:
              <span className="ml-2 text-base md:text-xl">
                {userInfo.following}
              </span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              フォロワー数:
              <span className="ml-2 text-base md:text-xl">
                {userInfo.followers}
              </span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              bio:
              <span className="ml-2 text-base md:text-xl">{userInfo.bio}</span>
            </p>
            <p className="mt-3 text-sm md:text-lg">リポジトリ一覧</p>
            <ul className="mt-2">
              {repos.map((repo) => (
                <li className="border rounded bg-white mt-4 p-2 md:p-4 shadow">
                  <p key={repo.id}>{repo.name}</p>
                  <a
                    className="text-xs md:text-base decoration-cyan-500 text-cyan-500 hover:opacity-70 break-words"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.html_url}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="absolute top-4 right-4 p-1 text-xs md:text-base text-white rounded bg-cyan-500 hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
};
