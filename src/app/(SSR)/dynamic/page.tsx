import { UnsplashImage } from '@/models/unsplash-images';
import Image from 'next/image';
import Link from 'next/link';
import { Alert } from '@/components/bootstrap';
export const metadata = {
  title: 'Dynamic Fetching-Photos Gallery',
};

export const revalidate = 0;

export default async function Page() {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=' +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div>
      <Alert>
        This page fetches and caches data from <strong>Unsplash</strong>, only
        50 images per hour are allowed.
      </Alert>
      <div className='d-flex flex-colum align-items-center'>
        <Image
          src={image.urls.raw}
          width={width}
          height={height}
          alt={image.description}
          className='rounded shadow mw-100 h-100'
        />
      </div>
      <div>
        by{' '}
        <Link href={'/users/' + image.user.username}>
          {image.user.username}
        </Link>
      </div>
    </div>
  );
}
