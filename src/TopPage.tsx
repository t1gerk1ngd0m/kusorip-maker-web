import kusorepMan from './images/kusorep_man.png'
import './App.css';
import { useQuery, gql } from '@apollo/client';


const TopPage = () => {
  return (
    <>
      <div>
        <h1>クソリプメーカー</h1>
        <p>あなたも品性のあるクソリプを</p>
      </div>
      <button className="btn btn-blue btn-lg">ルームを作成する</button>
      <div><img src={kusorepMan} alt="クソリプマン"/></div>
    </>
  );
}

export default TopPage;
