// Site content lives here. Edit this file to update the page.
// TODO(kyuringo): replace the placeholder texts below with your own words.

export const profile = {
  name: 'kyuringo',
  handle: 'kyuringo0312',
  tagline: 'アプリ・Web・データ分析をつくっています。',
  about: [
    'ここに自己紹介を書きます（例：所属、興味のある分野、いま取り組んでいること）。',
    'Claude Code を相棒に、作ったものを公開して使ってもらうことを目標にしています。',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/kyuringo0312' },
  ],
};

export type Work = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status: 'live' | 'wip' | 'planned';
};

export const works: Work[] = [
  {
    title: 'このサイト',
    description: 'Astro で作り、GitHub への push で Cloudflare に自動デプロイしています。',
    tags: ['Astro', 'Cloudflare', 'GitHub Actions'],
    href: 'https://github.com/kyuringo0312/portfolio',
    status: 'live',
  },
  {
    title: 'Web アプリ（準備中）',
    description: '次に公開する Web アプリをここに載せます。',
    tags: ['Web'],
    status: 'planned',
  },
  {
    title: 'Kaggle（準備中）',
    description: '参加したコンペと解法のまとめをここに載せます。',
    tags: ['Kaggle', 'Python'],
    status: 'planned',
  },
];
