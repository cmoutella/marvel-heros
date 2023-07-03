// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Hero } from '@/types'
import { checkThumbnail } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = Hero[] | { data: string}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  let data
  const { query } = req
  const { nameStartsWith } = query

  const endpoint = new URL(`api/heros?nameStartsWith=${nameStartsWith}`,
    "http://marvel-middleware.deno.dev/"
  )

  try {
    const data: Hero[] = await fetch(endpoint.href).then((_res) => _res.json())

    const withImageHeros = data.filter((hero: Hero) =>
          checkThumbnail(hero.thumbnail.path)
        );

    res.status(200).json(withImageHeros)
  } catch (err) {
    res.status(404).json({ data: 'Heros not found' })
  }
}
