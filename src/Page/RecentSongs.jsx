import React, { useEffect } from "react";
import { SongsList, LoadingSpinner } from "../components";
import { Logo, LogoText } from "../components";
import { useUserContext } from "../Context/UserContext";
import { usePlayerContext } from "../Context/PlayerContext";

const RecentSongs = () => {
  const { login_success, User_id } = useUserContext();
  const {
    getRecentSongs,
    recent_song_loading: loading,
    recent_songs,
  } = usePlayerContext();
  useEffect(() => {
    if (login_success) {
      getRecentSongs(User_id);
    }
  }, []);

  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-darkBlue -z-20 max-md:pr-0 pr-32 ">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <div>
      <section className=" flex justify-center items-center py-20  rounded-b-2xl mb-16 relative h-48">
        <div className=" absolute inset-0 flex justify-end viewall rounded-b-2xl">
          {/* <Logo /> */}
        </div>
        <div className=" text-white ml-3 max-lg:ml-11 ">
          {/* <LogoText /> */}
          Radio Adventista
        </div>
      </section>

      <section className=" px-14 max-md:px-2 overflow-auto">
        <h3 className="text-neutral-50  text-2xl max-md:text-xl px-4 mb-5">
          {/* Recent songs */}
        </h3>
        {login_success ? (
          <SongsList songs={recent_songs} current={"RecentSongs"} />
        ) : (
          <div className="w-full flex justify-center items-center mt-10">
            <p className="text-neutral-400 w-1/2 text-center max-md:w-full max-md:px-4">
              Pagina en construcción
              <br />
              <br />
              {/* Access to recent songs is only available to logged-in users.
              Please log in to view your recent songs or try again later. */}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RecentSongs;
