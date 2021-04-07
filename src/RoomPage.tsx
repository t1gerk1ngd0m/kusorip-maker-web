import './App.css';

const RoomPage = () => {
  return (
    <>
      <div>
        <h1>メンバー登録</h1>
        <p>名前を入力してルームに入室してください</p>
      </div>
      <form className="form-panel">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="あなたの名前"
          />
        </div>
        <button
          className="btn btn-blue btn-lg"
          type="submit"
        >
          ルームに入室する
        </button>
      </form>
    </>
  )
}

export default RoomPage;
