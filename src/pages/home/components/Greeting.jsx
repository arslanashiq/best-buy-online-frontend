import { UseAppContext } from "../../../context/AppContext";

function Greeting() {
  const { userData } = UseAppContext();
  return (
    <div className="userInfoWel">
      <div>Hi! Welcome</div>
      <div className="userDataInfo">
        <span>{userData?.user_name}</span>
        <img
          src="https://bestbuyonlines.com/css/h/upload/base_file/9fe69abf4e4129cf/935554b488e9b651.png"
          alt=""
          style={{ width: "20px", height: "20px", marginLeft: "10px" }}
        />
      </div>
    </div>
  );
}

export default Greeting;
