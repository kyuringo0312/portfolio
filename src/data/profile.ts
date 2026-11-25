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
      '新しいタブで毎日開く、シンプルで使いやすいスタートページです。検索・ショートカット・ToDo・メモを最初の画面にまとめ、ポモドーロのタイマーも付いています。データは端末にだけ保存し、オフラインでも動きます。Claude Code の定期実行で機能を足し、最後にペルソナと Apple の HIG に沿って作り直しました。',
    tags: ['Astro', 'TypeScript', 'PWA', 'Playwright', 'Cloudflare'],
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
