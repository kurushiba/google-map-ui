import './index.css';
import SpotCard from '../SpotCard';

export default function SpotList() {
  /* ローディング中のUI（コメントインで確認）
  return <div className='spot-list-loading'>読み込み中...</div>;
  */

  /* 空状態のUI（コメントインで確認）
  return <div className='spot-list-empty'>スポットが見つかりません</div>;
  */

  return (
    <div className='spot-list'>
      <SpotCard />
      <SpotCard />
      <SpotCard />
    </div>
  );
}
