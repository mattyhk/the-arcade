import React from "react";
import tournaments from "../json/tournaments.json";
import Countdown from "react-countdown";

const GalleryPage = () => {
  return (
    <main className="md:pt-32 pt-10 container">
      <div>
        <div className="mx-auto cursed-text-small text-2xl mb-5 md:text-left text-center">
          Current Tournaments
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-12 justify-items-center">
          {tournaments
            .filter((tour) => tour.started >= Date.now())
            .map((tour, index) => (
              <a href="/snake">
                <div className="flex flex-col w-64" key={`currentTour${index}`}>
                  <div className="flex">
                    <img className="h-64" src={tour.image} alt="" />
                  </div>

                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="mb-1">{tour.collection}</div>
                      <div>{tour.name}</div>
                    </div>

                    <div className="flex flex-col text-right">
                      <div className="mb-1">
                        <Countdown
                          renderer={({
                            hours,
                            minutes,
                            seconds,
                            completed,
                            days,
                          }) => {
                            if (completed) {
                              return <span>Winner</span>;
                            } else {
                              return (
                                <span>
                                  {days ? `${days}d` : ""} {hours}h {minutes}m
                                </span>
                              );
                            }
                          }}
                          date={tour.started}
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className="whitespace-nowrap">Current:</span>
                        <span className="pr-3">{tour.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>

      <div className="mt-24">
        <div className="mx-auto cursed-text-small text-2xl mb-5 md:text-left text-center">
          Previous Tournaments
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-20 gap-y-12 justify-items-center">
          {tournaments
            .filter((tour) => tour.started < Date.now())
            .map((tour, index) => (
              <div className="flex flex-col w-64" key={`pastTour${index}`}>
                <div className="flex">
                  <img className="h-64" src={tour.image} alt="" />
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col justify-between">
                    <div className="mb-1">{tour.collection}</div>
                    <div>{tour.name}</div>
                  </div>

                  <div className="flex flex-col text-right justify-between">
                    <div className="mb-1">
                      <span>{tour.winner}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="whitespace-nowrap">Raised:</span>
                      <span className="pr-3">{tour.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
