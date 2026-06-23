import { Spinner, Card } from "@heroui/react";

import { MovieCast } from "@/types";
import { BASE_TMDB_IMAGE_URL, MOVIE_POSTER_SIZE } from "@/configs";

type CastListProps = {
  isLoading?: boolean;
  castList: MovieCast[];
};

export const CastList = ({ isLoading, castList }: CastListProps) => {
  return (
    <section>
      <h2 className="text-4xl font-bold my-8">Cast</h2>

      {isLoading && (
        <div className="flex justify-center items-center my-16">
          <Spinner size="lg" color="current" />
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
        {castList.map((cast) => (
          <Card className="shadow-sm" key={cast.cast_id}>
            <Card.Content className="overflow-visible p-0">
              <img
                alt={cast.original_name}
                loading="lazy"
                className="w-full object-cover h-[200px] rounded-t-xl"
                src={
                  cast.profile_path
                    ? `${BASE_TMDB_IMAGE_URL}/${MOVIE_POSTER_SIZE}/${cast.profile_path}`
                    : "/no_image.jpg"
                }
              />
            </Card.Content>
            <Card.Footer className="text-sm flex flex-col flex-grow">
              <b>{cast.original_name}</b>
              <p className="text-muted">{cast.character}</p>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
