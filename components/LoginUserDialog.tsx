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
          <div className="bg-white fixed inset-0 m-auto w-11/12 max-w-screen-sm h-5/6 overflow-scroll">
            <p>This is a modal window.</p>
            <div className="flex items-center">
              <div>
                <img
                  className="rounded-full"
                  src={`${userInfo.avatar_url}`}
                  alt={`${userInfo.login}`}
                />
              </div>
              <h3>{userInfo.login}</h3>
            </div>
            <p>フォロー数: {userInfo.following}</p>
            <p>フォロワー数: {userInfo.followers}</p>
            <p>bio: {userInfo.bio}</p>
            <ul>
              {repos.map((repo) => (
                <li>
                  <div key={repo.id}>{repo.full_name}</div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
