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
    title: 'スタートページ',
    description:
      '新しいタブで毎日開く、20〜30 代向けのスタートページです。検索・ショートカット・ToDo・メモを最初の画面にまとめました。ToDo とメモは声でも入力できます。「AI で優先度」を押すと、判定専用モデル Jev（Cloudflare Workers AI）が急ぎ・大事を判定して並べ替えます。データは端末にだけ保存します。',
    tags: ['Astro', 'TypeScript', 'Cloudflare Workers AI', 'Web Speech API', 'Playwright'],
    href: 'https://startpage.auyuto-com.workers.dev',
    status: 'live',
  },
  {
    title: 'Kaggle（準備中）',
    description: '参加したコンペと解法のまとめをここに載せます。',
    tags: ['Kaggle', 'Python'],
    status: 'planned',
  },
];
