import './App.css';
import { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const RoomPage = () => {
  return (
    <>
      <div>
        <h1>クソリプを考えよう</h1>
        <p>お題に対してクソリプを入力してください</p>
      </div>
      <table className="table">
        <thead>
          <tr><th>このルームにいるのは？</th></tr>
        </thead>
        <tbody>
          <tr><td>クソリプおじさん</td></tr>
          <tr><td>クソリプおばさん</td></tr>
          <tr><td>クソリプ小僧</td></tr>
        </tbody>
      </table>
      <div className="theme-box">
        <p>真赤でおいしそうなリンゴを見つけたので買ってきた。食べるの楽しみ～！</p>
      </div>
      <form className="form-panel">
        <div className="form-group">
          <textarea
            cols={90}
            rows={10}
            placeholder="クソリプおじさんになりきってクソリプを書こう！"
            className="form-text"
          ></textarea>
        </div>
        <button
          className="btn btn-blue btn-lg"
          type="submit"
        >
          クソリプする
        </button>
      </form>
    </>
  )
}

export default RoomPage;
