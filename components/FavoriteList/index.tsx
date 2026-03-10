import './index.css';
import SpotCard from '../SpotCard';

export default function FavoriteList() {
  /* ローディング中のUI（コメントインで確認）
  return <div className='favorite-list-loading'>読み込み中...</div>;
  */

  /* 空状態のUI（コメントインで確認）
  return <div className='favorite-list-empty'>お気に入りがありません</div>;
  */

  return (
    <div className='favorite-list'>
      <SpotCard />
      <SpotCard />
    </div>
  );
}
