'use client';
import { useParams } from 'next/navigation';
import {
  defaultCollectionsArr,
  type TCollections,
  patterns,
  websitesArr as websiteCreds,
  type TWebsite,
} from '@/lib/data';
import Collection from '@components/collection';
import { shuffle } from '@/lib/utils';
import PasswordCard from '@/components/passwordCard';

enum ESources {
  collections = 'collections',
  logins = 'logins',
  bankCards = 'bankCards',
  ids = 'ids',
  notes = 'notes',
  trash = 'trash',
}

export default function ExampleClientComponent() {
  const { slug } = useParams<{ slug: string }>();
  const shuffledPatterns = shuffle(patterns);

  return (
    <div className="">
      <div className="text-3xl font-semibold capitalize">
        {slug.replace('-', ' ')}
      </div>

      {slug === ESources.collections && (
        <div className="flex flex-wrap justify-between mt-8">
          {defaultCollectionsArr.map(
            (collection: TCollections, _index: number) => (
              <Collection
                key={_index}
                title={collection.title}
                className={shuffledPatterns[_index] || shuffledPatterns[0]}
              />
            )
          )}
        </div>
      )}

      {slug === ESources.logins && (
        <div className="pt-8">
          <div className="flex items-center p-4">
            <div className="flex-1">Website</div>
            <div className="flex-1">Password</div>
            <div className="flex-1">Last Updated At</div>
            <div className="flex-1">Strength</div>
          </div>
          {websiteCreds.map((login: TWebsite, _index: number) => (
            <PasswordCard key={_index} login={login} />
          ))}
        </div>
      )}
    </div>
  );
}
