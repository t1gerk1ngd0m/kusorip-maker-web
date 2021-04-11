import './App.css';
import { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

type ID = {
  id: string
}

type ParamTypes = {
  id: string,
  memberId: string
}

const FETCH_ROOM_MEMBERS = gql`
  query Room($id: ID!) {
    room(id: $id) {
      members {
        id
        name
      }
    }
  }
`

const RoomMemberPage = () => {
  const { id: roomId, memberId } = useParams<ParamTypes>()
  const { loading, error, data } = useQuery(FETCH_ROOM_MEMBERS, {
    variables: {
      id: roomId
    },
  });
  console.log(roomId)
  console.log(memberId)

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
          {data && data.room.members.map((member: any) => (
            <tr key={member.id}><td>{member.name}</td></tr>
          ))}
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

export default RoomMemberPage;
